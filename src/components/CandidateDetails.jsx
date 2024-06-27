// const CandidateDetails = ({ candidate, onEdit, onDelete }) => {
//   return (
//     <div className="bg-white shadow-md rounded-lg p-6 mb-4">
//       <div className="flex items-center space-x-6 mb-6">
//         <img
//           src={candidate.profile_picture}
//           alt={candidate.name}
//           className="w-20 h-20 rounded-full object-cover"
//         />
//         <div>
//           <h2 className="text-2xl font-bold text-gray-900">{candidate.name}</h2>
//           <p className="text-gray-600">{candidate.email}</p>
//           <p className="text-gray-600">{candidate.phone}</p>
//           <p className="text-gray-600">{candidate.address}</p>
//           <p className="text-gray-600">Gender: {candidate.gender}</p>
//         </div>
//       </div>
//       <div className="mb-6">
//         <h3 className="text-xl font-semibold text-gray-800 mb-2">Hobbies</h3>
//         <ul className="list-disc list-inside text-gray-700">
//           {candidate?.hobbies?.map((hobby, index) => (
//             <li key={index}>{hobby}</li>
//           ))}
//         </ul>
//       </div>
//       <div className="mb-6">
//         <h3 className="text-xl font-semibold text-gray-800 mb-2">Education</h3>
//         <ul className="list-disc list-inside text-gray-700">
//           {candidate.education.map((edu, index) => (
//             <li key={index}>
//               <strong>{edu.institute}</strong> ({edu.degree}), {edu.percentage}%
//               - {edu.pass_out_year}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="mb-6">
//         <h3 className="text-xl font-semibold text-gray-800 mb-2">Skills</h3>
//         <ul className="list-disc list-inside text-gray-700">
//           {candidate.skills.map((skill, index) => (
//             <li key={index}>
//               {skill.name} - {skill.experience} years of experience
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="mb-6">
//         <h3 className="text-xl font-semibold text-gray-800 mb-2">Experience</h3>
//         <ul className="list-disc list-inside text-gray-700">
//           {candidate.experience.map((exp, index) => (
//             <li key={index}>
//               <strong>{exp.company}</strong>: {exp.project} ({exp.role})
//               <br />
//               Team Size: {exp.team_size}, Duration: {exp.duration_from} to{" "}
//               {exp.duration_to}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="flex space-x-4">
//         <button
//           onClick={onEdit}
//           className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
//         >
//           Edit
//         </button>

//         <button
//           onClick={onDelete}
//           className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
//         >
//           Delete
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CandidateDetails;
//backup code

import { useState } from "react";

const CandidateDetails = ({ candidate, onSave, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [editedCandidate, setEditedCandidate] = useState(candidate);

  const handleEdit = () => {
    setIsEditing(true);
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
  console.log("editedCandidate in CandidateDetails", editedCandidate);
  // const handleChange = (e, arrayName, index, field) => {
  //   const newValue = e.target.value;

  //   setEditedCandidate((prevState) => {
  //     const updatedArray = prevState[arrayName].map((item, i) => {
  //       if (i === index) {
  //         return {
  //           ...item,
  //           [field]: newValue,
  //         };
  //       }
  //       return item;
  //     });

  //     return {
  //       ...prevState,
  //       [arrayName]: updatedArray,
  //     };
  //   });
  // };
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
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Step 1: Personal Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="text-sm font-semibold mb-1">
                    Profile Picture URL:
                  </label>
                  <input
                    type="text"
                    name="profile_picture"
                    value={editedCandidate.profile_picture}
                    onChange={handleSimpleChange}
                    className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-semibold mb-1">Name:</label>
                  <input
                    type="text"
                    name="name"
                    value={editedCandidate.name}
                    onChange={handleSimpleChange}
                    className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-semibold mb-1">Email:</label>
                  <input
                    type="email"
                    name="email"
                    value={editedCandidate.email}
                    onChange={handleSimpleChange}
                    className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-semibold mb-1">Gender:</label>
                  <select
                    name="gender"
                    value={editedCandidate.gender}
                    onChange={handleSimpleChange}
                    className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-semibold mb-1">Hobbies:</label>
                  <input
                    type="text"
                    name="hobbies"
                    value={editedCandidate.hobbies.join(", ")}
                    onChange={(e) =>
                      handleSimpleChange({
                        target: {
                          name: "hobbies",
                          value: e.target.value.split(", "),
                        },
                      })
                    }
                    className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          )}
          {currentStep === 2 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Step 2: Education</h3>
              {editedCandidate.education.map((edu, index) => (
                <div
                  key={index}
                  className="border p-4 mb-4 rounded-md shadow-sm"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label className="text-sm font-semibold mb-1">
                        Institute:
                      </label>
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
                      <label className="text-sm font-semibold mb-1">
                        Degree:
                      </label>
                      <input
                        type="text"
                        value={edu.degree}
                        onChange={(e) =>
                          handleChange(e, "education", index, "degree")
                        }
                        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm font-semibold mb-1">
                        Percentage:
                      </label>
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
          )}
          {currentStep === 3 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Step 3: Skills</h3>
              {editedCandidate.skills.map((skill, index) => (
                <div
                  key={index}
                  className="border p-4 mb-4 rounded-md shadow-sm"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex flex-col">
                      <label className="text-sm font-semibold mb-1">
                        Skill Name:
                      </label>
                      <input
                        type="text"
                        value={skill.name}
                        onChange={(e) =>
                          handleChange(e, "skills", index, "name")
                        }
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
                        onChange={(e) =>
                          handleChange(e, "skills", index, "experience")
                        }
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
          )}
          {currentStep === 4 && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Step 4: Experience</h3>
              {editedCandidate.experience.map((exp, index) => (
                <div
                  key={index}
                  className="border p-4 mb-4 rounded-md shadow-sm"
                >
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
                      <label className="text-sm font-semibold mb-1">
                        Role:
                      </label>
                      <input
                        type="text"
                        value={exp.role}
                        onChange={(e) =>
                          handleChange(e, "experience", index, "role")
                        }
                        className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-sm font-semibold mb-1">
                        Duration:
                      </label>
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
      )}
    </div>
  );
};

export default CandidateDetails;
