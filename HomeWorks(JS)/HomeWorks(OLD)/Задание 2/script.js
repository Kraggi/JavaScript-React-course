'use strict';

const money = +prompt('Ваш бюджет на месяц?', '');
const time = prompt('Введите дату в формате YYYY-MM-DD', '');

const appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  saving: false,
};


for (let i = 0; i < 2; i++) {
  const a = prompt('Введите обязательную статью расходов в этом месяце', '');
  const b = prompt('Во сколько обойдется?', '');


  if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
    console.log('done');
    appData.expenses[a] = b;
  } else {
    alert('Ошибка!');
    i--;
  }
}

appData.moneyPerDay = appData.budget / 30;

alert(`Ежедневный бюджет: ${appData.moneyPerDay} рублей`);

if (appData.moneyPerDay < 100) {
  console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
  console.log('Высокий уровень достатка');
} else {
  console.log('Произошла ошибка!');
}

// Цикл While
// let i = 0;
// while (i < 2) {
//   const a = prompt('Введите обязательную статью расходов в этом месяце', '');
//   const b = prompt('Во сколько обойдется?', '');

//   if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
//     console.log('done');
//     appData.expenses[a] = b;
//   } else {
//     alert('Ошибка!');
//     i--;
//   }

//   i++;
// }



// Цикл do While
// let i = 0;

// do {
//   const a = prompt('Введите обязательную статью расходов в этом месяце', '');
//   const b = prompt('Во сколько обойдется?', '');

//   if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
//     console.log('done');
//     appData.expenses[a] = b;
//   } else {
//     alert('Ошибка!');
//     i--;
//   }

//   i++;
// } while (i < 2);