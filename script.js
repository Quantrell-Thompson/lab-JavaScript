document.body.onload = initPage;

function initPage() {
  changeValue();
  initZad2();
}

let containerMain = document.querySelector(".container");

let containerZad1 = containerMain.querySelector(".zad1");

let indexZad1 = 0;

const TABLE_MNOG_ZAD1 = [
  {
    a: 2,
    b: 2,
    otvet: [1, 2, 3, 4],
    result: 0,
  },
  {
    a: 3,
    b: 2,
    otvet: [5, 6, 3, 4],
    result: 0,
  },
  {
    a: 5,
    b: 5,
    otvet: [25, 22, 23, 24],
    result: 0,
  },
  {
    a: 6,
    b: 4,
    otvet: [25, 22, 23, 24],
    result: 0,
  },
  {
    a: 6,
    b: 6,
    otvet: [36, 35, 33, 34],
    result: 0,
  },
];

function getAnswerZad1() {
  let radioButtons = containerZad1.querySelectorAll(".radioButton");

  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked)
      TABLE_MNOG_ZAD1[indexZad1].result = +radioButtons[i].value;
  }
}

function nextQuestion() {
  getAnswerZad1();

  if (indexZad1 === TABLE_MNOG_ZAD1.length - 2) {
    let but = containerZad1.querySelector("#next_question_zad1");
    but.disabled = true;
  }

  indexZad1++;
  changeValue();
}

function changeValue() {
  let taskZad1 = containerZad1.querySelector(".task_zad1");
  let radioButtons = containerZad1.querySelectorAll(".radioButton");
  let labelsRadioButtons = containerZad1.querySelectorAll("#labelRadioButton");

  taskZad1.innerHTML = `${TABLE_MNOG_ZAD1[indexZad1].a} * ${TABLE_MNOG_ZAD1[indexZad1].b}`;
  for (let i = 0; i < radioButtons.length; i++) {
    radioButtons[i].checked = false;
    radioButtons[i].value = TABLE_MNOG_ZAD1[indexZad1].otvet[i];
    labelsRadioButtons[i].innerHTML = TABLE_MNOG_ZAD1[indexZad1].otvet[i];
  }
}

function finishZad1() {
  getAnswerZad1();

  let correctAnswers = 0;

  TABLE_MNOG_ZAD1.map(({ a, b, result }) => {
    if (a * b === result) correctAnswers++;
  });

  alert(`Правильних відповідей: ${correctAnswers}`);
}

///////////////////////////////////////////////////////

let containerZad2 = containerMain.querySelector(".zad2");
let but_next_zad2 = containerMain.querySelector(".but_next_question_zad2");
let fieldZad2 = containerMain.querySelector(".field_answer_zad2");
let currentAnswer = containerZad2.querySelector(".current_answer_zad2");

let indexZad2 = 0;

function getRandom() {
  return Math.floor(Math.random() * 10);
}

const TABLE_MNOG_ZAD2 = [
  {
    a: getRandom(),
    b: getRandom(),
    result: 0,
  },
  {
    a: getRandom(),
    b: getRandom(),
    result: 0,
  },
  {
    a: getRandom(),
    b: getRandom(),
    result: 0,
  },
  {
    a: getRandom(),
    b: getRandom(),
    result: 0,
  },
  {
    a: getRandom(),
    b: getRandom(),
    result: 0,
  },
  {
    a: getRandom(),
    b: getRandom(),
    result: 0,
  },
  {
    a: getRandom(),
    b: getRandom(),
    result: 0,
  },
];

function initZad2() {
  let taskZad2 = containerZad2.querySelector(".task_zad2");

  taskZad2.innerHTML = `${TABLE_MNOG_ZAD2[indexZad2].a} * ${TABLE_MNOG_ZAD2[indexZad2].b} = `;
  fieldZad2.value = "";
  currentAnswer.innerHTML = "  ";
}

function getAnswerZad2() {
  TABLE_MNOG_ZAD2[indexZad2].result = +fieldZad2.value;
}

function getCurrentAnswer() {
  currentAnswer.innerHTML = `Правильна відповідь: ${
    TABLE_MNOG_ZAD2[indexZad2].a * TABLE_MNOG_ZAD2[indexZad2].b
  }`;
}

function next_question_zad2() {
  if (indexZad2 >= TABLE_MNOG_ZAD2.length - 1) {
    finishZad2();
  }

  getAnswerZad2();
  indexZad2++;

  console.log(indexZad2, TABLE_MNOG_ZAD2.length);
  initZad2();
}

function finishZad2() {
  getAnswerZad2();
  let currentAnswer = containerZad2.querySelector(".result_zad2");

  but_next_zad2.disabled = true;

  let correctAnswers = 0;

  TABLE_MNOG_ZAD2.map(({ a, b, result }) => {
    if (a * b === result) correctAnswers++;
  });

  currentAnswer.innerHTML = `Правильних відповідей ${correctAnswers} з ${TABLE_MNOG_ZAD2.length}`;
}

///////////////////////////////////////////////////////

let containerZad3 = containerMain.querySelector(".zad3");
let checkboxs3 = containerZad3.querySelectorAll("#checkbox_zad3");
let active_text_3 = containerZad3.querySelector(".active_checkbox_zad3");

function clickZad3() {
  active_text_3.innerHTML = "";

  checkboxs3.forEach((elem) => {
    if (elem.checked) active_text_3.innerHTML += elem.value + ", ";
  });
}

///////////////////////////////////////////////////////
let containerZad4 = containerMain.querySelector(".zad4");
let checkboxs4 = containerZad4.querySelectorAll("#checkbox_zad4");
let active_text_4 = containerZad4.querySelector(".active_checkbox_zad4");

checkboxs4.forEach((elem) => elem.addEventListener("click", changeCheckedZad4));

function changeCheckedZad4() {
  active_text_4.innerHTML = "";

  checkboxs4.forEach((elem) => {
    if (elem.checked) active_text_4.innerHTML += elem.value + "; ";
  });
}

///////////////////////////////////////////////////////
let containerZad5 = containerMain.querySelector(".zad5");
let inputs = containerZad5.querySelectorAll(".input_table_zad5");
let table_sum = containerZad5.querySelector(".statistic_suma");
let table_ser = containerZad5.querySelector(".statistic_sered");
let table_min = containerZad5.querySelector(".statistic_min");
let table_max = containerZad5.querySelector(".statistic_max");

function calculate() {
  let suma = 0;
  let seredne = 0;
  let min = 1000;
  let max = 0;

  console.log(inputs);

  inputs.forEach(({ value }) => {
    value = +value;

    suma += value;

    if (min > value) min = value;

    if (max < value) max = value;
  });

  if (suma > 0) seredne = suma / inputs.length;

  console.log(seredne);

  table_sum.innerHTML = suma;
  table_ser.innerHTML = seredne;
  table_min.innerHTML = min;
  table_max.innerHTML = max;
}

///////////////////////////////////////////////////////
let containerZad6 = containerMain.querySelector(".zad6");
let containerConZad6 = containerZad6.querySelector(".zad6_container");
let col = containerZad6.querySelector(".zad6_col");
let row = containerZad6.querySelector(".zad6_row");

function createTable() {
  while (containerConZad6.firstChild) {
    containerConZad6.removeChild(containerConZad6.firstChild);
  }
  for (let i = 0; i < col.value; i++) {
    let paramDiv = document.createElement("div");
    for (let j = 0; j < row.value; j++) {
      createElementZad6(paramDiv);
    }
    containerConZad6.appendChild(paramDiv);
  }
}

function createElementZad6(param) {
  let div = document.createElement("div");
  div.classList.add("zad6_item");
  div.addEventListener("click", (e) => toggleClass(e));
  param.appendChild(div);
}

function toggleClass(e) {
  e.path[0].classList.toggle("active");
}

let z = containerConZad6.querySelectorAll(".zad6_item");

///////////////////////////////////////////////////////
let runButton = document.querySelector(".run_button");

runButton.addEventListener("mousemove", () => {
  runButton.style.top = `${Math.floor(Math.random() * 300)}px`;
  runButton.style.left = `${Math.floor(Math.random() * (500 - 100) + 100)}px`;
});
