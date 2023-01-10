//Type and Interface
//type can be used to type objects, primitives, and more, while interface can only be used to type objects.
// = is needed for type, not for interface.
type Mail = {
    receiver: string;
    price: number
};

interface Run {
    miles: number
}

//Interfaces and classes, through implements
interface Directory {
    addFile: (name: string) => void
}

class DesktopDirectory implements Directory {
    addFile(name: string){
        console.log(`Adding File: ${name}`);
    }

    showPreview(name: string){
        console.log(`Opening preview of file: ${name}.`)
    }
}

const Desktop = new DesktopDirectory();
Desktop.addFile('lesson-notes.txt');

//deep types with nested objects vs. composed types

//deep types
interface About {
    general: {
        id: number;
        name: string;
        version: {
            versionNumber: number;
        }
    }
}

//refactored composed types
interface About2 {
    general: General;
}

interface General {
    id: number;
    name: string;
    version: Version;
}

interface Version {
    versionNumber: number;
}

//Extending Interfaces
interface HomoSapien {
    name: string;
    hobbies: string[]
}

interface Developer extends HomoSapien {
    code: ()=> void;
}

const me: Developer = {
    code: ()=> console.log('Headphones on. Coffee brewed. Editor open.'),
    name: "Corrina",
    hobbies: ['Building rockets']
}

me.code();

//Index Signatures
interface Budget {
    [category: string]: number;
}

//output could be {shopping: 100, food: 100, utilities: 40}

//Optional Type Members using "?"
interface UserNameOptions {
    firstName?: string;
    lastName?: string;
    username: string;
}

function getUserName(options: UserNameOptions){
    if(options.firstName && options.lastName){
        return console.log(`${options.firstName} ${options.lastName}`);
    }
    return console.log(options.username);
}

getUserName({
    firstName: "Mr.",
    lastName: "Oshiro",
    username: "hotelowner34"
})

getUserName({
    firstName: "Madeline",
    username: "mountainClimber"
})
