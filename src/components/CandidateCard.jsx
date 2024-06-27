const CandidateCard = ({ candidate, onSelectCandidate }) => {
  return (
    <div
      className="border p-4 mb-4 rounded-lg shadow-sm cursor-pointer hover:bg-gray-50 transition duration-200"
      onClick={() => onSelectCandidate(candidate)}
    >
      <h3 className="text-lg font-semibold text-gray-900">{candidate.name}</h3>
      <p className="text-gray-600">{candidate.email}</p>
    </div>
  );
};

export default CandidateCard;
