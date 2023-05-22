import App from './App'

import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact"
import Skincare from './routes/SkinCare/Skincare';
import Home from './routes/Home/Home';
import Blog from './routes/Blog/Blog';
import Aromaterapia from './routes/Aromaterapia/Aromaterapia';
import SobreNos from './routes/SobreNos/SobreNos';
import Login from './routes/Login/Login';
import Cadastro from './routes/Cadastro/Cadastro';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/auroraorganic/cadastro",
    element: <Cadastro/>,
  },
  {
    path: "/auroraorganic/login",
    element: <Login/>,
  },
  {
    path: "/contacts/:contactId",
    element: <Contact />,
  },
  {
    path: "/auroraorganic/blog",
    element: <Blog/>,
  },
  {
    path: "/auroraorganic/skincare",
    element: <Skincare/>,
  },
  
  {
    path:"/auroraorganic/aromaterapia",
    element:<Aromaterapia/>  
  },
  {
    path:"/auroraorganic",
    element:<Root/>  
  },
  
  {
    path:"/auroraorganic/sobre-nos",
    element:<SobreNos/>  
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);