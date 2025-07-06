import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import HomeLayouts from './Layouts/HomeLayouts.jsx';

import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import DisplayNews from './Pages/DisplayNews/DisplayNews.jsx';
import AuthLayOut from './Layouts/AuthLayOut/AuthLayOut.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Register/Register.jsx';
import AuthContextPoriver from './AuthContextPoriver/AuthContextPoriver.jsx';
import NewsDetails from './Pages/NewsDetails.jsx';
import Private from './PrivateRoute/Private.jsx';
import Footer from './Components/Footer/Footer.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayouts></HomeLayouts>,
    errorElement: <ErrorPage></ErrorPage>,
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
  },
  {
    path:'/footer',
    element: <Footer></Footer>
  },
  {
    path: "/auth",
    element: <AuthLayOut></AuthLayOut>,
    children:[
      {
        path:"/auth/login",
        element:<Login></Login>
      },
      {
        path:"/auth/register",
        element:<Register></Register>
      }
    ]
  },
  {
    path: "/newsData/:id",
    loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
    element: <Private><NewsDetails></NewsDetails></Private>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextPoriver>
      <RouterProvider router={router} />
    </AuthContextPoriver>
  </StrictMode>,
)
