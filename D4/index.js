class DesktopDirectory {
    addFile(name) {
        console.log(`Adding File: ${name}`);
    }
    showPreview(name) {
        console.log(`Opening preview of file: ${name}.`);
    }
}
const Desktop = new DesktopDirectory();
Desktop.addFile('lesson-notes.txt');
const me = {
    code: () => console.log('Headphones on. Coffee brewed. Editor open.'),
    name: "Corrina",
    hobbies: ['Building rockets']
};
me.code();
function getUserName(options) {
    if (options.firstName && options.lastName) {
        return console.log(`${options.firstName} ${options.lastName}`);
    }
    return console.log(options.username);
}
getUserName({
    firstName: "Mr.",
    lastName: "Oshiro",
    username: "hotelowner34"
});
getUserName({
    firstName: "Madeline",
    username: "mountainClimber"
});
