'use strict';

let money;
let time;

// Вопросы о бюджете и дате
function start() {
  money = +prompt('Ваш бюджет на месяц?', '');
  time = prompt('Введите дату в формате YYYY-MM-DD', '');

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }
}
start();



const appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  saving: true,
};

// Запрос обязательных затрат
function chooseExpenses() {
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
}

chooseExpenses();

// Запрос необязательных затрат
function chooseOptionalExpenses() {
  for (let i = 0; i < 3; i++) {
    const a = prompt('Введите необязательную статью расходов в этом месяце', '');
    const b = prompt('Во сколько обойдется?', '');


    if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
      console.log('done');
      appData.optionalExpenses[a] = b;
    } else {
      alert('Ошибка!');
      i--;
    }
  }
}
chooseOptionalExpenses();

// Бюджет на день
function detectDayBudget() {
  appData.moneyPerDay = (appData.budget / 30).toFixed();

  alert(`Ежедневный бюджет: ${appData.moneyPerDay} рублей`);
}
detectDayBudget();

// Уровень достатка
function detectLevel() {
  if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
  } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Средний уровень достатка');
  } else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
  } else {
    console.log('Произошла ошибка!');
  }
}
detectLevel();



function checkSavings() {
  if (appData.saving == true) {
    let save = +prompt('Какова сумма накоплений?');
    let percent = +prompt('Под какой процент?');

    appData.monthIncome = save / 100 / 12 * percent;
    alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);
  }
}
checkSavings();