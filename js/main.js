"use strict";

// Invänta DOM
document.addEventListener("DOMContentLoaded", () => {

    // Händelsehanterare för att lägga till hund
    document.querySelector("#add-dog").addEventListener("click", addDog);

});


function addDog() {

    // Läs in värdet från formuläret
    const dogName = document.querySelector("#dog-name").value;

    // Kontrollera att namnet inte är tomt
    if (dogName === "") return;

    const dogsEl = document.querySelector("#dogs");

    // Skapa en ny hund
    const newDogEl = document.createElement("li");    // <li></li>
    // Skapa ett namn på hunden
    const newDogName = document.createTextNode(dogName);    // "dogName"

    // Slå ihop till samma
    newDogEl.appendChild(newDogName); // <li>dogName</li>

    // Skriv ut till DOM
    dogsEl.appendChild(newDogEl);

    // Rensa värdet från formuläet
    document.querySelector("#dog-name").value = "";
}




