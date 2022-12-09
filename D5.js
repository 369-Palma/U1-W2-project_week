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
const pets = ["dog", "cat", "hamster", "redfish"];
for (let i = 0; i < pets.length; i++) {
  console.log("Animale:", pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
let ElencoOrdinato = pets.sort();
console.log(ElencoOrdinato);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
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

pets[4] = pets[0];
pets.shift();
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
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

for (let i = 0; i < cars.length; i++) {
  let newInfo = { licensePlate: "DGAJ" };
  cars.licensePlate = "DGAJ";
}
console.log("Le macchine sono:", cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
cars.newObject = {};
console.log("Le macchine sono:", cars);

for (let i = 0; i < cars.length; i++) {
  delete cars[i].trims.pop();
}
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
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
for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.split("") === "b") {
    console.log("Fizz");
  } else {
    if (cars[i].color.split("") !== "b") {
      console.log("Buzz");
    }
  }
}
/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];
let i = 0;
while (numericArray[i] === 32) {
  console.log(numericArray[i]);
  i++;
}
console.log(numericArray);

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"];
const posizioniCaratteri = []
  let ordine = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
    f:6,
    g:7,
    h:8,
    i:9,
    j:10,
    k:11,
    l:12,
    m:13,
    n:14,
    o:15,
    p:16,
    q:17,
    r:18,
    s:19,
    t:20,
    u:21,
    v:22,
    w:23,
    x:24,
    y:25,
    z:26
  } 
for(let i = 0; i < charactersArray.length; i++){
 swich (true){
  case charactersArray[i] === ordine.g;
    posizioniCaratteri.push(ordine) 
    break 
  case: charactersArray[i] === ordine.n;
    posizioniCaratteri.push(ordine) 
  break
  case: charactersArray[i] === ordine.u;
    posizioniCaratteri.push(ordine) 
  break
  case: charactersArray[i] === ordine.z;
    posizioniCaratteri.push(ordine) 
  break
  case: charactersArray[i] === ordine.d;
    posizioniCaratteri.push(ordine) 
  break
  default:
    console.log("nessuna delle opzioni precendenti")
  }
}
/* SOLUZIONE DA GOOGLE */
/*function letterValue(str) {
  var anum = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26
  };
  if (str.length == 1) return anum[str] || " ";
  return str.split("").map(letterValue);
} */

/* const posizioniCaratteri = [];
for (let i = 0; (i = 21); i++) {}
console.log(posizioniCaratteri); */

/* }
for (let i = 0; i < charactersArray.length; i++) {
  switch (true) {
    case charactersArray[i]:
  }
}  */
