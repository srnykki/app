import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Layout from "../layout";
import Chats from "../pages/Chats";

export default function RouterController() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="chats" element={<Chats />} />
                </Route>
            </Routes>
        </Router>
    )
}