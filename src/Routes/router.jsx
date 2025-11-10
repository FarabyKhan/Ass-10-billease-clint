import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Bills from "../Pages/Bills";
import MyPayBills from "../Pages/MyPayBills";
import Error from "../Pages/Error";
import ErrorPage2 from "../Pages/ErrorPage2";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layout/AuthLayout";
import MyProfile from "../Pages/MyProfile";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage2></ErrorPage2>,
    children: [
        {
            index: true,
            element: <Home></Home>
        },
        {
            path: '/bills',
            element: <Bills></Bills>,
        },
        {
            path: '/myPayBills',
            element: <PrivateRoute>
              <MyPayBills></MyPayBills>
            </PrivateRoute>,
        },
        {
            path: '/myProfile',
            element: <PrivateRoute>
              <MyProfile></MyProfile> 
            </PrivateRoute>,
        },

    ]
    
  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children:[
      
          {
    path: '/auth/login',
    element: <Login></Login>
    },

     {
    path: '/auth/register',
    element:<Register></Register>
     }, 
    ]
  },
  
  {
    path: '/*',
    element: <Error></Error>
  }
]);

export default router;