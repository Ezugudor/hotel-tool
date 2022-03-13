import { RoomCategory } from "../models/RoomCategory";


export const priceBenchmark = 100; //euros


export const isPremiumRequest = (askPrice: number): boolean => askPrice > priceBenchmark;

export const sumRequests = (arr: Array<number>, requestCategory: string | null = null) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const askPrice = arr[i];
        if (requestCategory === RoomCategory.PREMIUM) {
            if (isPremiumRequest(askPrice)) {
                sum += askPrice
            }
        } else if (requestCategory === RoomCategory.ECONOMY) {
            if (askPrice < priceBenchmark) {
                sum += askPrice
            }
        } else if (requestCategory === RoomCategory.NON_PREMIUM) {
            if (!isPremiumRequest(askPrice)) {
                sum += askPrice
            }
        } else {
            sum += askPrice
        }
    }
    return sum;
}


export const countRequests = (arr: Array<number>, requestCategory: string | null = null) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        const askPrice = arr[i];
        if (requestCategory === RoomCategory.PREMIUM) {
            if (isPremiumRequest(askPrice)) {
                count++
            }
        } else if (requestCategory === RoomCategory.ECONOMY) {
            if (askPrice < priceBenchmark) {
                count++
            }
        } else if (requestCategory === RoomCategory.NON_PREMIUM) {
            if (!isPremiumRequest(askPrice)) {
                count++
            }
        } else {
            count++
        }
    }
    return count;
}