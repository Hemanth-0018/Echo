import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router";
const AppComponent=()=>{
    return (
        <AppRouter/>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent/>)
