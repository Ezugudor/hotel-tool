import React, { ReactNode } from "react";
import { CustomerBids } from "../mocks/CustomerBids";

export const CustomerContext = React.createContext<Array<number>>([])

export interface CustomerProviderProps {
    children: ReactNode
}

export const CustomerProvider = (props: CustomerProviderProps) => {
    return <CustomerContext.Provider value={CustomerBids}>{props.children}</CustomerContext.Provider>
}