import React from "react";
import { AvailableRoomForm } from "./AvailableRoomForm";
import { CustomerRequestSummary } from "./CustomerRequestSummary";



export const Sidebar: React.FunctionComponent = () => <>
    <CustomerRequestSummary />
    <AvailableRoomForm />
</>;
