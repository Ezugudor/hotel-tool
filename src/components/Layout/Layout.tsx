import React from "react";
import { Dashboard, Sidebar } from "..";
import styles from "./Layout.module.css"


export const Layout: React.FunctionComponent = () =>
    <div className={styles.LayMain}>
        <div className={styles.LayLeft}>
            <Sidebar />
        </div>
        <div className={styles.LayRight}>
            <Dashboard />
        </div>
    </div>;
