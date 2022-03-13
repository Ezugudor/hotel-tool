import React, { useContext, useEffect } from "react";
import { AvailableRoomsContext, CustomerContext } from "../../context";
import { useAvailableRoomProfitEstimator } from "../../hooks/useAvailableRoomProfitEstimator";
import { StatBox } from "./StatBox";


export const Dashboard: React.FunctionComponent = () => {

    const [estimatedResult, setEstimatedResult] = useAvailableRoomProfitEstimator();
    const customerBids = useContext(CustomerContext);
    const [availableRooms] = useContext(AvailableRoomsContext);

    useEffect(() => {
        const CustomerBidsCopy = [...customerBids];
        setEstimatedResult(CustomerBidsCopy, parseInt(`${availableRooms.economy}`), parseInt(`${availableRooms.premium}`));
    }, [availableRooms, customerBids])


    return (
        <div>
            <div id="stat-box-cont">
                <StatBox data={estimatedResult.total} />
                <StatBox data={estimatedResult.economy} />
                <StatBox data={estimatedResult.premium} />
            </div>
        </div>
    )
}
