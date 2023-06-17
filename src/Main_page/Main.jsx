import { Outlet } from "react-router-dom";
import Header from "../Component/Sections/Header/Header";
import Footer from "../Component/Sections/Footer/Footer";
import AllSection from "../Component/Pages/AllSection";

const Main = () => {
    return (
        <>
            <div className="container m-auto">
                <Header></Header>
                <div className="mt-[115px]">
                    <Outlet />
                </div>
                <Footer></Footer>
            </div>
        </>
    );
};

export default Main;