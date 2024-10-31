import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Layout from "../layout";
import Chats from "../pages/Chats";
import Main from "../pages/Main";
import News from "../pages/News";

export default function RouterController() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Main />} />
                    <Route path="chats" element={<Chats />} />
                    <Route path="/news" element={<News />} />
                    <Route path="/logout" element={<News />} />
                </Route>
            </Routes>
        </Router>
    )
}