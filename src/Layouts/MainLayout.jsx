import { Outlet } from "react-router-dom";
import Header from "../Compontents/Header";

const MainLayout = () => {
    return (
        <div className="max-w-5xl mx-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;