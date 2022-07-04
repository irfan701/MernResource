import React from 'react';
import AppNavBar from "./components/Common/AppNavBar";
import {BrowserRouter} from "react-router-dom";
import AppRoute from "./routes/AppRoute";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const App = () => {
    return (
        <>
            <BrowserRouter>
                <AppNavBar/>
                <AppRoute/>
            </BrowserRouter>

        </>
    );
};

export default App;