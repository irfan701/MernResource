import React from 'react';
import AppNavBar from "./components/Common/AppNavBar";
import {BrowserRouter} from "react-router-dom";
import AppRoute from "./routes/AppRoute";
import '../src/assets/css/style.css'
import '../src/assets/css/bootstrap.css';
import '../src/assets/css/animate.min.css'
import '../src/assets/css/fontawesome.css'


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
    return (
        <>
            <BrowserRouter>
                <AppNavBar/>
                <AppRoute/>
            </BrowserRouter>

            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
};

export default App;