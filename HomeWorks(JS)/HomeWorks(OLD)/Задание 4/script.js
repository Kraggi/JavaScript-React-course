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
  chooseExpenses: function () { // Запрос обязательных затрат
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
  },
  detectDayBudget: function () { // Бюджет на день
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert(`Ежедневный бюджет: ${appData.moneyPerDay} рублей`);
  },
  detectLevel: function () { // Уровень достатка
    if (appData.moneyPerDay < 100) {
      console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
      console.log('Высокий уровень достатка');
    } else {
      console.log('Произошла ошибка!');
    }
  },
  checkSavings: function () { //Ежемесячный доход с депозита
    if (appData.saving == true) {
      let save = +prompt('Какова сумма накоплений?');
      let percent = +prompt('Под какой процент?');

      appData.monthIncome = save / 100 / 12 * percent;
      alert(`Доход в месяц с вашего депозита: ${appData.monthIncome}`);
    }
  },
  chooseOptExpenses: function () { //Запрос необязательных затрат
    for (let i = 0; i < 3; i++) {
      const opt = prompt('Введите необязательную статью расходов в этом месяце', '');
      appData.optionalExpenses[i] = opt;
    }
  },
  chooseIncome: function () {

    let items = prompt('Что принесёт дополнительный доход?(Перечислите через запятую)', '');

    if (typeof items !== 'string' || typeof items == null || items == '') {
      console.log("Вы ввели некорректные данные или не ввели их вовсе");
    } else {
      appData.income = items.split(', ');
      appData.income.push(prompt('Не забыли ли вы что-то ещё?'));
      appData.income.sort();
    }
    appData.income.forEach(function (item, i) {
      console.log(`Способы доп. заработка: ${i+1}-${item}`);
    });
  }
};


for (let key in appData) {
  console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}