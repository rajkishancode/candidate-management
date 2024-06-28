import { useState } from "react";
import PersonalDetailsForm from "./PersonalDetailsForm";
import EducationForm from "./EducationForm";
import SkillsForm from "./SkillsForm";
import ExperienceForm from "./ExperienceForm";
import CandidateSummary from "./CandidateSummary";

const CandidateDetails = ({ candidate, onSave, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [editedCandidate, setEditedCandidate] = useState(candidate);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedCandidate(candidate);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setCurrentStep(1);
    setEditedCandidate(candidate);
  };

  const handleNextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePreviousStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSave = () => {
    onSave(editedCandidate);
    setIsEditing(false);
    setCurrentStep(1);
  };

  const handleChange = (e, field, index = null, subfield = null) => {
    const value = e.target.value;
    if (index !== null && subfield !== null) {
      setEditedCandidate((prevState) => {
        const updatedField = [...prevState[field]];
        updatedField[index][subfield] = value;
        return { ...prevState, [field]: updatedField };
      });
    } else {
      setEditedCandidate({ ...editedCandidate, [field]: value });
    }
  };

  const handleSimpleChange = (e) => {
    const { name, value } = e.target;
    setEditedCandidate((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const removeEntry = (arrayName, index) => {
    setEditedCandidate((prevState) => {
      const updatedArray = prevState[arrayName].filter((_, i) => i !== index);
      return {
        ...prevState,
        [arrayName]: updatedArray,
      };
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      {isEditing ? (
        <div>
          {currentStep === 1 && (
            <PersonalDetailsForm
              editedCandidate={editedCandidate}
              handleSimpleChange={handleSimpleChange}
            />
          )}
          {currentStep === 2 && (
            <EducationForm
              handleChange={handleChange}
              editedCandidate={editedCandidate}
              removeEntry={removeEntry}
              setEditedCandidate={setEditedCandidate}
            />
          )}
          {currentStep === 3 && (
            <SkillsForm
              setEditedCandidate={setEditedCandidate}
              editedCandidate={editedCandidate}
              handleChange={handleChange}
              removeEntry={removeEntry}
            />
          )}
          {currentStep === 4 && (
            <ExperienceForm
              editedCandidate={editedCandidate}
              setEditedCandidate={setEditedCandidate}
              handleChange={handleChange}
              removeEntry={removeEntry}
            />
          )}
          <div className="flex justify-between mb-4">
            {currentStep > 1 && (
              <button
                onClick={handlePreviousStep}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Previous
              </button>
            )}
            {currentStep < 4 && (
              <button
                onClick={handleNextStep}
                className="bg-blue-500 text-white px-4 py-2 rounded"
              >
                Next
              </button>
            )}
          </div>
          <div className="flex justify-between">
            <button
              onClick={handleCancel}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
            {currentStep === 4 && (
              <button
                onClick={handleSave}
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
            )}
          </div>
        </div>
      ) : (
        <CandidateSummary
          candidate={candidate}
          handleEdit={handleEdit}
          onDelete={onDelete}
        />
      )}
    </div>
  );
};

export default CandidateDetails;
