import React, { useContext, useEffect } from "react";
import { AvailableRoomsContext, CustomerContext } from "../../context";
import { useAvailableRoomProfitEstimator } from "../../hooks/useAvailableRoomProfitEstimator";
import { StatBox } from "./StatBox";
import styles from "./Dashboard.module.css";
import { SampleCustomerBidsDetailed } from "../../mocks";


export const Dashboard: React.FunctionComponent = () => {

    const [estimatedResult, setEstimatedResult] = useAvailableRoomProfitEstimator();
    const customerBids = useContext(CustomerContext);
    const [availableRooms] = useContext(AvailableRoomsContext);
    const economy = parseInt(`${availableRooms.economy}`);
    const premium = parseInt(`${availableRooms.premium}`);

    useEffect(() => {
        const CustomerBidsCopy = [...customerBids];
        setEstimatedResult(CustomerBidsCopy, economy, premium);
    }, [availableRooms, customerBids])


    return (
        (economy && premium) ? <div id="dashboard">
            <div className={styles.Header}>Summary:</div>
            <div id="stat-box-cont" className={styles.StatsCont}>
                <StatBox color="#ff7700" title="Total" icon="ion-ios-pie-outline" data={estimatedResult.total} />
                <StatBox color="#0ee89c" title="Economy" icon="ion-ios-person-outline" data={estimatedResult.economy} />
                <StatBox color="#8b60bd" title="Premium" icon="ion-ios-briefcase-outline" data={estimatedResult.premium} />
            </div>
            <div className={styles.TableCont}>
                <div className={styles.TableHeader}>
                    <div className={styles.TableTitle}>Usage Details: <span className={styles.Todo}>(#TODO: To show how the rooms are distributed/allocated to guests.)</span></div>
                    <input type="text" placeholder="Search" />
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Sn</th><th>Guest ID</th><th>Guest Name</th><th>Room Category</th><th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {SampleCustomerBidsDetailed.map((guest, index) => {
                            return <tr key={index}><td>{index + 1}</td><td>{guest.guestId}</td><td>{guest.guestName}</td><td>{guest.roomCategory}</td><td>{guest.price}</td></tr>
                        })}

                    </tbody>
                </table>
            </div>
        </div> :
            <div className={styles.PlaceholderWrapper} id="placeholder">
                <div className={styles.PlaceholderCont}>
                    <div className={styles.PlaceholderIconCont}><i className="ion-coffee"></i></div>
                    <h4>Waiting for data...</h4>
                    <div className={styles.PlaceholderInfo}>
                        Provide available rooms (Economy and Premium) to see how many rooms will be occpied and how much total you will make from each room category.
                    </div>
                </div>
            </div>
    )
}
