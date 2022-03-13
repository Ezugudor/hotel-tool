import React, { useContext } from "react";
import { AvailableRoomsContext, CustomerContext } from "../../../context";
import { countRequests, sumRequests } from "../../../helpers/Helpers";
import { RoomCategory } from "../../../models/RoomCategory";

export const CustomerRequestSummary: React.FunctionComponent = () => {

    const customerBids = useContext(CustomerContext);
    const [{ economy, premium }, setAvailableRooms] = useContext(AvailableRoomsContext);


    return (
        <div>
            <div>
                <span className="label">Total Requests Count: </span>
                <span className="value"> {countRequests(customerBids)} </span>
            </div>
            <div>
                <span className="label">Total Requests Amount: </span>
                <span className="value"> {sumRequests(customerBids)} </span>
            </div>
            <div>
                <span className="label">Premium Requests Count: </span>
                <span className="value"> {countRequests(customerBids, RoomCategory.PREMIUM)} </span>
            </div>

            <div>
                <span className="label">Premium Requests Amount: </span>
                <span className="value"> {sumRequests(customerBids, RoomCategory.PREMIUM)} </span>
            </div>

            <div>
                <span className="label">Non Premium Requests Count: </span>
                <span className="value"> {countRequests(customerBids, RoomCategory.NON_PREMIUM)} </span>
            </div>

            <div>
                <span className="label">Non Premium Requests Amount: </span>
                <span className="value"> {sumRequests(customerBids, RoomCategory.NON_PREMIUM)} </span>
            </div>
            <div> {economy} fdfd  {premium}</div>
        </div>

    )
}