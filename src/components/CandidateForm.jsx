import { useState } from "react";

const initialCandidate = {
  profile_picture: "",
  name: "",
  address: "",
  phone: "",
  email: "",
  gender: "",
  hobbies: [],
  education: [
    {
      institute: "",
      degree: "",
      percentage: "",
      pass_out_year: "",
    },
  ],
  skills: [
    {
      name: "",
      experience: "",
    },
  ],
  experience: [
    {
      company: "",
      project: "",
      role: "",
      team_size: "",
      duration_from: "",
      duration_to: "",
    },
  ],
  id: "",
};

// eslint-disable-next-line react/prop-types
const CandidateForm = ({ onSave }) => {
  const [candidate, setCandidate] = useState(initialCandidate);

  const handleChange = (e, arrayName, index, field) => {
    const newValue = e.target.value;

    setCandidate((prevState) => {
      const updatedArray = prevState[arrayName].map((item, i) => {
        if (i === index) {
          return {
            ...item,
            [field]: newValue,
          };
        }
        return item;
      });

      return {
        ...prevState,
        [arrayName]: updatedArray,
      };
    });
  };

  const handleSimpleChange = (e) => {
    const { name, value } = e.target;
    setCandidate((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addEntry = (arrayName, newEntry) => {
    setCandidate((prevState) => ({
      ...prevState,
      [arrayName]: [...prevState[arrayName], newEntry],
    }));
  };

  const removeEntry = (arrayName, index) => {
    setCandidate((prevState) => ({
      ...prevState,
      [arrayName]: prevState[arrayName].filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission,send candidate data to an API
    console.log(candidate);
    onSave(candidate);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 p-6 bg-white shadow-md rounded-md"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">
            Profile Picture URL:
          </label>
          <input
            type="text"
            name="profile_picture"
            value={candidate.profile_picture}
            onChange={handleSimpleChange}
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Name:</label>
          <input
            type="text"
            name="name"
            value={candidate.name}
            onChange={handleSimpleChange}
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Address:</label>
          <input
            type="text"
            name="address"
            value={candidate.address}
            onChange={handleSimpleChange}
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Phone:</label>
          <input
            type="text"
            name="phone"
            value={candidate.phone}
            onChange={handleSimpleChange}
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Email:</label>
          <input
            type="email"
            name="email"
            value={candidate.email}
            onChange={handleSimpleChange}
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Gender:</label>
          <select
            name="gender"
            value={candidate.gender}
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
            value={candidate.hobbies.join(", ")}
            onChange={(e) =>
              handleSimpleChange({
                target: { name: "hobbies", value: e.target.value.split(", ") },
              })
            }
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Education</h3>
        {candidate.education.map((edu, index) => (
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
            addEntry("education", {
              institute: "",
              degree: "",
              percentage: "",
              pass_out_year: "",
            })
          }
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
        >
          Add Education
        </button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Skills</h3>
        {candidate.skills.map((skill, index) => (
          <div key={index} className="border p-4 mb-4 rounded-md shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">
                  Skill Name:
                </label>
                <input
                  type="text"
                  value={skill.name}
                  onChange={(e) => handleChange(e, "skills", index, "name")}
                  className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">
                  Experience (months):
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
          onClick={() => addEntry("skills", { name: "", experience: "" })}
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
        >
          Add Skill
        </button>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Experience</h3>
        {candidate.experience.map((exp, index) => (
          <div key={index} className="border p-4 mb-4 rounded-md shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">Company:</label>
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
                <label className="text-sm font-semibold mb-1">Project:</label>
                <input
                  type="text"
                  value={exp.project}
                  onChange={(e) =>
                    handleChange(e, "experience", index, "project")
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
                <label className="text-sm font-semibold mb-1">
                  Duration From:
                </label>
                <input
                  type="text"
                  value={exp.duration_from}
                  onChange={(e) =>
                    handleChange(e, "experience", index, "duration_from")
                  }
                  className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold mb-1">
                  Duration To:
                </label>
                <input
                  type="text"
                  value={exp.duration_to}
                  onChange={(e) =>
                    handleChange(e, "experience", index, "duration_to")
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
            addEntry("experience", {
              company: "",
              project: "",
              role: "",
              duration_from: "",
              duration_to: "",
            })
          }
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
        >
          Add Experience
        </button>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
      >
        Save
      </button>
    </form>
  );
};

export default CandidateForm;
