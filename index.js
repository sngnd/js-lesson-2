/// выведите четные числа
for (let i = 2; i < 11; i++) {
    if (i % 2 != 0) continue;
    console.log(i);
}

/// замените for на while
let k = 0;
while (k < 3) {
    console.log(`number ${k}!`);
    k++;
}

/// Повторять цикл, пока ввод неверен
// let num;
// do {
//     num = prompt("Enter number > 100");
// } while (num && num <= 100);

/// вывести простые числа
let n = prompt("Enter n");
let isPrime;
for (let i = 2; i <= n; i++) {
    isPrime = true;
    for (let j = 2; j <= i ** 0.5; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(i);
}

/// Напишите "if", аналогичный "switch"

let browser;
if (browser === "Edge") alert("You've got the Edge!");
else if (
    browser === "Firefox" ||
    browser === "Safari" ||
    browser === "Opera" ||
    browser === "Chrome"
)
    alert("Ok, we support you too!");
else "We hope that this pag looks ok!";

/// Переписать условия "if" на "switch"
const number = +prompt("Enter number from 1 to 3");
switch (number) {
    case 0:
        alert("You entered 0");
        break;
    case 1:
        alert("You entered 1");
        break;
    case 2:
    case 3:
        alert("You entered 2 or maybe 3");
        break;
}

/// Перепишите функцию, используя оператор '?' или '||'
function checkAge(age) {
    return age > 18 ? true : confirm("Родители разрешили?");
}

function checkAge(age) {
    return age > 18 || confirm("Родители разрешили?");
}

/// Функция min(a, b)
function min(a, b) {
    return a < b ? a : b;
}

/// Функция pow(x,n)
function pow(x, n) {
    return x ** n;
}

let x = prompt("Enter x");
let n;
do {
    n = +prompt("Enter n");
} while (n < 1 || !Number.isInteger(n));
alert(pow(x, n));

/// Перепишите с использованием функции-стрелки
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
}

ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
);