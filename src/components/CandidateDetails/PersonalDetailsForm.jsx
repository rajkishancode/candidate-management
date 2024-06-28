import React from "react";

const PersonalDetailsForm = ({ editedCandidate, handleSimpleChange }) => {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">Step 1: Personal Details</h3>
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
  );
};

export default PersonalDetailsForm;
