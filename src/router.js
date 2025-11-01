import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 1. Import your new Layout
import Layout from "./components/Layout";

// 2. Import your pages (note the "Home" capitalization)
import Home from "./routes/home";
import MoodSetter from "./routes/MoodSetter";
import Dashboard from "./routes/Dashboard";
import About from "./routes/About";
import Help from "./routes/Help";
// 💡 MODIFIED: Import the new AuthCard component
import AuthCard from "./routes/AuthCard"; 

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                
                {/* 💡 MODIFIED: Add the standalone Auth Route */}
                {/* This route renders outside the Layout, providing a full-page login/signup screen. */}
                <Route path="/auth" element={<AuthCard />} />

                {/* 3. Set Layout as the parent route for the main application content */}
                <Route path="/" element={<Layout />}>
                    {/* These children routes will render inside the <Outlet /> */}
                    <Route index element={<Home />} /> 
                    <Route path="moodsetter" element={<MoodSetter />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="about" element={<About />} />
                    <Route path="help" element={<Help />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default AppRouter;