import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import Bills from "../Pages/Bills";
import MyPayBills from "../Pages/MyPayBills";
import Error from "../Pages/Error";
import ErrorPage2 from "../Pages/ErrorPage2";


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
            element: <MyPayBills></MyPayBills>,
        },
    ]
    
  },
  {
    path: '/*',
    element: <Error></Error>
  }
]);

export default router;