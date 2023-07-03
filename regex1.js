// Regular expression (RegEx) = Doimiy ifodalar
// Biz ma'lum bir matnni string ichida mavjud ekanligini topmoqchi bo'lsak regex dan foydalanamiz 

// 1 method === test() ==
/* test methodi qidirilishi kerak bo'lgan qiymatni oladi va uni stringni ichida mavjud yoki yo'qligini tekshirib Xato yoki to'g'ri qiymat qaytaradi */
// Masalan:

// oddiyMatn o'zgaruvchisi yaratilib unga Assalomu aleykum qiymati berildi
let oddiyMatn = 'Assalomu aleykum'

// testRegEx o'zgaruvchisi yaratilib unga ale qiyamti berildi
let testRegEx = /ale/

// consolda true qiymat chiqdi, chunki /ale/ qiymatimiz matnning ichida mavjud va biz uni test metodi orqali tekshirib ko'rdik
console.log(testRegEx.test(oddiyMatn));