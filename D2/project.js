"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restaurants_1 = require("./restaurants");
const orders_1 = require("./orders");
function getMaxPrice(priceLevel) {
    let maxPrice = 0;
    if (priceLevel === orders_1.PriceBracket.Low) {
        maxPrice = 10.0;
    }
    else if (priceLevel === orders_1.PriceBracket.Medium) {
        maxPrice = 20.0;
    }
    else if (priceLevel === orders_1.PriceBracket.High) {
        maxPrice = 30.0;
    }
    return maxPrice;
}
function getOrders(price, orders) {
    let filteredOrders = [];
    restaurants_1.restaurants.forEach(restaurant => {
        filteredOrders.push(orders[restaurants_1.restaurants.indexOf(restaurant)]
            .filter(order => order.price < getMaxPrice(price)));
    });
    return filteredOrders;
}
function printOrders(allRestaurants, filteredOrders) {
    let restaurantName;
    filteredOrders.forEach(orders => {
        if (orders.length > 0)
            restaurantName = allRestaurants[filteredOrders.indexOf(orders)].name;
        console.log(restaurantName);
        orders.forEach(order => {
            console.log(`- ${order.name}: $${order.price}`);
        });
    });
}
const elligibleOrders = getOrders(orders_1.PriceBracket.Low, orders_1.orders);
printOrders(restaurants_1.restaurants, elligibleOrders);
