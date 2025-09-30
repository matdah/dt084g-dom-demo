"use strict";


printDog("Yatzy");
printDog("Otto");
printDog("Grimm");
printDog("Milo");

function printDog(dogName) {
    const dogsEl = document.querySelector("#dogs");

    dogsEl.innerHTML += "<li>" + dogName + "</li>";

    // // Skapa en ny hund
    // const newDogEl = document.createElement("li");    // <li></li>
    // // Skapa ett namn på hunden
    // const newDogName = document.createTextNode(dogName);    // "Yatzy"

    // // Slå ihop till samma
    // newDogEl.appendChild(newDogName); // <li>Yatzy</li>

    // // Skriv ut till DOM
    // dogsEl.appendChild(newDogEl);
}




