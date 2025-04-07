import { Route, Routes } from "react-router";

import Home from "./components/home/Home";
import "./App.css";

function App() {
    return (
        <>
            <h1>Cleaned Project</h1>

            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </>
    );
}

export default App;
