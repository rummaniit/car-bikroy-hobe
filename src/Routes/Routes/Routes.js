import { createBrowserRouter } from "react-router-dom";
import Dashboad from "../../Admin Panel/Dashboad/Dashboad";
import Login from "../../Authentication/Login/Login";
import Register from "../../Authentication/Registration/Register";
import DashboardLayout from "../../Layout/Dashboard Layout/DashboardLayout";
import Main from "../../Layout/Main/Main";
import Addproducts from "../../pages/Add Products/Addproducts";
import Allbuyers from "../../pages/All Buyers/Allbuyers";
import Allcars from "../../pages/All Cars/Allcars";
import Allsellers from "../../pages/All sellers/Allsellers";
import Blogs from "../../pages/Blogs/Blogs";
import Cardetails from "../../pages/Home/Car Details/Cardetails";
import Home from "../../pages/Home/Home";
import Modal from "../../pages/Modal/Modal";
import Myorders from "../../pages/My Orders/Myorders";
import Myproducts from "../../pages/My Products/Myproducts";
import Payment from "../../pages/Payment/Payment";
import Errorpage from "../../pages/Shared/Error/Errorpage";
import Adminroutes from "../Admin Routes/Adminroutes";
import Buyerroutes from "../Buyer Routes/Buyerroutes";
import Privateroutes from "../Private/Privateroutes";
import Sellerroutes from "../Seller Routes/Sellerroutes";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Errorpage></Errorpage>,
        children: ([
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/allcars',
                element: <Privateroutes><Allcars></Allcars></Privateroutes>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/car/:id',
                loader: ({ params }) => {
                    return fetch(`https://carreselling-server.vercel.app/allproducts/${params.id}`)
                },
                element: <Privateroutes><Cardetails></Cardetails></Privateroutes>
            }, {
                path: '/modal',
                element: <Modal></Modal>
            }

        ])
    },
    {
        path: '/dashboard',
        element: <Privateroutes><DashboardLayout></DashboardLayout></Privateroutes>,
        errorElement: <Errorpage></Errorpage>,
        children: ([
            {
                path: '/dashboard',
                element: <Sellerroutes><Addproducts></Addproducts></Sellerroutes>
            },
            {
                path: '/dashboard/addproducts',
                element: <Sellerroutes><Addproducts></Addproducts></Sellerroutes>
            },
            {
                path: '/dashboard/myproducts',
                element: <Sellerroutes><Myproducts></Myproducts></Sellerroutes>
            },
            {
                path: '/dashboard/sellers',
                element: <Adminroutes> <Allsellers></Allsellers></Adminroutes>
            },
            {
                path: '/dashboard/buyers',
                element: <Adminroutes><Allbuyers></Allbuyers></Adminroutes>
            },
            {
                path: '/dashboard/myorders',
                element: <Buyerroutes><Myorders></Myorders></Buyerroutes>
            },
            {
                path: '/dashboard/payment/:id',
                loader: ({ params }) => {
                    return fetch(`https://carreselling-server.vercel.app/allbooking/users/${params.id}`)
                },
                element: <Buyerroutes><Payment></Payment></Buyerroutes>
            }
        ])
    }
])