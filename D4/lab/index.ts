import { getObstacleEvents } from "./computer-vision";

interface AutonomousCar {
    isRunning?: boolean;
    respond: (events: Events)=> void;
}

interface AutonomousCarProps {
    isRunning?: boolean;
    steeringControl: Steering;
}

interface Events {
    [obstacleEvents: string]: boolean;
}

interface Control {
    execute: (command: string) => void;
}

interface Steering extends Control {
    turn: (direction: string) => void;
}

class Car implements AutonomousCar {
    isRunning;

    steeringControl= undefined;

    constructor(props: AutonomousCarProps){
        this.isRunning= props.isRunning;
        this.steeringControl = props.steeringControl;
    }

    respond(events: Events){
        if(this.isRunning){
            Object.keys(events).forEach( eventKey => {
                if(events[eventKey]){
                    if (eventKey === "ObstacleLeft"){
                        this.steeringControl.turn("right");
                    }
                    if (eventKey === "ObstacleRight"){
                        this.steeringControl.turn("left");
                    }

                }
            })
        } else {
         console.log('The car is off');
         return;   
        }
    }
}

class SteeringControl implements Steering {
    turn(direction:string){
        this.execute(`turn ${direction}`);
    }
    execute(command: string){
        console.log(`Executing: ${command}`);
    }
}

let steering = new SteeringControl();
let autonomousCar = new Car({isRunning: true, steeringControl: steering});
autonomousCar.respond(getObstacleEvents());