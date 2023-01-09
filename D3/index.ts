//union types
let ID: string | number;

function printNumsAndStrings(statement: number | string){
    console.log(`LOG:: ${statement}`);
}
printNumsAndStrings("hello!");
printNumsAndStrings(2);

//Type Narrowing
//It allows us to use unions, then perform type-specific logic without TypeScript getting in the way.

function formatValue(value: string | number){
    if(typeof value === "string"){
        console.log(value.toLowerCase());
    }
    if (typeof value === "number"){
        console.log(value.toFixed(2));
    }
};

//This can also be formatted with if/else because the code can infer specific types for us
function formatValue2(value: string | number){
    if(typeof value === "string"){
        console.log(value.toLowerCase());
    } else {
        console.log(value.toFixed(2));
    }
};

//TypeScript can also type narrow without an else statement
//provided that there’s a return statement within the type guard.
function formatValue3(value: string | number){
    if(typeof value === "string"){
        return value.toLowerCase();
    } 
    
    return value.toFixed(2);
    
};

formatValue('Hiya');
formatValue(42);

//using the in operator with type guards
type Cat = {
    name: string;
    run: () => string;
}

type Fish = {
    name: string;
    swim: () => string;
}

const siameseCat = { 
    name: 'Proxie', 
    run: () => 'pitter pat'
}

const bettaFish = { 
    name: 'Neptune', 
    swim: () => 'bubble blub'
}

function move(pet: Cat | Fish) {
    if("run" in pet){
        return pet.run();
    }
    if("swim" in pet){
        return pet.swim();
    }
}

console.log(move(siameseCat))

//Inferred Union Return Types
type User = {
    id: number;
    username: string;
  };
  

function createUser() {
const randomChance = Math.random() >= 0.5;

if (randomChance) {
    return { id: 1, username: 'nikko' };
} else {
    return 'Could not create a user.';
}
}

let userData : User | string = createUser(); //write union types first then write the value of the data. 

//Unions and Arrays
const dateNumber = new Date().getTime(); // returns a number
const dateString = new Date().toString(); // returns a string
 
//parentheses are important here to contain the union types
const timesList: (string | number)[] = [dateNumber, dateString];
console.log(timesList);

//Common Key Value Pairs
//TypeScript will only allow us to use the common methods and properties that all type members of the union share.
type Like = {
    username: string;
    displayName: string;
};  

type Share = {
    username: string;
    displayName: string;
};

function getFriendNameFromEvent(event: Like | Share) {
    return event.displayName || event.username;
}

const newEvent = {
    username: 'vkrauss',
    displayName: 'Veronica Krauss',
};

const friendName = getFriendNameFromEvent(newEvent);
console.log(`You have an update from ${friendName}.`);

//Unions with literal Types
type Status = "idle" | "downloading" | "complete";
function downloadStatus(status: Status){
    if (status === 'idle'){
        console.log('Download')
    }
    if (status === "downloading"){
        console.log("Downloading...")
    }
    if (status === "complete"){
        console.log("Your download is complete!")
    }
}

downloadStatus('idle');