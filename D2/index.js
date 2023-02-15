//Array Type Annotations
// 1st way of doing it
let bestNumbers = [7, 77, 4];
let bestLunches = ['chicken soup', 'non-chicken soup'];
let bestBooleans = [true, false];
// 2nd way of doing it
let bestBreakfasts = ['scrambled eggs', 'oatmeal', 'tamago kake gohan', 'any kind of soup'];
// Multidimensional Arrays:
let bestMealPlan = [bestLunches, bestBreakfasts, ['baked potato', 'mashed potato']];
let bestBooleansTwice = [bestBooleans, bestBooleans];
let numbersMulti = [[[1], [2, 3]], [[7], bestNumbers]];
//In TypeScript, when an array is typed with elements of specific types, it’s called a tuple.
//tuples and arrays do not have compatible types within TypeScript. 
//Specifically, we can’t assign an array to a tuple variable, even when the elements are of the correct type
//because arrays are expandable, while tuples are not.
//The whole point of tuples is that they have fixed lengths, we wouldn't be able to add new elements to a tuple.
let favoriteCoordinates = [40, 43.2, 'N', 73, 59.8, 'W'];
//Rest parameters
//The rest parameter lets the function work with any number of parameters greater than 0.
//There is type annotation for rest parameter too.
function addPower(p, ...numsToAdd) {
    let answer = 0;
    for (let i = 0; i < numsToAdd.length; i++) {
        answer += numsToAdd[i] ** p;
    }
    return answer;
}
console.log(addPower(3, 4, 5, 3));
function performDanceMove(moveName, moveReps, hasFlair) {
    console.log(`I do the ${moveName} ${moveReps} times !`);
    if (hasFlair) {
        console.log('I do it with flair!');
    }
}
//basically you can add a tuple type annotation in front of an array sign too.
let danceMoves = [
    ['chicken beak', 4, false],
    ['wing flap', 4, false],
    ['tail feather shake', 4, false],
    ['clap', 4, false],
    ['chicken beak', 4, true],
    ['wing flap', 4, true],
    ['tail feather shake', 4, true],
    ['clap', 4, true],
];
//here the spread syntax is used to pass the right form of arguments.
for (let i = 0; i < danceMoves.length; i++) {
    performDanceMove(...danceMoves[i]);
}
//Enums
let petOnSale = 'chinchilla';
let ordersArray = [
    ['rat', 2],
    ['chinchilla', 1],
    ['hamster', 2],
    ['chinchilla', 50]
];
var Pet;
(function (Pet) {
    Pet[Pet["Hamster"] = 0] = "Hamster";
    Pet[Pet["Rat"] = 1] = "Rat";
    Pet[Pet["Chinchilla"] = 2] = "Chinchilla";
    Pet[Pet["Tarantula"] = 3] = "Tarantula";
})(Pet || (Pet = {}));
let petOnSaleTS = Pet.Chinchilla;
let ordersArrayTS = [
    [Pet.Rat, 2],
    [Pet.Chinchilla, 1],
    [Pet.Hamster, 2],
    [Pet.Chinchilla, 50]
];
//ordersArrayTS.push([Pet.Jerboa, 3]) 
//The line above causes an error, as the property "Jerboa" doesn't not exist on type "typeof Pet".
//String Enums vs. Numeric Enums
//With numeric Enums, the numbers could be assigned automatically
//but with string enums we must write the string explicitly
var DirectionNumber;
(function (DirectionNumber) {
    DirectionNumber[DirectionNumber["North"] = 0] = "North";
    DirectionNumber[DirectionNumber["South"] = 1] = "South";
    DirectionNumber[DirectionNumber["East"] = 2] = "East";
    DirectionNumber[DirectionNumber["West"] = 3] = "West";
})(DirectionNumber || (DirectionNumber = {})); //<-- automatically with numbers from 0 to 3, and the numbers can be changed.
var DirectionString;
(function (DirectionString) {
    DirectionString["North"] = "NORTH";
    DirectionString["South"] = "SOUTH";
    DirectionString["East"] = "EAST";
    DirectionString["West"] = "WEST";
})(DirectionString || (DirectionString = {}));
let myVar = "Hi";
// for this one:
let aCompany;
let bCompany;
//IMPORTANT: parameter names and the parenthesis are necessary even if there is only one parameter.
let myFunc;
//the parameters' names don't matter much, neither in type annotation nor in function body.
myFunc = function (firstName, lastName) {
    return firstName.length + lastName.length;
};
//Replace T with the provided type when you use it. 
let aStringFamily = {
    parents: ["stern string", "nice string"],
    mate: "string next door",
    children: ["stringy", "stringo", "stringia", "stringolio"]
};
//Provide type annotations for the variables below:
let theFamily = {
    parents: [3, 4], mate: 9, children: [5, 30, 121]
};
let someFamily = {
    parents: [true, true], mate: false,
    children: [false, false, true, true]
};
let aFamily = {
    parents: [
        { name: 'Mom', job: 'software engineer' },
        { name: 'Dad', job: 'coding engineer' }
    ],
    mate: { name: 'Matesky', job: 'engineering coder' },
    children: [{ name: 'Babesky', job: 'none' }]
};
let anotherFamily = {
    parents: [
        { name: 'Momo', tailWagSpeed: 3 },
        { name: 'Dado', tailWagSpeed: 100 }
    ],
    mate: { name: 'Cheems', tailWagSpeed: 7 },
    children: [
        { name: 'Puppin', tailWagSpeed: 0.001 },
        { name: 'Puppenaut', tailWagSpeed: 0.0001 },
        { name: 'Puppenator', tailWagSpeed: 0.01 }
    ]
};
//Generic Functions
function getFilledArray(value, n) {
    return Array(n).fill(value);
}
getFilledArray("cheese", 3); //output: ["cheese", "cheese", "cheese"]
