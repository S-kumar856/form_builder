# Form-Builder 
Form Builder is a dynamic web application designed to help users create, edit, and manage forms with ease. The application supports grouping inputs into sections and provides a drag-and-drop interface for seamless input arrangement. Forms are stored in a MongoDB database for persistent storage and retrieval.

---

## Demo
[Live Demo](#) *https://form-builder-ten-psi.vercel.app/*


## Features

- **Create Forms**: Build custom forms with multiple sections and input fields (e.g., text, number, dropdown, etc.).
- **Edit Forms**: Modify existing forms by adding, removing, or reordering inputs and sections.
- **View Forms**: Preview created forms with input validation for a user-friendly experience.
- **Drag and Drop**: Easily rearrange inputs within sections using an intuitive drag-and-drop interface.
- **Database Storage**: All forms are securely stored in a MongoDB database for persistent access.

---

Technologies Used
Frontend:
React.js
Tailwind CSS (for styling)

Backend:
Express.js
MongoDB

Installation & Setup
Clone the Repository
git https://github.com/S-kumar856/form_builder.git
cd Form-Builder


Backend Setup
cd backend
npm install


#### Environment Variables (.env)

Create a .env file in the backend/ folder and add:

PORT=8000
MONGO_URI=your_mongodb_connection_string


#### Run the Backend

nodemon index.js or npm run dev

Frontend Setup
cd frontend
npm install


#### Run the Frontend

npm run dev


API Endpoints
Form Routes
GET /api/forms - Get all forms
POST /api/forms - Create a new form
GET /api/forms/:id - Get a single form by ID
PUT /api/forms/:id - Update an existing form
DELETE /api/forms/:id - Delete a form

Usage
Open http://localhost:5000 in the browser to access the frontend.
Create, edit, or view forms using the UI.

-This README.md file provides a clear and concise overview of your project, making it easy for others to understand and contribute. Let me know if you need further assistance! 
