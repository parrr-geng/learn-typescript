import {restaurants, Restaurant} from "./restaurants";
import {orders, Order, PriceBracket} from "./orders";

function getMaxPrice(priceLevel: PriceBracket): number {
    let maxPrice: number = 0;
    if (priceLevel === PriceBracket.Low){
        maxPrice = 10.0;
    } else if (priceLevel === PriceBracket.Medium){
        maxPrice = 20.0;
    } else if (priceLevel === PriceBracket.High){
        maxPrice = 30.0;
    }
    return maxPrice;
}

function getOrders(price: PriceBracket, orders: Order[][]): Order[][] {
    let filteredOrders: Order[][] = [];

    restaurants.forEach(restaurant => {
        filteredOrders.push(
            orders[restaurants.indexOf(restaurant)]
            .filter(order => order.price < getMaxPrice(price))
        )
    })
        
    return filteredOrders;
}

function printOrders(allRestaurants: Restaurant[], filteredOrders: Order[][]){
    let restaurantName: string;

    filteredOrders.forEach(orders => {
        if( orders.length > 0 )
        restaurantName = allRestaurants[filteredOrders.indexOf(orders)].name;
        console.log(restaurantName);
        orders.forEach(order => {
            console.log(`- ${order.name}: $${order.price}`);
        })
    })
}


const elligibleOrders = getOrders(PriceBracket.Low, orders);
printOrders(restaurants, elligibleOrders);