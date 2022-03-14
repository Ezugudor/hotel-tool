import React from "react";
import { RoomAggregate } from "../../../models";
import styles from "./StatBox.module.css"

export interface StatBoxProps {
    title?: string;
    icon?: string;
    color?: string;
    data: RoomAggregate
}
export const StatBox: React.FC<StatBoxProps> = (props) => {
    const { data } = props;
    return (
        <div className={styles.Container}>
            <div className={styles.IconCont}><i className={`ion ${props?.icon}`} style={{ color: props?.color }}></i></div>
            <div className={styles.InfoCont}>
                <h4>{props?.title}</h4>
                <div className={styles.Info}>
                    <span className={styles.Label}>Rooms:</span>
                    <span className={`${styles.Value} room`}>{data.roomCount}</span>
                </div>
                <div className={styles.Info}>
                    <span className={styles.Label}>Amount:</span>
                    <span className={styles.Value}>€ <span className="amount">{data.amount.toLocaleString()}</span></span>
                </div>
            </div>
        </div>
    )
}
