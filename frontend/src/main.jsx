import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main.jsx";
import Home from "./App-pages/Home/Home.jsx";
import Dashboard from "./App-pages/Dashboard/Dashboard.jsx";
import Lightbulb from "./App-pages/Lightbulb/Lightbulb.jsx";
import Bookmark from "./App-pages/Bookmark/Bookmark.jsx";
import MessagesSquar from "./App-pages/MessagesSquar/MessagesSquar.jsx";
import BookOutline from "./App-pages/BookOutline/BookOutline.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/lightbulb",
        element: <Lightbulb />,
      },
      {
        path: "/bookmark",
        element: <Bookmark />,
      },
      {
        path: "/messagessquar",
        element: <MessagesSquar />,
      },
      {
        path: "/bookoutline",
        element: <BookOutline />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-[#F7F8FA] font-roboto">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
