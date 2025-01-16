# **Pokémon App**

A modern Pokémon app that allows users to view, search, filter, sort, and explore details of Pokémon, including similar Pokémon suggestions. This application is built with a clean design and a seamless user experience.

---

## **i. Tech Stack**

The application is built using the following technologies:

### **Frontend:**
- **React.js**: Framework for building the user interface.
- **Material-UI (MUI)**: For styling and components.
- **Axios**: For making HTTP requests.

### **Backend:**
- **Node.js**: Runtime environment for server-side JavaScript.
- **Express.js**: Framework for building RESTful APIs.
- **MongoDB**: Database to store Pokémon data.

---

## **ii. Pre-requisite**

### **To run this app locally, ensure you have the following installed:**
1. **Node.js** (v16.x or later) and npm.
2. **MongoDB** (running locally or on a cloud service like MongoDB Atlas).
3. **Git** (optional, for cloning the repository).

---

## **iii. Migration & Seed Database Steps**

The Pokémon data is fetched from [PokeAPI](https://pokeapi.co/) and seeded into the MongoDB database.

### **Steps to Seed the Database:**
1. Ensure MongoDB is running locally or accessible via a cloud connection.
2. Create a `.env` file in the `backend` folder with the following content:
3. Run the database seed script:
```bash
cd backend
node data/seed.js
```
4. If successful, you’ll see a message like Database Seeded!.

## **iv. Running the App**
Follow these steps to run the application locally:

1. Clone the Repository:
```bash
git clone https://github.com/your-username/pokemon-app.git
cd pokemon-app
```
2. Install Dependencies:
Frontend:
```bash
cd frontend
npm install
```
Backend:
```bash
cd backend
npm install
```
3. Start the App:
Start the Backend:
```bash
cd backend
npm start
```
The backend will start at http://localhost:4000.

Start the Frontend:
```bash
cd frontend
npm start
```
The frontend will start at http://localhost:3000.

