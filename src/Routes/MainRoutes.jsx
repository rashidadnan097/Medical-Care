import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";


const MainRoutes = () => {
    return (
        <div  className="max-w-[1200px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainRoutes;