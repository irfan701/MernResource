import React from 'react';
import {BrowserRouter} from "react-router-dom";
import AppRoute from "./routes/AppRoute";
import FullscreenLoader from "./components/masterLayout/FullScreenLoader";

const App = () => {
    return (
        <>
       <BrowserRouter>
            <AppRoute/>
       </BrowserRouter>
         <FullscreenLoader/>
        </>
    );
};

export default App;