//install typescript globally so tsc compiler can be used on vs code.
//tsc index.js, but if there is a tsconfig.json added, tsc doesn't require argument. 
console.log("hello, world!");

//type annotation
let phoneNumber : string;
phoneNumber = "+3456879";

// Practice 1
import restaurants from './restaurants';

const dollarSigns = '$$';
const deliveryTimeMax = 90;
const maxDistance = 10;
let result : string;
let hour : number = new Date().getHours();

const priceBracket: number = dollarSigns.length;

const filteredRestaurants = restaurants.filter((restaurant) => {
  if (Number(restaurant.priceBracket) > Number(priceBracket)) {return false;}
  if (restaurant.deliveryTimeMinutes > deliveryTimeMax) {return false;}
  if (Number(restaurant.distance) > maxDistance) {return false;}
  if (Number(restaurant.openHour) > hour || Number(restaurant.closeHour) < hour){return false;}

  return restaurant;
});

if (filteredRestaurants.length === 0) {
  result = 'There are no restaurants available right now.';
} else {
  result = `We found ${filteredRestaurants.length} restaurants, the first is ${filteredRestaurants[0].name}.`;
}

console.log(result);


//Practice 2
import products from "./products";

let productName : string = "shirt";
let product;
let shipping : number;
let taxPercent : number;
let taxTotal : number;
let total : number; 
let shippingAddress : string = '575 Broadway, New York City, New York';;

let foundProduct = products.filter( product => {
    if (product.name === productName) return product;
})

if (foundProduct.length){
    product = foundProduct[0];
    //console.log(product);
    if(product.preOrder === 'true'){
        console.log("We will send you a message when it's on the way.")
    }

    if(Number(product.price) > 25){
        shipping = 0;
        console.log("We provide free shipping for your order.")
    } else {
        shipping = 5;
    }

    if(shippingAddress.includes("New York")){ taxPercent = 0.1;} 
    else { taxPercent = 0.05; }

    taxTotal = Number(product.price) * taxPercent;
    total = Number(product.price) + taxTotal + shipping;
    console.log(`${product.name} would be shipped to ${shippingAddress}. The price of it is $${product.price}, and the total Tax is $${taxTotal}, your shipping fee is $${shipping}, and the total amount to be paid is $${total}.`)
}

// FUNCTIONS
//question mark means this paramter is optional, and type annotation defined afterwards too.
function greet1(name?: string){
    console.log(`Hello, ${name || 'Anonymous'}!`);
};
//default parameter value
function greet2(name = "Anonymous"){
    console.log(`Hello, ${name}`);
};

greet1();
greet2();
greet2("User");

//type annotation for function, including void

/**
 * 
 * @param fruit1 - The first input string
 * @param fruit2 - The second input string
 * @returns the concatenation of fruit1 and fruit2
 */
function makeFruitSalad(fruit1:string, fruit2:string):void {
    let salad = fruit1+fruit2+fruit1+fruit2;
    console.log(salad);
}
makeFruitSalad('banana', 'pineapple');

//Pracrice 3
// create the image data
const imageWidth = 20;
const imageHeight = 8;
const imageData = createImageData();

// draw head
drawRectangle(0, 0, 20, 8);
// eyes
drawDot(7, 2);
drawDot(12, 2);
// smile
drawDot(4, 4);
drawHorizontalLine(4, 5, 12);
drawDot(15, 4);

// output what we drew to the console
outputImage();

function drawRectangle(
  x: number,
  y: number,
  width: number,
  height: number
) {
  // top
  drawHorizontalLine(x, y, width);
  // bottom
  drawHorizontalLine(x, y + height - 1, width);
  // left
  drawVerticalLine(x, y, height);
  // right
  drawVerticalLine(x + width - 1, y, height);
}

/**
 * Gets if the provided point is in the image.
 * @param x - The horizontal position within
 * the image.
 * @param y - The vertical position within
 * the image.
 */
function isPointInImage(x: number, y: number) {
  return x >= 0 && x < imageWidth && y >= 0 && y < imageHeight;
}

/**
 * Outputs the image data state to the console.
 * @param onChar - Character to render an
 * "on" pixel with.
 * @param offChar - Character to render an
 * "off" pixel with.
 */
function outputImage(onChar = "X", offChar = " ") {
  let text = "";

  for (let i = 0; i < imageData.length; i++) {
    if (i > 0 && i % imageWidth === 0) {
      text += "\n"; // new line
    }

    text += imageData[i] ? onChar : offChar;
  }

  console.log(text);
}

/**
 * Creates an array of booleans where a pixel
 * is "on" when the value is `true` and "off"
 * when the value is `false`.
 *
 * The pixel values are stored in rows
 * (row-major order) where the index of a
 * pixel in the array can be found via:
 *
 *     index = y * imageWidth + x
 *  
 * `x` is the horizontal position in the image
 * and `y` is the vertical position from the top
 * left corner.
 * 
 * Note: This function has a return type annotation
 * of `boolean[]`. That means it's an array of
 * booleans. We'll learn more about this in a
 * future module.
 */
function createImageData(): boolean[] {
  // create array of size `length` containing `false` values
  const length = imageWidth * imageHeight;
  return new Array(length).fill(false);
}

function drawDot(x: number, y:number){
  if (isPointInImage(x,y)){
    imageData[y * imageWidth + x] = true;
  }
}

function drawHorizontalLine(x:number, y:number, length:number){
  for(let i=0; i<length; i++){
    drawDot(x+i, y);
  }
}

function drawVerticalLine(x: number, y: number, length: number){
  for(let i=0; i<length; i++){
    drawDot(x, y+i);
  }
}
