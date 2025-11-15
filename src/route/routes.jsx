import { createBrowserRouter } from "react-router";
import RootLayout from "../components/RootLayout";
import Home from "../components/Home";
import BestSell from "../components/BestSell";
import NewArrivals from "../components/NewArrivals";
import AllManga from "../components/AllManga";
import Error from "../components/Error";
import MangaDetails from "../components/MangaDetails";
import Faviourties from "../components/Faviourties";
import CartSection from "../components/CartSection";
import TagsManga from "../components/TagsManga";

const route = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <Error/>,
        children: [{
            index: true,
            element: <Home />
        },
        {
            path: 'best-sell',
            element: <BestSell />
        }, {
            path: 'new-arrival',
            element: <NewArrivals />
        },
        {
            path: 'all-manga',
            element: <AllManga />
        },
        {
            path: 'all-manga/:id',
            element: <MangaDetails/>
        },
        {
            path: 'all-manga/tags/:name',
            element: <TagsManga/>
        },
        {
            path:'faviourite',
            element:<Faviourties/>
        },
        {
            path:'cart',
            element:<CartSection/>
        }
        ]
    }
])
export default route;