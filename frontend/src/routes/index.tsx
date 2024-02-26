import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Layout from "../layout";
import Main from "../pages/Main";
import Settings from "../pages/Settings";

function PathRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Main />} />
                    <Route path="/" element={<Settings/>} />
                </Route>

            </Routes>
            <ToastContainer
                autoClose={3000}
                draggable
                pauseOnHover={false}
                theme="colored"
                />

        </BrowserRouter>
    )
}

export default PathRoutes;