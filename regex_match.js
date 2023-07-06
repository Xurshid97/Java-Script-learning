/* Match metod - qiymatni qidiradi va ushbu qiymatni qaytaradi, aks holda null qaytaradi*/
// Ishlatish usuli test metodining teskarisi

console.log("Assalomu aleykum".match(/salom/));

let ourStr = "Bolalar qanday sizLar";
let ourRegex = /l/;
let ans = ourStr.match(ourRegex);
console.log(ans);

// ========================= // ============================= //

/* === g === kalit so'zi, g - global */
// matnni ichidagi barcha mavjud qiymatni qaytaradi
// yuqoridagi namunada faqat birinchi l harfi qaytarilgan edi endi hamma l harflarini, katta va kichiklarini ham hisobga olib matn ichidan topamiz

ourRegex = /l/ig
ans = ourStr.match(ourRegex)
console.log(ans);

// ========================= // ============================= //

/* === . === dot, wildcard yoki period deb ataluvchi belgi */
// qiymatning davomini o'zi topib qidiradi, kamida bir o'xshash topilsa true aks holda false qayataradi

let humStr = "bola bore bormi botir bordir";
let huRegex = /bo./;

let ans1 = humStr.match(huRegex);
console.log(ans1);

let ans2 = huRegex.test(humStr)
console.log(ans2);

// ========================= // ============================= //

/*=== [] === character class belgisi */
// bu belgining ichiga aynan qidirilishi kerak bo'lgan qiymatlar kiritiladi

let kalChar = 'kal'
let kulChar = 'kul'
let kelChar = 'kel'

let regExChars = /k[aue]l/

console.log(kalChar.match(regExChars));
console.log(kulChar.match(regExChars));
console.log(kelChar.match(regExChars));

// ========================= // ============================= //

/* === - === minus beligisi dan gacha bo'lgan manoda ishlatiladi */
// deylik biz a dan e gacha bo'lgan belgilarni qidirishimiz kerak, uni [abcde] qilib yozishimiz yoki shunchaki [a-e] qilib yozishimiz ham mumkin

let dolStr = 'dol'
let bolStr = 'bol'

let regChar = /[a-e]ol/
console.log(dolStr.match(regChar));
console.log(bolStr.match(regChar));


// minus belgisini raqamlar uchun ham ishlatishimiz mumkin
let mansur = 'Mansur1234567'

let manReg = /[a-z1-7]/ig

console.log(mansur.match(manReg));


// ========================= // ============================= //

/* === ^ === negated character set belgisi */
// bu belgi, ma'lum bir qiymatlarni tekshirmaydi
// masalan quyida unli harflar, bo'sh joy, nuqta va raqamlar tekshirilmaydi

let matnNamuna = "Ko'r sichqon 326.";
let matnRegex = /[^aeiuo0-9 .]/ig;

console.log(matnNamuna.match(matnRegex)); /* ['K', "'", 'r','s', 'c', 'h','q', 'n'] */

// ========================= // ============================= //

/* === + === qo'shish belgisi bir yoki bir necha marta ketma ketlikda kelgan o'xshash qiymatlarni qidiradi */
// Masalan, quyida ketma ket kelgan ikkta ss harflari qaytariladi
let mamlakatNomi = "Mississippi";
let mamlakatRegex = /s+/;

console.log(mamlakatNomi.match(mamlakatRegex));  // [ 'ss', 'ss' ]


// ========================= // ============================= //

/* === * === asterisk yoki yulduz belgisi qiymatni nol yoki ko'p marta tekshiradi */
// Ya'ni u o'zi turgan indexgacha bo'lgan qiymat topilgach shundan keyin o'zining qiymati tugaguncha tekshiradi o'zi topilmasa undan oldingi qiymatni qaytaradi

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "goooover the moon";
let goRegex = /go*/;

console.log(soccerWord.match(goRegex)); // gooooo
console.log(gPhrase.match(goRegex)); // g
console.log(oPhrase.match(goRegex)); // goooo


// ushbu star belgisi bilan yana bir namuna, kvadrat qavsalar ichidagi barcha harflar tekshiriladi

let titanicStr = "titanic"
let titanicRegEx = /t[a-z]*i/

console.log(titanicStr.match(titanicRegEx)); // 'titani'

// ========================= // ============================= //

/* yuqoridagi * - star operatori orqali biz t va i orasidagi barcha so'zlarni topa oldik va u greedy match deb ataladi, Xuddi shuning teskarisini bajaruvchi belgi bu ? - so'roq belgisi, u eng qisqa javobni qidiradi */

let titanicStr2 = "titanic"
let titanicRegEx2 = /t[a-z]*?i/

console.log(titanicStr2.match(titanicRegEx2)); // 'ti'