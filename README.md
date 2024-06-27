# Candidate Management Application

This project is a web application built using React for managing candidate information. It features social login functionality and provides a user-friendly interface to add, view, edit, and delete candidate details.

## Features
 1.  Social Login: Implemented with Google, Facebook, and LinkedIn authentication.
 2. Home Screen:
    - Two equal horizontal sections:
        -  Left Section: List of candidates.
        -  Right Section: Candidate details.
3. Add Candidate:
   - Displays a form to add a new candidate.
   - Route: /candidate/new.
4.View Candidate Details:
   - Click on a candidate card to view details.
   - Route: /candidate/<candidate_id>.
5. Edit Candidate:
-Multi-step form to edit candidate details.
Steps include:
    - Step 1: Personal Details
            -  Profile picture, Name, Email, Gender, Hobbies (multi-select).
    - Step 2: Education
           -  Name of School/College/Institute, Year of graduation.
    - Step 3: Skills
           - Name of Skill, Experience in months.
    - Step 4: Experience
          - Name of the company, Project, Role, Duration range in months (start and end date).


## API Reference

#### Get All Candidates


```http
  GET https://60d5a2c2943aa60017768b01.mockapi.io/candidate
```

#### Create a Candidate

```http
  POST https://60d5a2c2943aa60017768b01.mockapi.io/candidate
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `data`      | `object` | **Required**. data of candidate to create |

#### createCandidate(data)

Takes data ,save it and returns the response.


#### Update a Candidate

```http
  PUT https://60d5a2c2943aa60017768b01.mockapi.io/candidate/<candidate_id>
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id , data`      | `string,object` | **Required**. id and data of candidate to update  |

#### updateCandidate(id, data)

Takes id , data and updated  the candidate.


#### Delete a Candidate

```http
  DELETE https://60d5a2c2943aa60017768b01.mockapi.io/candidate/<candidate_id>
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id `      | `string` | **Required**. id of candidate to delete  |

#### deleteCandidate(id,)

Takes id  and delete  the candidate.

## Project Setup

### Prerequisites

    - Node.js and npm
    - React Router v6

### Installation
    - Clone the repository and install dependencies:
    
    - git clone https://github.com/yourusername/candidate-management-app.git
    - cd candidate-management-app
    - yarn install
    

    
## Running the Application
    - Start the development server:
    - yarn dev
    - The application will be available at http://localhost:5173.

```
src/
│
├── components/
│   ├── CandidateCard.jsx
│   ├── CandidateDetails.jsx
│   ├── CandidateForm.jsx
│   ├── EditCandidateForm.jsx
│   └── Header.jsx
│
├── pages/
│   ├── HomePage.jsx
│   ├── LoginPage.jsx
│   └── NotFoundPage.jsx
│
├── api/
│   └── candidates.js
│
└── routes/
    └── AppRoutes.jsx
```
## JSON Structure of a Candidate

```
 {
  "profile_picture": "string url of image",
  "name": "Test Candidate",
  "address": "Pune",
  "phone": "9879879870",
  "email": "test.candidate@nonstopio.com",
  "gender": "Female",
  "hobbies": ["Reading", "Music"],
  "education": [
    {
      "institute": "ABC School",
      "degree": "10th",
      "percentage": 99,
      "pass_out_year": 2010
    }
  ],
  "skills": [
    { "name": "Java", "experience": 4 }
  ],
  "experience": [
    {
      "company": "ABC PVT LTD",
      "project": "Some project",
      "role": "SSE",
      "team_size": 4,
      "duration_from": "Jan 2021",
      "duration_to": "Nov 2021"
    }
  ],
  "id": "1"
}


```