import React, { useContext } from "react";
import { CustomerContext } from "../../../context";
import { countRequests, sumRequests } from "../../../helpers/Helpers";
import { RoomCategory } from "../../../models/RoomCategory";
import styles from "./CustomerRequestSummary.module.css"

export const CustomerRequestSummary: React.FunctionComponent = () => {

    const customerBids = useContext(CustomerContext);


    return (
        <div className={styles.Container}>
            <div className={styles.RequestInfoCont}>
                <h4 className={styles.RequestInfoHead}>Total Requests</h4>
                <div className={styles.RequestInfoBody}>
                    <div className={styles.RequestInfo}>
                        <span className={styles.RILabel}>Count: </span>
                        <span className={`${styles.RIValue} ${styles.RIValueCount}`}> {countRequests(customerBids)} </span>
                    </div>
                    <div className={styles.RequestInfo}>
                        <span className={styles.RILabel}>Amount: </span>
                        <span className={styles.RIValue}> € {sumRequests(customerBids)} </span>
                    </div>
                </div>
            </div>

            <div className={styles.RequestInfoCont}>
                <h4 className={styles.RequestInfoHead}>Premium Requests</h4>
                <div className={styles.RequestInfoBody}>
                    <div className={styles.RequestInfo}>
                        <span className={styles.RILabel}>Count: </span>
                        <span className={`${styles.RIValue} ${styles.RIValueCount}`}> {countRequests(customerBids, RoomCategory.PREMIUM)} </span>
                    </div>
                    <div className={styles.RequestInfo}>
                        <span className={styles.RILabel}>Amount: </span>
                        <span className={styles.RIValue}> € {sumRequests(customerBids, RoomCategory.PREMIUM)} </span>
                    </div>
                </div>
            </div>

            <div className={styles.RequestInfoCont}>
                <h4 className={styles.RequestInfoHead}>Non-Premium Requests</h4>
                <div className={styles.RequestInfoBody}>
                    <div className={styles.RequestInfo}>
                        <span className={styles.RILabel}>Count: </span>
                        <span className={`${styles.RIValue} ${styles.RIValueCount}`}> {countRequests(customerBids, RoomCategory.NON_PREMIUM)} </span>
                    </div>
                    <div className={styles.RequestInfo}>
                        <span className={styles.RILabel}>Amount: </span>
                        <span className={styles.RIValue}> € {sumRequests(customerBids, RoomCategory.NON_PREMIUM)} </span>
                    </div>
                </div>
            </div>
        </div>

    )
}