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

const sayHello = function (name: string, greet?: string) {
  return (greet || 'Ciao') + ', ' + name
}

console.log(sayHello('Stefano', 'Buonasera')) // 'Buonasera, Stefano'
console.log(sayHello('Michele', 'Buongiorno')) // 'Buongiorno, Michele'
console.log(sayHello('Stefano')) // 'Ciao, Stefano'

// TIPI PERSONALIZZATI (custom)

// è possibile dichiarare come tipo di una variabile/parametro/ecc. un'UNIONE di diversi tipi ("type union")
let mixedData: string | number = ''
mixedData = 100
mixedData = 'Stefano'

// volendo è anche possibile dare un NOME a questi tipi personalizzati, un cosiddetto "alias"
type MyCustomType = string | number

let anotherMixedData: MyCustomType = 'stefano'
anotherMixedData = 1000

// ARRAYS

const array1: string[] = ['stefano', 'marco', 'ilaria', 'francesco']
array1.push('alice')
// array1.push(100) // <-- non posso pushare un numero dentro array1, perchè l'ho dichiarato come array di stringhe!

const array2: number[] = [40, 41, 42, 43]
array2.push(100)

const array3: MyCustomType[] = ['stefano', 10, 34, 1, 'manuel'] // un array che può accettare sia stringhe che numeri
array3.push(6)
array3.push('6')

let arrayOfJustStrings = array3.filter(
  (element) => typeof element === 'string'
) as string[] // stiamo "convincendo" TS che abbiamo filtrato solamente gli elementi di tipo stringa dall'array di tipo MyCustomType[] utilizzando l'operatore "as", che effettua un "casting" verso string[]

arrayOfJustStrings.filter((element) => console.log(element.toUpperCase()))

// modo alternativo di dichiarare un tipo array di stringhe
const anotherWayOfDeclaringAnArrayOfStrings: Array<string> = [
  'ciao',
  'stefano',
  'francesco',
  'mia',
]

// array in cui OGNI elemento può essere stringa o numero
const mixedArray1: (string | number)[] = ['c', 1, 'r', 10]

// TUPLA
const tupleArray: [string, number, string] = ['stefano', 100, 'casasola']
// una tupla è un tipo per un array estremamente preciso nella lunghezza e nello specifico tipo di ogni elemento
// tupleArray.push('stefano') // posso dopo la dichiarazione super-precisa alterare la lunghezza o il contenuto dell'array

// OGGETTI
const myObj = {
  firstName: 'Stefano',
  lastName: 'IFOA',
  skills: ['js', 'ts'],
  country: 'Italy',
  canDrive: true,
  age: 18,
}

console.log(myObj.firstName.toLowerCase())
// myObj.skills.forEach((s) => s.map()) // <-- esploderebbe nel browser con "map is not a function" :)
