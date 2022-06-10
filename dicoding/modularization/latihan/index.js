import Tiger from "./tiger.js";
import Wolf from "./wolf.js";

const tiger = new Tiger();
const wolf = new Wolf();

const fighting = (tiger, wolf) => {
    if(tiger.strength > wolf.strength) {
        tiger.grow1();
        return;
    }
    if(wolf.strength > tiger.strength) {
        wolf.how1();
        return;
    }
    console.log("Tiger and Wolf have a same strength!")
}

fighting(tiger, wolf);
