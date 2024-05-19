import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Notes from "./components/Notes.jsx";
import ReactDOM from "react-dom/client";
import NewNote from "./Pages/NewNotePage.jsx"
import EditNote from "./Pages/EditNotePage.jsx"
import App from "./App.jsx";
import "./index.css";

const router = createBrowserRouter([

  {
    element: <App />,
    children: [
      {
        path: "/notes",
        element: <Notes />
      },
      {
        path: "/notes/new",
        element: <NewNote />
      },
      {
        path: "/notes/:id/edit",
        element: <EditNote />
      }
    ],
  },
  {
    path: "/",
    element: <Navigate to="/notes" />,
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
