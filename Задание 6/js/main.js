'use strict';

let btnStart = document.getElementById('start');
let budgetValue = document.querySelector('.budget-value');
let daybudgetValue = document.querySelector('.daybudget-value');
let levelValue = document.querySelector('.level-value');
let expensesValue = document.querySelector('.expenses-value');
let optionalexpensesValue = document.querySelector('.optionalexpenses-value');
let incomeValue = document.querySelector('.income-value');
let monthsavingsValue = document.querySelector('.monthsavings-value');
let yearsavingsValue = document.querySelector('.yearsavings-value');

let expensesItem = document.querySelectorAll('.expenses-item');
let expensesBtn = document.querySelectorAll('button')[0];
let optionalExpensesBtn = document.querySelectorAll('button')[1];
let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');
let countBtn = document.getElementsByTagName('button')[2];
let incomeItem = document.querySelector('.choose-income');
let checkSavings = document.querySelector('#savings');
let sumValue = document.querySelector('.choose-sum');
let percentValue = document.querySelector('.choose-percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');


let money;
let time;

expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;

btnStart.addEventListener('click', function () {
  time = prompt('Введите дату в формате YYYY-MM-DD', '');
  money = +prompt('Ваш бюджет на месяц?', '');

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?', '');
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();

  expensesBtn.disabled = false;
  optionalExpensesBtn.disabled = false;
  countBtn.disabled = false;
});

expensesBtn.addEventListener('click', function () {
  let sum = 0;
  for (let i = 0; i < expensesItem.length; i++) {
    const a = expensesItem[i].value;
    const b = expensesItem[++i].value;


    if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
      appData.expenses[a] = b;
      sum += +b;
    } else {
      i--;
    }
  }
  expensesValue.textContent = sum;
});


optionalExpensesBtn.addEventListener('click', function () {
  for (let i = 0; i < optionalExpensesItem.length; i++) {
    const opt = optionalExpensesItem[i].value;
    appData.optionalExpenses[i] = opt;
    optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
  }
});

countBtn.addEventListener('click', function () {


  if (appData.budget != undefined) {
    appData.moneyPerDay = ((appData.budget - expensesValue.textContent) / 30).toFixed();
    daybudgetValue.textContent = appData.moneyPerDay;
    if (appData.moneyPerDay < 100) {
      levelValue.textContent = 'Минимальный уровень достатка';
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = 'Средний уровень достатка';
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = 'Высокий уровень достатка';
    } else {
      levelValue.textContent = 'Произошла ошибка!';
    }
  } else {
    daybudgetValue.textContent = 'Произошла ошибка!';
  }
});


incomeItem.addEventListener('input', function () {
  let items = incomeItem.value;
  appData.income = items.split(',');
  incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

sumValue.addEventListener('input', function () {
  if (appData.savings == true) {
    let sum = +sumValue.value;
    let percent = +percentValue.value;

    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

percentValue.addEventListener('input', function () {
  if (appData.savings == true) {
    let sum = +sumValue.value;
    let percent = +percentValue.value;

    appData.monthIncome = sum / 100 / 12 * percent;
    appData.yearIncome = sum / 100 * percent;

    monthsavingsValue.textContent = appData.monthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

const appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false
};