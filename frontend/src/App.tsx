import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}/>

                <Route path="*" element={<Layout/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;