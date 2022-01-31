import { IProduct } from '../interfaces/ProductInterface';

export const getTotalSumFromCart = (array: IProduct[]) => {
    let totalSum = 0;
    if (Array.isArray(array)) {
        totalSum = array.reduce((acc, curr) => acc + curr.price, 0);
    }
    return totalSum;
};
