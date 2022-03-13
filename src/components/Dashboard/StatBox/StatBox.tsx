import React from "react";
import { RoomAggregate } from "../../../models";

export interface StatBoxProps {
    data: RoomAggregate
}
export const StatBox: React.FC<StatBoxProps> = (props) => {
    const { data } = props;
    return (
        <div>
            <div>
                <span>Rooms:</span>
                <span>{data.roomCount}</span>
            </div>
            <div>
                <span>Amount:</span>
                <span>{data.amount}</span>
            </div>
        </div>
    )
}
