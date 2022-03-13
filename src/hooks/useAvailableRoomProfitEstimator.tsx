import { useContext, useState } from "react";
import { CustomerContext } from "../context";
import { countRequests, isPremiumRequest, priceBenchmark } from "../helpers";
import { RoomAggregate, RoomCategory } from "../models";


interface Stats {
    total: RoomAggregate;
    economy: RoomAggregate;
    premium: RoomAggregate;
}
const defaultValues: Stats = {
    total: {
        roomCount: 0,
        amount: 0
    },
    economy: {
        roomCount: 0,
        amount: 0
    },
    premium: {
        roomCount: 0,
        amount: 0
    }
}
export const useAvailableRoomProfitEstimator = (): [Stats, (requests: Array<number>, availableEconomyRoom: number, availablePremiumRoom: number) => void] => {
    const [value, setValue] = useState<Stats>(defaultValues);
    const customerBids = useContext(CustomerContext);

    const estimateProfit = (requests: Array<number>, availableEconomyRoom: number, availablePremiumRoom: number) => {
        availableEconomyRoom = parseInt(`${availableEconomyRoom}`);
        availablePremiumRoom = parseInt(`${availablePremiumRoom}`);
        const sortedRequests = requests.sort((a, b) => b - a);

        let result = {
            economy: {
                roomCount: 0,
                amount: 0
            },
            premium: {
                roomCount: 0,
                amount: 0
            }
        }

        let sortedLength = sortedRequests.length;
        const economyRequestCount = countRequests(customerBids, RoomCategory.ECONOMY)
        let excessEconomyRequest = economyRequestCount - availableEconomyRoom;

        for (let i = 0; i < sortedLength; i++) {
            const totalAvailableRooms = availablePremiumRoom + availableEconomyRoom;
            const priceRequest = sortedRequests.shift()

            if (!totalAvailableRooms) break;
            if (!priceRequest) break;

            if (isPremiumRequest(priceRequest) && availablePremiumRoom) {

                result.premium.roomCount++;
                result.premium.amount += priceRequest;
                availablePremiumRoom--;

            } else if (isPremiumRequest(priceRequest) && !availablePremiumRoom) {
                continue; //skip current request because we are out of premium rooms and we dont want to give Economy to premium users;

            } else if (!isPremiumRequest(priceRequest) && availablePremiumRoom) {

                if (priceRequest === priceBenchmark) {

                    result.premium.roomCount++;
                    result.premium.amount += priceRequest;

                    availablePremiumRoom--;

                } else if (excessEconomyRequest > 0) {

                    result.premium.roomCount++;
                    result.premium.amount += priceRequest;

                    availablePremiumRoom--;
                    excessEconomyRequest--;

                } else {

                    result.economy.roomCount++;
                    result.economy.amount += priceRequest;

                    availableEconomyRoom--;

                }
            } else {

                if (!availableEconomyRoom) break;
                if (priceRequest !== priceBenchmark) {
                    result.economy.roomCount++;
                    result.economy.amount += priceRequest;
                    availableEconomyRoom--;
                }
            }
        }

        const computedResult: Stats = {
            ...result, total: {
                roomCount: result.economy.roomCount + result.premium.roomCount,
                amount: result.economy.amount + result.premium.amount
            }
        }
        setValue(computedResult);



    }
    return [value, estimateProfit];
}