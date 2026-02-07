import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../componen/Home";
import Register from "../componen/Register";
import Layout from "../componen/Layout";
import Signin from "../componen/Signin";
export const router = createBrowserRouter([
    {
        path: "/",
        element:<Layout/>,
        children : [
           {index : true , element:<Home/>},
           {path : '/register', element:<Register/>},
           {path:'/login',element:<Signin/>}
        ]
    },
]);