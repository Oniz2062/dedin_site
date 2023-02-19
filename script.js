<<<<<<< HEAD
alert("добропожаловать в реестр кошечек и собачек")
var stroka=0;
var kotikilisobachka;
var poroda;
var klichka;
var god;
var chislo;
var vbl6or;
for (var i = 1; i<1000; i++){
alert("котик или собачка?")
kotikilisobachka= prompt("1 если котик, 2 если собачка")
if ((kotikilisobachka > 2)||(kotikilisobachka < 1)){
    alert("ОШИБКА!");
    break    
}
else {
    if (kotikilisobachka == 1){
        alert("выберите породу вашего котика")
        poroda=prompt("1 если персидский; 2 если сфинкс; 3 если британский; 4 если шотландский")}
    else{
        alert("выберите породу вашей собачки:")
        poroda=prompt("1 если доберман; 2 если мопс; 3 если корги; 4 если хаски")
    }

}
// проверка породы
if ((poroda > 4)||(poroda < 1)){
    alert("ОШИБКА!");
    break}
// порода котиков
if ((kotikilisobachka == 1)&&(poroda == 1)){
    poroda = "персидкий"}
if ((kotikilisobachka == 1)&&(poroda == 2)){
    poroda = "сфинкс"}
if ((kotikilisobachka == 1)&&(poroda == 3)){
    poroda = "британский"}
if ((kotikilisobachka == 1)&&(poroda == 4)){
    poroda = "шотландский"}
// порода собачек
if ((kotikilisobachka == 2)&&(poroda == 1)){
    poroda = "доберман"}
if ((kotikilisobachka == 2)&&(poroda == 2)){
    poroda = "мопс"}
if ((kotikilisobachka == 2)&&(poroda == 3)){
    poroda = "корги"}
if ((kotikilisobachka == 2)&&(poroda == 4)){
    poroda = "хаски"}
// кличка собачки или котика?
if(kotikilisobachka == 1){
    klichka=prompt("как зовут вашего котика?")
}
else{
    klichka=prompt("как зовут вашу собачку?")
}
//год вашего котика или собачки
if(kotikilisobachka == 1){
    god=prompt("введите год рождения вашего котика")
}
else{
    god=prompt("введите год рождения вашей собачки")
}
//
if(kotikilisobachka == 1){
    chislo=prompt("введите полное число лет/годиков котика")
}
else{
    chislo=prompt("введите полное число лет/годиков собачки")
}
//котик или собачка?
if(kotikilisobachka == 1){
    kotikilisobachka = "котик" 
}
else{
    kotikilisobachka = "собачка" 
}
//объединение в строку
stroka = kotikilisobachka + ", " + poroda + ", " + klichka + ", " + god + ", " + chislo;
console.log(stroka)
//выбор
if(i==10){
vbl6or = confirm("Желаете продолжить?")
}
if (vbl6or == false){
alert("Желаем удачи!")
break
}
}
=======
alert("добропожаловать в реестр кошечек и собачек")
var stroka=0;
var kotikilisobachka;
var poroda;
var klichka;
var god;
var chislo;
var vbl6or;
for (var i = 1; i<1000; i++){
alert("котик или собачка?")
kotikilisobachka= prompt("1 если котик, 2 если собачка")
if ((kotikilisobachka > 2)||(kotikilisobachka < 1)){
    alert("ОШИБКА!");
    break    
}
else {
    if (kotikilisobachka == 1){
        alert("выберите породу вашего котика")
        poroda=prompt("1 если персидский; 2 если сфинкс; 3 если британский; 4 если шотландский")}
    else{
        alert("выберите породу вашей собачки:")
        poroda=prompt("1 если доберман; 2 если мопс; 3 если корги; 4 если хаски")
    }

}
// проверка породы
if ((poroda > 4)||(poroda < 1)){
    alert("ОШИБКА!");
    break}
// порода котиков
if ((kotikilisobachka == 1)&&(poroda == 1)){
    poroda = "персидкий"}
if ((kotikilisobachka == 1)&&(poroda == 2)){
    poroda = "сфинкс"}
if ((kotikilisobachka == 1)&&(poroda == 3)){
    poroda = "британский"}
if ((kotikilisobachka == 1)&&(poroda == 4)){
    poroda = "шотландский"}
// порода собачек
if ((kotikilisobachka == 2)&&(poroda == 1)){
    poroda = "доберман"}
if ((kotikilisobachka == 2)&&(poroda == 2)){
    poroda = "мопс"}
if ((kotikilisobachka == 2)&&(poroda == 3)){
    poroda = "корги"}
if ((kotikilisobachka == 2)&&(poroda == 4)){
    poroda = "хаски"}
// кличка собачки или котика?
if(kotikilisobachka == 1){
    klichka=prompt("как зовут вашего котика?")
}
else{
    klichka=prompt("как зовут вашу собачку?")
}
//год вашего котика или собачки
if(kotikilisobachka == 1){
    god=prompt("введите год рождения вашего котика")
}
else{
    god=prompt("введите год рождения вашей собачки")
}
//
if(kotikilisobachka == 1){
    chislo=prompt("введите полное число лет/годиков котика")
}
else{
    chislo=prompt("введите полное число лет/годиков собачки")
}
//котик или собачка?
if(kotikilisobachka == 1){
    kotikilisobachka = "котик" 
}
else{
    kotikilisobachka = "собачка" 
}
//объединение в строку
stroka = kotikilisobachka + ", " + poroda + ", " + klichka + ", " + god + ", " + chislo;
console.log(stroka)
//выбор
if(i==10){
vbl6or = confirm("Желаете продолжить?")
}
if (vbl6or == false){
alert("Желаем удачи!")
break
}
}
>>>>>>> 578a50238f5149a476ada46d7bb8fbd22b9a2a1b
