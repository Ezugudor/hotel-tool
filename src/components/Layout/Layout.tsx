import React from "react";
import { Dashboard, Sidebar } from "..";


export const Layout: React.FunctionComponent = () =>
    <div>
        <Sidebar />
        <Dashboard />
    </div>;
