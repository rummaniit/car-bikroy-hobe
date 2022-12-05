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
import Myproducts from "../../pages/My Products/Myproducts";
import Privateroutes from "../Private/Privateroutes";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
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
                    return fetch(`http://localhost:5000/allproducts/${params.id}`)
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
        children: ([
            {
                path: '/dashboard',
                element: <Addproducts></Addproducts>
            },
            {
                path: '/dashboard/addproducts',
                element: <Addproducts></Addproducts>
            },
            {
                path: '/dashboard/myproducts',
                element: <Myproducts></Myproducts>
            },
            {
                path: '/dashboard/sellers',
                element: <Allsellers></Allsellers>
            },
            {
                path: '/dashboard/buyers',
                element: <Allbuyers></Allbuyers>
            }
        ])
    }
])