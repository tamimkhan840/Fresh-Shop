import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Register from "../pages/Register";
import LogIn from "../pages/LogIn";
import Main from "../pages/Main";
import Profile from "../pages/Profile";
import PrivateRoutes from "./PrivateRoutes";
import Allproduct from "../pages/Allproduct";
import ProductWear from "../pages/ProductWear";
import AddToCart from "../addToCart/AddToCart";
import Product_Details from "../pages/Product_Details";




const route = createBrowserRouter([
    {
        path: "/",
        element:  <App />,
        children:[

            {
                path:"/register",
                element: <Register />
            },
            {
                path: "/login",
                element: <LogIn />
            },
            {
                path: "/",
                element: <Main />
            },
            {
                path: "/allproduct",
                element:<PrivateRoutes>
                         <Allproduct />
                      </PrivateRoutes>
            },
            {
                path: "/productWear",
                element: <ProductWear />,
                loader: ()=> fetch('/products.json')

            },
            {
                path: '/add-to-cart',
                element: <AddToCart />
            },
            {
                path: '/Products/:details',
                element: <Product_Details />
            },
            {
                path: "/profile",
                element:<PrivateRoutes>
                            <Profile />
                        </PrivateRoutes>
            }
        ]
    }

]);

export default route;