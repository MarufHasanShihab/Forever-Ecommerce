import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Searchbar from "../Searchbar/Searchbar";


const MainLayout = () => {
    return (
        <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
            <Navbar/>
            <Searchbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;