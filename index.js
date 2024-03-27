// TESTIAMO LA NOSTRA MINI-TOOLCHAIN
console.log('Hello TypeScript!');
console.log('compila in automatico? sì!');
console.log('io scrivo nel file TS, questo viene traspilato in JS e Live Server si aggiorna!');
// TIPI DI DATO PRIMITIVI IN TS
// string
// number
// boolean
// undefined
// null
// any
// DICHIARAZIONE VARIABILI
var student = 'Mario'; // i due punti assegnano il TIPO alla variabile, l'= assegna il VALORE
// student = 100 // TS non ammette il cambio di TIPO per una variabile
student = 'Stefano'; // ovviamente, essendo stata dichiarata con "let", il VALORE della variabile student è riassegnabile
var age = 18;
age = 30;
var isLoading = true;
// isLoading = 1000 -> anche senza specificare esplicitamente il TIPO della variabile, TS è in grado di auto-determinarlo
// tramite il VALORE INIZIALE. Questa caratteristica molto utile di TS si chiama --> TYPE INFERENCE
var numberAsAString = '50';
var realNumber = parseInt(numberAsAString); // realNumber si è automaticamente beccata il tipo "number"
var boh;
boh = 50;
// boh = '50' <-- schifezza, ma ce la lascia fare perchè boh è di tipo any!
console.log(student.toUpperCase().toLowerCase());
// console.log(boh.metodoCheNonEsiste()) <-- any spegne i controlli e mi permette di fare errori!
// funziona anche per le funzioni!
var makeUpperCase = function (str) {
    return str.toUpperCase();
};
var anotherName = 'stefano';
console.log(makeUpperCase(anotherName).length);
// TIPIZZARE I PARAMETRI DELLE FUNZIONI: come e perchè :)
var addition = function (num1, num2) {
    return num1 + num2;
};
console.log(addition(7, 5)); // 12
console.log(addition('7', '5')); // '75' :(
var additionWithChecks = function (num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else {
        return 'i valori forniti non sono entrambi numerici!';
    }
};
console.log(additionWithChecks(1, 2)); // 3
console.log(additionWithChecks('1', 2)); // "i valori forniti non sono entrambi numerici!"
var additionWithTS = function (num1, num2) {
    return num1 + num2;
};
console.log(additionWithTS(40, 5));
console.log(additionWithTS(40, 59));
var lastAdditionWithTS = function (num1, num2) {
    if (num2 === void 0) { num2 = 0; }
    return num1 + num2;
};
console.log(lastAdditionWithTS(10)); // num2 è undefined, quindi diventa 0
// console.log(lastAdditionWithTS('10', 10)) // num2 è undefined, quindi diventa 0
// console.log(lastAdditionWithTS('10', '10')) // num2 è undefined, quindi diventa 0
console.log(lastAdditionWithTS(10, 10)); // num2 è undefined, quindi diventa 0
