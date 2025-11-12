import { createBrowserRouter } from "react-router";
import RootLayout from "../components/RootLayout";

const route = createBrowserRouter([
    {
        path:'/',
        element:<RootLayout/>
    }
])
export default route;