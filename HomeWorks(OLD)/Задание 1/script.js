'use strict';

const money = prompt('Ваш бюджет на месяц?', '');
const time = prompt('Введите дату в формате YYYY-MM-DD', '');

const appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  saving: false,
};

const answer1 = prompt('Введите обязательную статью расходов в этом месяце', '');
const answer2 = prompt('Во сколько обойдется?', '');

const answer3 = prompt('Введите обязательную статью расходов в этом месяце', '');
const answer4 = prompt('Во сколько обойдется?', '');

appData.expenses.answer1 = answer2;
appData.expenses.answer3 = answer4;

alert(appData.budget / 30);