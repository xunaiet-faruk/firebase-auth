import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../componen/Home";
import Register from "../componen/Register";
import Layout from "../componen/Layout";
export const router = createBrowserRouter([
    {
        path: "/",
        element:<Layout/>,
        children : [
           {index : true , element:<Home/>},
           {path : '/register', element:<Register/>}
        ]
    },
]);