import React from "react";

const ExperienceForm = ({
  editedCandidate,
  setEditedCandidate,
  handleChange,
  removeEntry,
}) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Step 4: Experience</h3>
      {editedCandidate.experience.map((exp, index) => (
        <div key={index} className="border p-4 mb-4 rounded-md shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">
                Company Name:
              </label>
              <input
                type="text"
                value={exp.company}
                onChange={(e) =>
                  handleChange(e, "experience", index, "company")
                }
                className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Role:</label>
              <input
                type="text"
                value={exp.role}
                onChange={(e) => handleChange(e, "experience", index, "role")}
                className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Duration:</label>
              <input
                type="text"
                value={exp.duration}
                onChange={(e) =>
                  handleChange(e, "experience", index, "duration")
                }
                className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={() => removeEntry("experience", index)}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          setEditedCandidate((prevState) => ({
            ...prevState,
            experience: [
              ...prevState.experience,
              { company: "", role: "", duration: "" },
            ],
          }))
        }
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Add Experience
      </button>
    </div>
  );
};

export default ExperienceForm;
