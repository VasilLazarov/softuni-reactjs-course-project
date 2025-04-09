import { Route, Routes } from "react-router";

import Home from "./components/home/Home";
import Header from "./components/header/Header";
import "./App.css";

function App() {
    return (
        <div id="page">
            <Header />

            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/books" element={<Home />} />
                    <Route path="/books/create" element={<Home />} />
                    <Route path="/userInfo" element={<Home />} />
                    <Route path="/login" element={<Home />} />
                    <Route path="/register" element={<Home />} />
                    <Route path="/logout" element={<Home />} />
                </Routes>
            </main>
        </div>
    );
}

export default App;
