import EventEmitter from "events";

const myEmitter = new EventEmitter();

const birthdayEventListener = (name) => {
    console.log(`Happy Birthday ${name}!`);
}

const tampungNilaiBirthdayEventListener = ({ name }) => {
    birthdayEventListener(name);
}

myEmitter.on('birthdayEvent', tampungNilaiBirthdayEventListener);
myEmitter.emit('birthdayEvent', {
    name: "Richo",
});