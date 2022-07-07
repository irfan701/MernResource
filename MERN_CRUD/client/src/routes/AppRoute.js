import React from 'react';
import {Routes, Route} from "react-router-dom";
import CreatePage from "../pages/CreatePage";
import ReadPage from "../pages/ReadPage";
import UpdatePage from "../pages/UpdatePage";


const AppRoute = (props) => {

    return (
        <>
            <Routes>

                <Route path="/" element={<ReadPage xyz={props} key={Date.now()}/>}/>
                <Route path="/create" element={<CreatePage/>}/>
                <Route path="/update" element={<UpdatePage/>}/>
            </Routes>
        </>
    );
};

export default AppRoute;