import React, { ReactNode, useState } from "react";

export const AvailableRoomsContext = React.createContext<[AvailableRooms, (d: AvailableRooms) => void]>([{ economy: 0, premium: 0 }, (d) => { }])

export interface AvailableRoomsProviderProps {
    children: ReactNode
}

export interface AvailableRooms {
    economy: number,
    premium: number
}

export const AvailableRoomsProvider = (props: AvailableRoomsProviderProps) => {
    const [availableRooms, setAvailableRooms] = useState<AvailableRooms>({ economy: 0, premium: 0 });
    return <AvailableRoomsContext.Provider value={[availableRooms, setAvailableRooms]}>{props.children}</AvailableRoomsContext.Provider>
}