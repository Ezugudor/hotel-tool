import React, { ReactNode, useState } from "react";

export const AvailableRoomsContext = React.createContext<Array<any>>([{ economy: 0, premium: 0 }, () => { }])

export interface AvailableRoomsProviderProps {
    children: ReactNode
}

export const AvailableRoomsProvider = (props: AvailableRoomsProviderProps) => {
    const [availableRooms, setAvailableRooms] = useState({ economy: 0, premium: 0 });
    return <AvailableRoomsContext.Provider value={[availableRooms, setAvailableRooms]}>{props.children}</AvailableRoomsContext.Provider>
}