'use strict'
// Задание  1 (конвертер температуры цельсий-фаренгейт)
let temperCelc = +prompt("Введите температура по Цельсию");
let temperFahren = ((9 / 5) * temperCelc) + 32;
alert("Температура по Фарегейту будет " + temperFahren);
// Задание 2
let admin;
let name = "Василий";
admin = name;
console.log(admin);
// Задание 3 Объяснить почему ?
/*
1. к числу 10 прибавляем число 10 получаем 20
2. число 20 конкатенирует со строкой 10 и получаем "2010"
3. присваиваем строку "2010" в переменную result
4. с помощью console.log выводим в консоль 
*/
let result = 10 + 10 + "10";
console.log(result);
/*
1. число 10 конкатенирует со строкой 10 получаем строку "1010"
2. строка "1010" конкатенирует с числом 10 получаем  строку "101010"
3. присваиваем строку "101010" в переменную result
4. с помощью console.log выводим в консоль
*/
result = 10 + "10" + 10;
console.log(result);

/*
1. к числу 10 прибавляем число 10 получаем 20
2. с помощью знака "+" меняем тип данных у строки "10" и получаем число 10
3. к числу 20 прибавляем число 10 получаем 30
4. присваиваем число 30 в переменную result
5. с помощью console.log выводим в консоль
*/
result = 10 + 10 + +"10";
console.log(result);


/*
1. пустая строка  -"" преврашается в -0
2. при делении числа 10 на  число -0 получаем - бесконечность
3. присваиваем - бесконечность в переменную result
4. с помощью console.log выводим в консоль
*/
result = 10 / -"";
console.log(result);
/*
1. строка +"2,5" преврашается в NaN т.к. для дробных значение должна ставится знак точки вместо запятой
2. при делении числа 10 на NaN получаем NaN
3. присваиваем NaN в переменную result
4. с помощью console.log выводим в консоль
*/
10 / +"2,5";
console.log(result);