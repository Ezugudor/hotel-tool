import React, { FormEvent, useContext } from "react";
import { AvailableRoomsContext } from "../../../context";
import { useInput } from "../../../hooks";
import { useAvailableRoomProfitEstimator } from "../../../hooks/useAvailableRoomProfitEstimator";
import { CustomerBids } from "../../../mocks/CustomerBids";


interface AvailableRoomFormProps {
    onSubmit?: Function
}

export const AvailableRoomForm: React.FunctionComponent<AvailableRoomFormProps> = ({ onSubmit }) => {

    const economyField = useInput();
    const premiumField = useInput();
    const [, setAvailableRooms] = useContext(AvailableRoomsContext);
    const [estimatedResult, setEstimatedResult] = useAvailableRoomProfitEstimator();

    const updateAvailableRoom = (e: FormEvent) => {
        e.preventDefault();
        const newAvailableRooms = { economy: economyField.value, premium: premiumField.value };
        // setAvailableRooms(newAvailableRooms);
        const CustomerBidsCopy = [...CustomerBids];
        setEstimatedResult(CustomerBidsCopy, economyField.value as number, premiumField.value as number);
        onSubmit?.(e);
    }

    return (
        <form onSubmit={(e) => { updateAvailableRoom(e) }}>
            <div>
                <div>
                    <label htmlFor="economyRoomField">Economy :</label>
                    <input type="text" name="economy" id="economyRoomField" {...economyField} />
                </div>

                <div>
                    <label htmlFor="premiumRoomField">Premium :</label>
                    <input type="text" name="economy" id="premiumRoomField" {...premiumField} />
                </div>

                <button type="submit">Enter</button>
                {JSON.stringify(estimatedResult)}
            </div>
        </form>
    )
}