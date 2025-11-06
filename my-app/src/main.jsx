














import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App.jsx'
import "./index.css";

import Register from "./assets/components/Register.jsx";
// Create the router
const router = createBrowserRouter([
  {
    path: "/*",   // Catch all routes, App will handle nested routes
    element: <App />,
  },
  {
    path: "/*",   // Catch all routes, App will handle nested routes
    element: <Register />,
  },



]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);






