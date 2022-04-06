// URL for the instructions: 
// https://education.launchcode.org/intro-to-professional-web-dev/chapters/typescript/exercises.html 
import { SpaceLocation } from './SpaceLocation'; 

// Part 1: Declare (5) Variables With Type
//let SpacecraftName : string = "Determination";
//let speedMph : number = 17500;
let kilometersToMars : number = 225000000;
let kilometersToMoon: number = 384400;
//let milesPerKilometer: number = 0.621;


// Part 2: Print Days to Mars
/* let milesToMars : number = kilometersToMars * milesPerKilometer;
let hoursToMars : number = milesToMars / speedMph;
let daysToMars : number = hoursToMars / 24;
*/



// Code an output statement here (use a template literal):
// console.log(`The ${SpacecraftName} takes ${daysToMars} days to travel to Mars`);


// Part 3: Create a Function ("getDaysToLocation")
 /* 
 function getDaysToLocation(kilometersAway : number): number {
     let milesAway: number = kilometersAway * milesPerKilometer;
     let hoursTOLocation: number = milesAway /speedMph;
     daysToMars = hoursTOLocation / 24;
     return daysToMars;
      }
*/    



// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.

// console.log(`The ${SpacecraftName} takes ${daysToMars} days to travel to Mars`);


// Part 4: Create a Spacecraft Class

class Spacecraft {
 
    milesPerKilometer: number = 0.621;
    name: string;
    speedMph: number;
    constructor(name: string,speedMph: number) {
        this.name = name;
        this.speedMph = speedMph;
    }
     getDaysToLocation(kilometersAway : number): number {
        let milesAway: number = kilometersAway * this.milesPerKilometer;
        let hoursTOLocation: number = milesAway /this.speedMph;
        let daysToLocation = hoursTOLocation / 24;
        return daysToLocation;
         }

         printDaysToLocation(location: SpaceLocation) {
            console.log(`${this.name} would take ${this.getDaysToLocation(location.kilometersAway)} days to get to ${location.name}.`);
         }
}



// Create an instance of the class here:

let spaceShuttle = new Spacecraft('Determination',17500);



// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.

console.log(`The ${spaceShuttle.name} takes ${spaceShuttle.getDaysToLocation(kilometersToMars)}days to travel to Mars`);

// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 concent.



// Add the printDaysToLocation function to the Spacecraft class.
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToMoon));
// Paste in the code from step 6 here:
