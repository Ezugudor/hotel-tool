import React, { FormEvent, useContext } from "react";
import { AvailableRoomsContext } from "../../../context";
import { useInput } from "../../../hooks";
interface AvailableRoomFormProps {
    onSubmit?: Function
}

export const AvailableRoomForm: React.FunctionComponent<AvailableRoomFormProps> = ({ onSubmit }) => {

    const economyField = useInput();
    const premiumField = useInput();
    const [, setAvailableRooms] = useContext(AvailableRoomsContext);

    const updateAvailableRoom = (e: FormEvent) => {
        e.preventDefault();
        const newAvailableRooms = { economy: parseInt(`${economyField.value}`), premium: parseInt(`${premiumField.value}`) };
        setAvailableRooms(newAvailableRooms);
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
            </div>
        </form>
    )
}