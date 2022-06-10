import {EventEmitter} from "events";

const myEventEmitter = new EventEmitter();

const makeCoffee = ( name ) => {
    console.log(`Kopi ${name} telah dibuat!`);
}

const makeBill = ( price ) => {
    console.log(`Bill sebesar ${price} telah dibuat!`);
}

const onCoffeeOrderedListener = ({ name, price }) => {
    makeCoffee(name);
    makeBill(price);
}

myEventEmitter.on('coffee-order', onCoffeeOrderedListener);

myEventEmitter.emit('coffee-order', {
    name: "tubruk",
    price: 15000
});
