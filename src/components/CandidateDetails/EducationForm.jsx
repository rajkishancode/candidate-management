import React from "react";

const EducationForm = ({
  handleChange,
  editedCandidate,
  removeEntry,
  setEditedCandidate,
}) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Step 2: Education</h3>
      {editedCandidate.education.map((edu, index) => (
        <div key={index} className="border p-4 mb-4 rounded-md shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Institute:</label>
              <input
                type="text"
                value={edu.institute}
                onChange={(e) =>
                  handleChange(e, "education", index, "institute")
                }
                className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Degree:</label>
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => handleChange(e, "education", index, "degree")}
                className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">Percentage:</label>
              <input
                type="number"
                value={edu.percentage}
                onChange={(e) =>
                  handleChange(e, "education", index, "percentage")
                }
                className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm font-semibold mb-1">
                Pass Out Year:
              </label>
              <input
                type="number"
                value={edu.pass_out_year}
                onChange={(e) =>
                  handleChange(e, "education", index, "pass_out_year")
                }
                className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <button
            type="button"
            onClick={() => removeEntry("education", index)}
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
            education: [
              ...prevState.education,
              {
                institute: "",
                degree: "",
                percentage: "",
                pass_out_year: "",
              },
            ],
          }))
        }
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Add Education
      </button>
    </div>
  );
};

export default EducationForm;
