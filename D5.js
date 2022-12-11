/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("Esercizio 1:");
const pets = ["dog", "cat", "hamster", "redfish"];
for (let i = 0; i < pets.length; i++) {
  console.log("Animale:", pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("esercizio 2:");
let ElencoOrdinato = pets.sort();

console.log(ElencoOrdinato);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("esercizio 3:");
pets.reverse();
console.log(pets);

/* OPPURE: function SortArray(x, y) {
  if (x < y) {
    return 1;
  }
  if (x > y) {
    return -1;
  }
  return 0;
}
let OrdineAlfabetico = pets.sort(SortArray);
console.log(pets); */
/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("Esercizio 4:");
pets[4] = pets[0];
pets.shift();

console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
console.log("Esercizio 5");
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

let n = 123;
for (let i = 0; i < cars.length; i++) {
  {
    cars[i].licensePlate = n++;
  }
}

console.log("Le macchine sono:", cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("Esercizio 6:");
let NewCar = {
  brand: "",
  model: "",
  color: "",
  trims: "",
  licensePlate: "",
};
cars.push(NewCar);
console.log("Le macchine sono:", cars);

/* let newObject;
newObject.assign(cars[0]);
for (let i = 0; i < cars.length; i++) {
  cars.newObject;
  delete cars[i].trims.pop();
}
 */
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log("Esercizio 7:");
const justTrims = [];
for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}

console.log(cars);
console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("Esercizio 8:");

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.indexOf("b") === 0) {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}
//}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log("Esercizio 9:");
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

let i = -1;
while (numericArray[i] !== 32) {
  i++;
  console.log(numericArray[i]);
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
console.log("Esercizio 10:");

/* let numeroAlfabeto = [];
for (j = 0; j < charactersArray.length; j++) {
  switch (charactersArray[j]) {
    case charactersArray[j] === "a":
      numeroAlfabeto[j] = 1;
      break;
    case charactersArray[j] === "b":
      numeroAlfabeto[j] = 2;
      break;
    case charactersArray[j] === "c":
      numeroAlfabeto[j] = 3;
      break;
    case charactersArray[j] === "d":
      numeroAlfabeto[j] = 4;
      break;
    case charactersArray[j] === "e":
      numeroAlfabeto[j] = 5;
      break;
    case charactersArray[j] === "f":
      numeroAlfabeto[j] = 6;
      break;
    case charactersArray[j] === "g":
      numeroAlfabeto[j] = 7;
      break;
    case charactersArray[j] === "h":
      numeroAlfabeto[j] = 8;
      break;
    case charactersArray[j] === "i":
      numeroAlfabeto[j] = 9;
      break;
    case charactersArray[j] === "l":
      numeroAlfabeto[j] = 10;
      break;
    case charactersArray[j] === "m":
      numeroAlfabeto[j] = 11;
      break;
    case charactersArray[j] === "n":
      numeroAlfabeto[j] = 12;
      break;
    case charactersArray[j] === "o":
      numeroAlfabeto[j] = 13;
      break;
    case charactersArray[j] === "p":
      numeroAlfabeto[j] = 14;
      break;
    case charactersArray[j] === "q":
      numeroAlfabeto[j] = 15;
      break;
    case charactersArray[j] === "r":
      numeroAlfabeto[j] = 16;
      break;
    case charactersArray[j] === "s":
      numeroAlfabeto[j] = 17;
      break;
    case charactersArray[j] === "t":
      numeroAlfabeto[j] = 18;
      break;
    case charactersArray[j] === "u":
      numeroAlfabeto[j] = 19;
      break;
    case charactersArray[j] === "v":
      numeroAlfabeto[j] = 20;
      break;
    case charactersArray[j] === "w":
      numeroAlfabeto[j] = 21;
      break;
    case charactersArray[j] === "x":
      numeroAlfabeto[j] = 22;
      break;
    case charactersArray[j] === "y":
      numeroAlfabeto[j] = 23;
      break;
    case charactersArray[j] === "z":
      numeroAlfabeto[j] = 24;
      break;
  }
  console.log(numeroAlfabeto[j]);
} 
*/

let numeroAlfabeto = [0, 0, 0, 0, 0];

for (let j = 0; j < charactersArray.length; j++) {
  switch (charactersArray[j]) {
    case charactersArray[j] === "a":
      numeroAlfabeto.push("1");
      break;
    case charactersArray[j] === "b":
      numeroAlfabeto.push("2");
      break;
    case charactersArray[j] === "c":
      numeroAlfabeto.push("3");
      break;
    case charactersArray[j] === "d":
      numeroAlfabeto.push("4");
      break;
    case charactersArray[j] === "e":
      numeroAlfabeto.push("5");
      break;
    case charactersArray[j] === "f":
      numeroAlfabeto.push("6");
      break;
    case charactersArray[j] === "g":
      numeroAlfabeto[0] = 7;
      break;
    case charactersArray[j] === "h":
      numeroAlfabeto.push("8");
      break;
    case charactersArray[j] === "i":
      numeroAlfabeto.push("9");
      break;
    case charactersArray[j] === "l":
      numeroAlfabeto.push("10");
      break;
    case charactersArray[j] === "m":
      numeroAlfabeto.push("11");
      break;
    case charactersArray[j] === "n":
      numeroAlfabeto.push("12");
      break;
    case charactersArray[j] === "o":
      numeroAlfabeto.push("13");
      break;
    case charactersArray[j] === "p":
      numeroAlfabeto.push("14");
      break;
    case charactersArray[j] === "q":
      numeroAlfabeto.push("15");
      break;
    case charactersArray[j] === "r":
      numeroAlfabeto.push("16");
      break;
    case charactersArray[j] === "s":
      numeroAlfabeto.push("17");
      break;
    case charactersArray[j] === "t":
      numeroAlfabeto.push("18");
      break;
    case charactersArray[j] === "u":
      numeroAlfabeto.push("19");
      break;
    case charactersArray[j] === "v":
      numeroAlfabeto.push("20");
      break;
    case charactersArray[j] === "w":
      numeroAlfabeto.push("21");
      break;
    case charactersArray[j] === "x":
      numeroAlfabeto.push("22");
      break;
    case charactersArray[j] === "y":
      numeroAlfabeto.push("23");
      break;
    case charactersArray[j] === "z":
      numeroAlfabeto.push("24");
      break;
  }
  console.log(charactersArray[j]);
  console.log(numeroAlfabeto[j]);
}
