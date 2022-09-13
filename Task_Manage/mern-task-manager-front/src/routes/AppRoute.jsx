import React, {Component} from 'react';
import {Routes, Route} from "react-router-dom";
import ProfilePage from "../pages/ProfilePage";
import DashboardPage from "../pages/DashboardPage";
import CreatePage from "../pages/CreatePage";
import NewPage from "../pages/NewPage";
import ProgressPage from "../pages/ProgressPage";
import CompletedPage from "../pages/CompletedPage";
import CanceledPage from "../pages/CanceledPage";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import Page404 from "../pages/Page404";
import ForgetPassPage from "../pages/ForgetPassPage";


class AppRoute extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<DashboardPage/>}/>
                    <Route path="/create" element={<CreatePage/>}/>
                    <Route path="/all" element={<NewPage/>}/>
                    <Route path="/progress" element={<ProgressPage/>}/>
                    <Route path="/completed" element={<CompletedPage/>}/>
                    <Route path="/canceled" element={<CanceledPage/>}/>
                    <Route path="/profile" element={<ProfilePage/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/registration" element={<RegistrationPage/>}/>
                    <Route path="/forget-pass" element={<ForgetPassPage/>}/>
                    <Route path="*" element={<Page404/>}/>
                </Routes>

            </>
        );
    }
}

export default AppRoute;
