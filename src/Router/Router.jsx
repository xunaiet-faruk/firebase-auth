import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "../componen/Home";
export const router = createBrowserRouter([
    {
        path: "/",
        element:<Home/>,
        children : [
            {
                path:'/',
                element:<Home/>
            }
        ]
    },
]);