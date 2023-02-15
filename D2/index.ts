//Array Type Annotations
// 1st way of doing it
let bestNumbers: number[] = [7,77,4];
let bestLunches: string[] = ['chicken soup', 'non-chicken soup'];
let bestBooleans: boolean[] = [true, false];
// 2nd way of doing it
let bestBreakfasts: Array<string>= ['scrambled eggs', 'oatmeal', 'tamago kake gohan', 'any kind of soup'];

// Multidimensional Arrays:
let bestMealPlan: string[][] = [bestLunches, bestBreakfasts, ['baked potato', 'mashed potato']];
let bestBooleansTwice: boolean[][] = [bestBooleans, bestBooleans];
let numbersMulti: number[][][] = [ [[1],[2,3]], [[7],bestNumbers] ];

//In TypeScript, when an array is typed with elements of specific types, it’s called a tuple.
//tuples and arrays do not have compatible types within TypeScript. 
//Specifically, we can’t assign an array to a tuple variable, even when the elements are of the correct type
//because arrays are expandable, while tuples are not.
//The whole point of tuples is that they have fixed lengths, we wouldn't be able to add new elements to a tuple.
let favoriteCoordinates: [number, number, string, number, number, string] = [40, 43.2, 'N', 73, 59.8, 'W'];

//Rest parameters
//The rest parameter lets the function work with any number of parameters greater than 0.
//There is type annotation for rest parameter too.
function addPower(p: number, ...numsToAdd: number[]): number {
    let answer = 0;
    for (let i=0; i < numsToAdd.length; i++){
        answer += numsToAdd[i] ** p;
    }
    return answer;
}

console.log(addPower(3, 4, 5, 3));

function performDanceMove(moveName:string, moveReps:number, hasFlair:boolean):void{
    console.log(`I do the ${moveName} ${moveReps} times !`);
    if(hasFlair){
      console.log('I do it with flair!');
    }
}
  
//basically you can add a tuple type annotation in front of an array sign too.
let danceMoves: [string, number, boolean][] = [
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
for(let i=0; i<danceMoves.length; i++){
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

enum Pet {
  Hamster, 
  Rat,
  Chinchilla,
  Tarantula
}
let petOnSaleTS: Pet = Pet.Chinchilla;
let ordersArrayTS: [Pet, number][] = [
  [Pet.Rat, 2],
  [Pet.Chinchilla, 1],
  [Pet.Hamster, 2],
  [Pet.Chinchilla, 50]
]

//ordersArrayTS.push([Pet.Jerboa, 3]) 
//The line above causes an error, as the property "Jerboa" doesn't not exist on type "typeof Pet".

//String Enums vs. Numeric Enums
//With numeric Enums, the numbers could be assigned automatically
//but with string enums we must write the string explicitly
enum DirectionNumber { North, South, East, West } //<-- automatically with numbers from 0 to 3, and the numbers can be changed.
enum DirectionString { North = 'NORTH', South = 'SOUTH', East = 'EAST', West = 'WEST' }
//string enums are more recommended because numeric enums allow for some behaviours that can let bugs sneak into code. 

//BUT WHY VALUES ARE NEEDED FOR ENUMS ?????

//Type Aliases: useful to refer to complicated types that are needed to be repeated, e.g. tuple types and object types.
type MyString = string;
let myVar: MyString = "Hi";

// for this one:
let aCompany: { 
    companyName: string, 
    boss: { name: string, age: number }, 
    employees: { name: string, age: number }[], 
    employeeOfTheMonth: { name: string, age: number },  
    moneyEarned: number
  };

// You can write this instead to make it simpler:
type Person ={name: string, age: number};
let bCompany: {
    companyName: string,
    boss: Person,
    employees: Person[],
    employeeOfTheMonth: Person,
    moneyEarned: number
}

//Type aliases can be used for function types too
//it's just a type, not the function body at all!
type StringsToNumberFunction = (arg0: string, arg1: string) => number;
//IMPORTANT: parameter names and the parenthesis are necessary even if there is only one parameter.

let myFunc: StringsToNumberFunction;
//the parameters' names don't matter much, neither in type annotation nor in function body.
myFunc = function(firstName: string, lastName: string){
    return firstName.length + lastName.length;
}

//Generic Types
type Family<T> = {
    parents: [T, T], mate: T, children: T[]
}

//Replace T with the provided type when you use it. 
let aStringFamily: Family<string> = {
    parents: ["stern string", "nice string"],
    mate: "string next door",
    children: ["stringy", "stringo", "stringia", "stringolio"]
};



//A good example of how different type alias can be combined with generic types
type Human = {name: string, job: string};
type Dog = {name: string, tailWagSpeed: number};

//Provide type annotations for the variables below:
let theFamily: Family<number> = {
  parents: [3, 4], mate: 9, children: [5, 30, 121]
};

let someFamily: Family<boolean> = {
  parents: [true, true], mate: false, 
  children: [false, false, true, true]
};

let aFamily: Family<Human> = {
  parents: [
    {name: 'Mom', job: 'software engineer'},
    {name: 'Dad', job: 'coding engineer'}
  ],
  mate: {name: 'Matesky', job: 'engineering coder'},
  children: [{name: 'Babesky', job: 'none'}]
};

let anotherFamily: Family<Dog> = {
  parents: [
    {name: 'Momo', tailWagSpeed: 3},
    {name: 'Dado', tailWagSpeed: 100}
  ],
  mate: {name: 'Cheems', tailWagSpeed: 7},
  children: [
    {name: 'Puppin', tailWagSpeed: 0.001},
    {name: 'Puppenaut', tailWagSpeed: 0.0001},
    {name: 'Puppenator', tailWagSpeed: 0.01}
  ]
};

//Generic Functions
function getFilledArray<T>(value:T, n:number): T[]{
    return Array(n).fill(value);
}

getFilledArray<string>("cheese", 3) //output: ["cheese", "cheese", "cheese"]