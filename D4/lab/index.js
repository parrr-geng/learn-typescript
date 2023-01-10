"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const computer_vision_1 = require("./computer-vision");
class Car {
    constructor(props) {
        this.steeringControl = undefined;
        this.isRunning = props.isRunning;
        this.steeringControl = props.steeringControl;
    }
    respond(events) {
        if (this.isRunning) {
            Object.keys(events).forEach(eventKey => {
                if (events[eventKey]) {
                    if (eventKey === "ObstacleLeft") {
                        this.steeringControl.turn("right");
                    }
                    if (eventKey === "ObstacleRight") {
                        this.steeringControl.turn("left");
                    }
                }
            });
        }
        else {
            console.log('The car is off');
            return;
        }
    }
}
class SteeringControl {
    turn(direction) {
        this.execute(`turn ${direction}`);
    }
    execute(command) {
        console.log(`Executing: ${command}`);
    }
}
let steering = new SteeringControl();
let autonomousCar = new Car({ isRunning: true, steeringControl: steering });
autonomousCar.respond((0, computer_vision_1.getObstacleEvents)());
