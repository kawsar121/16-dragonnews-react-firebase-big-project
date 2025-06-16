import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import HomeLayouts from './Layouts/HomeLayouts.jsx';

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import DisplayNews from './Pages/DisplayNews/DisplayNews.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
    children:[
      {
        path: "",
        element: <Navigate to={"/cat/01"}></Navigate>
      },
      {
        path: "/cat/:id",
        element: <DisplayNews></DisplayNews> ,
        loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      },
    ],
    // errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/login",
    element: <h1>Login</h1>,
  },
  {
    path: "/Register",
    element: <h1>Register</h1>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
