import { Outlet, Navigate } from "react-router-dom";

import { Header } from "../../components/Header/index.jsx";
import { AdminBar } from "../../components/AdminBar/index.jsx";

export function AdminLayout() {
    const user = JSON.parse(localStorage.getItem("igreja:user") || "{}");
    const isAdmin = user?.admin;

    return (
        <>
            <Header />
            <AdminBar />
            {isAdmin ? <Outlet /> : <Navigate to="/login" />}
        </>
    )
}