import { Route, BrowserRouter, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout>
                    <p>Home page</p>
                </Layout>}/>
                <Route path="*" element={<Layout>
                    <p>Search page</p>
                </Layout>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;