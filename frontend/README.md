# Dua-Web-Application

This project is a web application for displaying categories, subcategories, and duas. It consists of a backend built with Node.js, Express, and SQLite, and a frontend built with React and Tailwind CSS.

## Backend

The backend is implemented using Node.js with Express and SQLite. It provides several API endpoints to fetch data from the SQLite database.

### Database Connection

The SQLite database is connected in `server.js`.

### API Endpoints

- **GET /category**: Fetches all categories.
- **GET /sub_category**: Fetches subcategories by category ID.
- **GET /dua**: Fetches duas by category ID and subcategory ID.
- **GET /dua/:id**: Fetches a specific dua by ID.

## Frontend

The frontend is built using React and Tailwind CSS. It fetches data from the backend and displays it in a user-friendly interface.

### Main Layout

The main layout is defined in `Main.jsx`, which includes the navbar and settings sidebar.

### Pages

- **Home**: The home page is implemented in `Home.jsx`. It includes components like `Categories` and `Details`.
- **Categories**: The categories component fetches and displays categories and their subcategories from the backend. It is implemented in `Categories.jsx`.
- **Details**: The details component fetches and displays duas based on the selected category and subcategory. It is implemented in `Details.jsx`.
- **Other Pages**: There are other pages like `Dashboard`, `Bookmark`, `Lightbulb`, `MessagesSquar`, and `BookOutline`, each implemented in their respective files.

## Running the Project

### Backend

1. Navigate to the `backend` directory.
2. Install dependencies: `npm install`.
3. Start the server: `npm start` or `npm run dev`.

### Frontend

1. Navigate to the `frontend` directory.
2. Install dependencies: `npm install`.
3. Start the development server: `npm run dev`.

The frontend will be served on a development server (usually `http://localhost:3000`), and it will communicate with the backend server running on `http://localhost:5000`.

## Deployment

To deploy the application, you can use services like Vercel, Netlify, or any other hosting provider that supports Node.js and React applications.

## License

This project is licensed under the MIT License.
