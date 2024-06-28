import React from "react";

const SkillsForm = ({
  setEditedCandidate,
  editedCandidate,
  handleChange,
  removeEntry,
}) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Step 3: Skills</h3>
      {editedCandidate.skills.map((skill, index) => (
        <div key={index} className="border p-4 mb-4 rounded-md shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Skill Name:</label>
              <input
                type="text"
                value={skill.name}
                onChange={(e) => handleChange(e, "skills", index, "name")}
                className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">
                Experience (in years):
              </label>
              <input
                type="number"
                value={skill.experience}
                onChange={(e) => handleChange(e, "skills", index, "experience")}
                className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={() => removeEntry("skills", index)}
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
            skills: [...prevState.skills, { name: "", experience: "" }],
          }))
        }
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Add Skill
      </button>
    </div>
  );
};

export default SkillsForm;
