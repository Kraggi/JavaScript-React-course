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