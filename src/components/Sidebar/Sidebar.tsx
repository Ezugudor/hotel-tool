import React from "react";
import { AvailableRoomForm } from "./AvailableRoomForm";
import { CustomerRequestSummary } from "./CustomerRequestSummary";
import styles from "./Sidebar.module.css"



export const Sidebar: React.FunctionComponent = () => {

    return (
        <div className={styles.Container}>
            <div className={styles.LogoCont}>

            </div>
            <div className={styles.Header}>
                <h1 className={styles.HeaderText}>Incoming Requests Info:</h1>
            </div>
            <div className={styles.RequestCont}>
                <CustomerRequestSummary />
            </div>

            <div className={styles.Header}>
                <h1 className={styles.HeaderText}>Available Rooms:</h1>
            </div>
            <div className={styles.FormCont}>
                <AvailableRoomForm />
            </div>
        </div>
    )
};
