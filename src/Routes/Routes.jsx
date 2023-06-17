import { createBrowserRouter } from "react-router-dom";
import Main from "../Main_page/Main";
import LoginPage from "../Component/Sections/LoginPage/LoginPage";
import RegisterPage from "../Component/Sections/RegisterPage/RegisterPage";
import Home from "../Component/Pages/Home";
import ErrorElement from "../ErrorElement/ErrorElement";
import Dashboard from "../Dashboard/Dashboard";
import ClassPages from "../Component/Pages/ClassPages";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Select_classes from "../Component/Dashboard_Element/Select_classes/Select_classes";
import ManageUsers from "../Component/Dashboard_Element/ManageUsers/ManageUsers";
import AddClass from "../Component/Dashboard_Element/AddClass/AddClass";
import MyClass from "../Component/Dashboard_Element/MyClass/MyClass";
import All_instructor from "../Component/Pages/All_instructor";
import ManageClass from "../Component/Dashboard_Element/ManageClass/ManageClass";
import Payment from "../Component/Dashboard_Element/Payment/Payment";
import Payment_History from "../Component/Dashboard_Element/Payment_History/Payment_History";
import Enroll_classes from "../Component/Dashboard_Element/Enroll_classes/Enroll_classes";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/classPage",
                element: <ClassPages></ClassPages>
            },
            {
                path: "/instructor",
                element: <All_instructor></All_instructor>
            },
            {
                path: '/login',
                element: <LoginPage></LoginPage>
            },
            {
                path: '/register',
                element: <RegisterPage></RegisterPage>
            }
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path: "/dashboard/select_class",
                element: <Select_classes></Select_classes>
            },
            {
                path: "/dashboard/payment_history",
                element: <Payment_History></Payment_History>
            },
            {
                path: "/dashboard/enroll_classes",
                element: <Enroll_classes></Enroll_classes>
            },
            {
                path: "/dashboard/payment/:id",
                element: <Payment></Payment>,
            },
            {
                path: "/dashboard/Manage_class",
                element: <ManageClass></ManageClass>
            },
            {
                path: "/dashboard/Manage_users",
                element: <ManageUsers></ManageUsers>
            },
            {
                path: "/dashboard/addClass",
                element: <AddClass></AddClass>
            },
            {
                path: "/dashboard/myClass",
                element: <MyClass></MyClass>
            }
        ]
    }
])

export default router