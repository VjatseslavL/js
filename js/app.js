console.log("Hello, World!");
//declare a variable
let name = "Harry Potter";
let age = 18;
let alive = false;
let city = "London";
let drivingLicense = "";
//console.log("Character: ", name, ". Age: ", age, ". City: ", city);
console.log(`Character: ${name}. Age: ${age}. City: ${city}.`);

if(alive){
    commentary = "survived the battle for Hogwarts.";
} else {
    commentary = "Died in the attle for Hogwarts.";
}
console.log(`character ${name} ${commentary}`);

if(age < 18) {
    drivingLicense = `${name} is too young to drive a car.`
} else {
    drivingLicense = `${name} is old enough to drive a car.`
}

console.log(drivingLicense);

const html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Name: ${age}</li>
        <li>City: ${city}</li>
        <li>He: ${commentary}</li>
        <li>${drivingLicense}</li>
    </ul>
`;

document.body.innerHTML = html;