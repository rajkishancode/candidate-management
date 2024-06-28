import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CandidateCard from "../components/CandidateCard";
import CandidateDetails from "../components/CandidateDetails";
import CandidateForm from "../components/CandidateForm";
import Header from "../components/Header";
import {
  createCandidate,
  getCandidates,
  updateCandidate,
  deleteCandidate,
} from "../api/candidates";

const HomePage = () => {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [isNewCandidate, setIsNewCandidate] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCandidates = async () => {
      const response = await getCandidates();
      setCandidates(response.data);
    };
    fetchCandidates();
  }, []);

  useEffect(() => {
    if (id === "new") {
      setSelectedCandidate(null);
      setIsNewCandidate(true);
    } else if (id) {
      const candidate = candidates.find((c) => c.id === id);
      setSelectedCandidate(candidate);
      setIsNewCandidate(false);
    }
    console.log("isNewCandidate:", isNewCandidate);
    console.log("selectedCandidate:", selectedCandidate);
  }, [id, candidates, selectedCandidate]);

  const handleSelectCandidate = (candidate) => {
    setIsNewCandidate(false);
    navigate(`/candidate/${candidate.id}`);
  };

  const handleAddCandidate = () => {
    setIsNewCandidate(true);
    navigate("/candidate/new");
  };

  const handleSaveCandidate = async (candidateData) => {
    try {
      if (isNewCandidate) {
        const response = await createCandidate(candidateData);
        setCandidates([...candidates, response.data]);
        navigate(`/candidate/${response.data.id}`);
      } else {
        await updateCandidate(selectedCandidate.id, candidateData);
        setCandidates(
          candidates.map((c) =>
            c.id === selectedCandidate.id ? candidateData : c
          )
        );
        setSelectedCandidate(candidateData);
      }
    } catch (error) {
      console.error("Error saving candidate:", error);
    }
  };

  const handleDeleteCandidate = async (id) => {
    try {
      await deleteCandidate(id);
      setCandidates(candidates.filter((c) => c.id !== id));
      setSelectedCandidate(null);
      navigate("/home");
    } catch (error) {
      console.error("Error deleting candidate:", error);
    }
  };

  return (
    <div>
      <Header />
      <div className="flex min-h-screen bg-gray-100 p-4">
        <div className="w-1/2 p-4 bg-white rounded-lg shadow-md">
          <button
            onClick={handleAddCandidate}
            className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300"
          >
            Add Candidate
          </button>
          {candidates.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              candidate={candidate}
              onSelectCandidate={handleSelectCandidate}
            />
          ))}
        </div>
        <div className="w-1/2 p-4 bg-white rounded-lg shadow-md">
          {isNewCandidate ? (
            <CandidateForm onSave={handleSaveCandidate} />
          ) : selectedCandidate ? (
            <CandidateDetails
              candidate={selectedCandidate}
              onSave={handleSaveCandidate}
              onDelete={() => handleDeleteCandidate(selectedCandidate.id)}
            />
          ) : (
            <div className="text-gray-600">
              Select a candidate to see details
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
