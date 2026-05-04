import { Routes, Route } from "react-router-dom";

import Home from "../containers/Home/index.jsx";
import About from "../containers/About/index.jsx";
import Cell from "../containers/Cell/index.jsx";
import Events from "../containers/Events/index.jsx";
import Oracao from "../containers/Oracao/index.jsx";
import Contributions from "../containers/Contributions/index.jsx";
import PrivacyPolicy from "../containers/PrivacyPolicy/index.jsx";
import Login from "../containers/Login/index.jsx";
import Register from "../containers/Register/index.jsx";

import { UserLayout } from "../layouts/UserLayout";
import { AdminLayout } from "../layouts/AdminLayout/index.jsx";
import CreateEvents from "../containers/Admin/CreateEvents/index.jsx";
import CreateCultos from "../containers/Admin/CreateCultos/index.jsx";
import Event from "../containers/Admin/Events/index.jsx";
import Cultos from "../containers/Admin/Cultos/index.jsx";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<UserLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<About />} />
                <Route path="/celulas" element={<Cell />} />
                <Route path="/eventos" element={<Events />} />
                <Route path="/oracao" element={<Oracao />} />
                <Route path="/contribuicao" element={<Contributions />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Route>

            <Route path="/admin" element={<AdminLayout />}>
                <Route path="/admin/criar/eventos" element={<CreateEvents />} />
                <Route path="/admin/eventos" element={<Event />} />
                <Route path="/admin/criar/cultos" element={<CreateCultos />} />
                <Route path="/admin/cultos" element={<Cultos />} />
            </Route>

                <Route path="/login" element={<Login />} />
                <Route path="/cadastro-usuario" element={<Register />} />
        </Routes>
    )
}