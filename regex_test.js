// Regular expression (RegEx) = Doimiy ifodalar
// Regexlar bu ma'lum bir qiymatlar bo'lib biz ularni methodlar orqali stringda mavjud yoki yo'qligini tekshiramiz.

// 1 method === test() ==
/* test methodi qidirilishi kerak bo'lgan qiymatni oladi va uni stringni ichida mavjud yoki yo'qligini tekshirib Xato yoki to'g'ri qiymat qaytaradi */
// Masalan:

// oddiyMatn o'zgaruvchisi yaratilib unga Assalomu aleykum qiymati berildi
let oddiyMatn = 'Assalomu aleykum'

// testRegEx o'zgaruvchisi yaratilib unga ale qiyamti berildi
let testRegEx = /ale/

// consolda true qiymat chiqdi, chunki /ale/ qiymatimiz matnning ichida mavjud va biz uni test metodi orqali tekshirib ko'rdik
console.log(testRegEx.test(oddiyMatn));

// Test methodi case sensetive bo'lib, biz qiymatni aynan o'zidek kirgazishimiz kerak.
// Misol uchun yuqorida ko'rsatilgan testRegEx qiymatini Ale ga o'zgartiramiz

testRegEx = /Ale/
console.log(testRegEx.test(oddiyMatn));
// Endi konsolda False qiymat chiqadi, chunki bizda ale bor ammo Ale yo'q



/* Bir nechta qiymatlarni qidirish */
// Yuqorida biz faqat bir qiymatni string ichidan qidirishni o'rgandik, endi esa uning muqobil variantlarini ham qidiramiz, buning uchun "OR" operatoridan foydalanamiz |

let petString = "James has a pet cat.";
let petRegex = /cat|bat|dog/;
let result = petRegex.test(petString);

console.log(result);
// bizning test methodimiz string ichidan chu kiritilgan uchchala qiymatdan birini qidiradi agar bo'lsa true, aks holda false qaytaradi