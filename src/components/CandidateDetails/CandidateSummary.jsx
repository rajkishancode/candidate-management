import React from "react";

const CandidateSummary = ({ candidate, handleEdit, onDelete }) => {
  return (
    <div>
      <div className="flex items-center mb-4">
        <img
          src={candidate.profile_picture}
          alt={`${candidate.name}'s profile`}
          className="w-16 h-16 rounded-full mr-4"
        />
        <div>
          <h2 className="text-2xl font-semibold">{candidate.name}</h2>
          <p className="text-gray-600">{candidate.email}</p>
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Personal Details</h3>
        <p>
          <strong>Gender:</strong> {candidate.gender}
        </p>
        <p>
          <strong>Hobbies:</strong> {candidate.hobbies.join(", ")}
        </p>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Education</h3>
        {candidate.education.map((edu, index) => (
          <div key={index} className="mb-2">
            <p>
              <strong>Institute:</strong> {edu.institute}
            </p>
            <p>
              <strong>Degree:</strong> {edu.degree}
            </p>
            <p>
              <strong>Percentage:</strong> {edu.percentage}
            </p>
            <p>
              <strong>Pass Out Year:</strong> {edu.pass_out_year}
            </p>
          </div>
        ))}
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Skills</h3>
        {candidate.skills.map((skill, index) => (
          <div key={index} className="mb-2">
            <p>
              <strong>Skill:</strong> {skill.name}
            </p>
            <p>
              <strong>Experience:</strong> {skill.experience} years
            </p>
          </div>
        ))}
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Experience</h3>
        {candidate.experience.map((exp, index) => (
          <div key={index} className="mb-2">
            <p>
              <strong>Company:</strong> {exp.company}
            </p>
            <p>
              <strong>Role:</strong> {exp.role}
            </p>
            <p>
              <strong>Duration:</strong> {exp.duration}
            </p>
          </div>
        ))}
      </div>
      <div className="flex space-x-4">
        <button
          onClick={handleEdit}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
        >
          Edit
        </button>
        <button
          onClick={onDelete}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CandidateSummary;
