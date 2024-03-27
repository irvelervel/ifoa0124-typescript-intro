// TESTIAMO LA NOSTRA MINI-TOOLCHAIN
console.log('Hello TypeScript!')

console.log('compila in automatico? sì!')

console.log(
  'io scrivo nel file TS, questo viene traspilato in JS e Live Server si aggiorna!'
)

// TIPI DI DATO PRIMITIVI IN TS
// string
// number
// boolean
// undefined
// null
// any

// DICHIARAZIONE VARIABILI
let student: string = 'Mario' // i due punti assegnano il TIPO alla variabile, l'= assegna il VALORE

// student = 100 // TS non ammette il cambio di TIPO per una variabile
student = 'Stefano' // ovviamente, essendo stata dichiarata con "let", il VALORE della variabile student è riassegnabile

let age: number = 18
age = 30

let isLoading = true
// isLoading = 1000 -> anche senza specificare esplicitamente il TIPO della variabile, TS è in grado di auto-determinarlo
// tramite il VALORE INIZIALE. Questa caratteristica molto utile di TS si chiama --> TYPE INFERENCE

let numberAsAString = '50'
let realNumber = parseInt(numberAsAString) // realNumber si è automaticamente beccata il tipo "number"

let boh

boh = 50
// boh = '50' <-- schifezza, ma ce la lascia fare perchè boh è di tipo any!

console.log(student.toUpperCase().toLowerCase())

// console.log(boh.metodoCheNonEsiste()) <-- any spegne i controlli e mi permette di fare errori!

// funziona anche per le funzioni!
const makeUpperCase = function (str: string) {
  return str.toUpperCase()
}

const anotherName = 'stefano'

console.log(makeUpperCase(anotherName).length)

// TIPIZZARE I PARAMETRI DELLE FUNZIONI: come e perchè :)
const addition = (num1, num2) => {
  return num1 + num2
}

console.log(addition(7, 5)) // 12
console.log(addition('7', '5')) // '75' :(

const additionWithChecks = (num1, num2) => {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    return num1 + num2
  } else {
    return 'i valori forniti non sono entrambi numerici!'
  }
}

console.log(additionWithChecks(1, 2)) // 3
console.log(additionWithChecks('1', 2)) // "i valori forniti non sono entrambi numerici!"

const additionWithTS = (num1: number, num2: number) => {
  return num1 + num2
}

console.log(additionWithTS(40, 5))
console.log(additionWithTS(40, 59))

const lastAdditionWithTS = (num1: number, num2: number = 0) => {
  return num1 + num2
}

console.log(lastAdditionWithTS(10)) // num2 è undefined, quindi diventa 0
// console.log(lastAdditionWithTS('10', 10)) // num2 è undefined, quindi diventa 0
// console.log(lastAdditionWithTS('10', '10')) // num2 è undefined, quindi diventa 0
console.log(lastAdditionWithTS(10, 10)) // num2 è undefined, quindi diventa 0
