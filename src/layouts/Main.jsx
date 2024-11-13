import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <h1>This is Home</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;