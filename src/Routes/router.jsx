import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Error from "../Pages/Error";
import ErrorPage2 from "../Pages/ErrorPage2";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayout from "../Layout/AuthLayout";
import PrivateRoute from "./PrivateRoute";
import Bills from "../Components/Bills";
import MyPayBills from "../Components/MyPayBills";
import MyProfile from "../Components/MyProfile";
import LoadingElements from "../Utility/LoadingElements";
import BillDetails from "../Pages/BillDetails";




const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    hydrateFallbackElement: <LoadingElements></LoadingElements>,
    errorElement: <ErrorPage2></ErrorPage2>,
    children: [
      {
        index: true,
        element: <Home></Home>

      },
      {
        path: '/bills',
        element: <Bills></Bills>
      },
      {
        path: '/billDetails/:id',
        element: <PrivateRoute>
          <BillDetails></BillDetails>
        </PrivateRoute>
      },
      {
        path: '/myPayBills',
        element: <PrivateRoute>
          <MyPayBills></MyPayBills>
        </PrivateRoute>,
      },
      {
        path: '/my-Profile',
        element: <PrivateRoute>
          <MyProfile></MyProfile>
        </PrivateRoute>,
      },

    ]

  },
  {
    path: '/auth',
    element: <AuthLayout></AuthLayout>,
    children: [

      {
        path: '/auth/login',
        element: <Login></Login>
      },

      {
        path: '/auth/register',
        element: <Register></Register>
      },
    ]
  },

  {
    path: '/*',
    element: <Error></Error>
  }
]);

export default router;