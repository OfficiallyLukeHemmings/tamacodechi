import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./routes/root"
import Create from './routes/create'
import './main.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/add",
    element: <Create />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
