import { Outlet } from "react-router-dom";

import { Header } from "../../components/Header/index.jsx";
import { Footer } from "../../components/Footer/index.jsx";

export function UserLayout(){
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}