Pokémon App
A modern Pokémon app that allows users to view, search, filter, sort, and explore details of Pokémon, including similar Pokémon suggestions. This application is built with a clean design and a seamless user experience.

i. Tech Stack
The application is built using the following technologies:

Frontend:
React.js: Framework for building the user interface.
Material-UI (MUI): For styling and components.
Axios: For making HTTP requests.
Backend:
Node.js: Runtime environment for server-side JavaScript.
Express.js: Framework for building RESTful APIs.
MongoDB: Database to store Pokémon data.
ii. Pre-requisite
To run this app locally, ensure you have the following installed:
Node.js (v16.x or later) and npm.
MongoDB (running locally or on a cloud service like MongoDB Atlas).
Git (optional, for cloning the repository).
iii. Migration & Seed Database Steps
The Pokémon data is fetched from PokeAPI and seeded into the MongoDB database.

Steps to Seed the Database:
Ensure MongoDB is running locally or accessible via a cloud connection.
Add your MongoDB URI to the .env file:
makefile
Copy
Edit
MONGO_URI=your_mongo_connection_string
Run the database seed script:
bash
Copy
Edit
cd backend
node data/seed.js
If successful, you’ll see a message like Database Seeded!.
iv. Running the App
Follow these steps to run the application locally:

1. Clone the Repository:
bash
Copy
Edit
git clone https://github.com/your-username/pokemon-app.git
cd pokemon-app
2. Install Dependencies:
Frontend:
bash
Copy
Edit
cd frontend
npm install
Backend:
bash
Copy
Edit
cd backend
npm install
3. Start the App:
Start the Backend:
bash
Copy
Edit
cd backend
npm start
The backend will start at http://localhost:5000.

Start the Frontend:
bash
Copy
Edit
cd frontend
npm start
The frontend will start at http://localhost:3000.

Features
View a paginated list of Pokémon with search, filter, and sort functionality.
Click on a Pokémon to view its details, including stats, type, height, and weight.
See and navigate to similar Pokémon suggestions based on type.
Responsive design with dark/light mode support.
