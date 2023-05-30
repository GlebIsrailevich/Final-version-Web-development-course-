let usersList = [];
let banksList = [];
let allList = [];

// let ruClientsList = [];
// let fClientsList = [];
// let allList = [];

// let defaultRuClientsList 
let defaultRuClientsList  = [
  {
    id: 1,
    MyID: 1,
    fname:"Павлов Михаил Михайлович" ,
    DateB: "1986-12-15",
    Broker: "БКС",
    deposit: 59000,
    mail:"pavlove9@yandex.ru",
    currency:"RUB", 
    sumserv: 4000,
    age: 1,

   },
   {
    id: 2,
    MyID: 2,
    fname:"Лавочкин Семен Петрович" ,
    DateB: "2000-11-23",
    Broker: "Финам",
    deposit: 320000,
    mail:"Lavo4kin@gmail.com",
    currency:"CNY", 
    sumserv: 320000,
    age: 1,
   },
   {
    id: 3,
    MyID: 3,
    fname:"Панкратов Николай Максимович" ,
    DateB: "2002-08-18",
    Broker: "Тинькофф",
    deposit: 72123,
    mail:"NicolPank123@yandex.ru",
    currency:"RUB",
    sumserv: 8000,
    age: 1,
   },
   {
    id: 4,
    MyID: 4,
    fname:"Виноградов Константин Александрович" ,
    DateB: "2001-06-29",
    Broker: "Финам",
    deposit:91801 ,
    mail:"Grapeman88@gmail.com",
    currency:"RUB",
    sumserv: 62300,
    age: 1,
   },
   {
    id: 5,
    MyID: 5,
    fname:"Грушев Олег Павлович" ,
    DateB: "1989-05-15",
    Broker: "БКС",
    deposit: 700500,
    mail:"SharkOfWS@gmail.com",
    currency:"RUB",
    sumserv: 12000,
    age: 1,
   },
   {
    id: 6,
    MyID: 6,
    fname:"Цветкова Ольга Васильевна" ,
    DateB: "1981-01-08",
    Broker: "Тинькофф",
    deposit: 520194,
    mail:"Tsventkova_Ol@yandex.ru",
    currency:"RUB",
    sumserv: 0,
    age: 1,
   },
   {
    id: 7,
    MyID: 7,
    fname:"Николаева Екатерина Сергеевна" ,
    DateB: "1997-02-12",
    Broker: "БКС",
    deposit: 45670,
    mail:"KateNicol97@mail.ru",
    currency:"RUB",
    sumserv: 0,
    age: 1,
   },
   {
    id: 8,
    MyID: 8,
    fname:"Сергеев Иван Иванович" ,
    DateB: "1999-03-29",
    Broker: "Финам",
    deposit:182453 ,
    mail:"SergeevIvIv99@yandex.ru",
    currency:"RUB",
    sumserv: 90000,
    age: 1,
   },
   {
    id: 9,
    MyID: 9,
    fname:"Беседина Элина Семёновна" ,
    DateB: "1995-03-12",
    Broker: "БКС",
    deposit: 421390,
    mail:"BesedinaElInvest@gmail.com",
    currency:"RUB",
    sumserv: 120000,
    age: 1,
   },];

// let defaultfClientsList 
let defaultfClientsList = [
  {
    id: 1,
    MyID: 1,
    fname:"John Konapungu" ,
    DateB: "1995-03-12",
    Broker: "Credit Suisse",
    deposit: 150000,
    mail:"Konapungu@gmail.com", 
    currency:"ZAR",
    sumserv: 145000,
    age: 2,

  },
  {
    id: 2,
    MyID: 2,
    fname:"Emmanuel Deshamp" ,
    DateB: "1993-05-29",
    Broker: "Societe Generale",
    deposit:30000 ,
    mail:"deshamp@mail.ru",
    currency:"CNY",
    sumserv: 30000, 
    age: 2,

  },
  {
    id: 3,
    MyID: 3,
    fname:"Max Lang" ,
    DateB: "1986-12-15",
    Broker: "Credit Suisse",
    deposit:130000 ,
    mail:"Lang@gmail.com",
    currency:"CNY", 
    sumserv: 100000,
    age: 2,

  },
  {
    id: 4,
    MyID: 4,
    fname:"John Dow" ,
    DateB: "2000-11-23",
    Broker: "JPMorgan",
    deposit: 80019,
    mail:"dow@mail.ru",
    currency:"CNY",
    sumserv: 80000, 
    age: 2,

  },
  {
    id: 5,
    MyID: 5,
    fname:"Karl Janvier" ,
    DateB: "2002-08-18",
    Broker: "JPMorgan",
    deposit:204200 ,
    mail:"janvier@gmail.com", 
    currency:"CNY",
    sumserv: 200080,
    age: 2,

  },
  {
    id: 6,
    MyID: 6,
    fname:"Didie Clement" ,
    DateB: "1997-05-12",
    Broker: "Credit Suisse",
    deposit:150000 ,
    mail:"clement@gmail.com",
    currency:"ZAR",
    sumserv: 150000, 
    age: 2,

  },
  {
    id: 7,
    MyID: 7,
    fname:"Jack Morell" ,
    DateB: "2001-06-29",
    Broker: "Societe Generale",
    deposit:120000 ,
    mail:"Morell@gmail.com", 
    currency:"RSB",
    sumserv: 95000,
    age: 2,
  },
  {  
    id: 8,
    MyID: 8,
    fname:"Patrick McDonald",
    DateB: "1989-05-15",
    Broker: "JPMorgan",
    deposit: 78001,
    mail:"komis@mail.ru", 
    currency:"RSB",
    sumserv: 78001,
    age: 2,

  },
  {
    id: 9,
    MyID: 9,
    fname:"Sadik Khan" ,
    DateB: "1999-03-29",
    Broker: "Societe Generale",
    deposit:120000 ,
    mail:"SadikKhan@gmail.com", 
    currency:"ZAR",
    sumserv: 60000,
    age: 2,
  },];

let allArrays = [];

function saveAllDataToLocalStorage(arrayT) {
  const arrayString = JSON.stringify(arrayT);
  window.localStorage.setItem("allData", arrayString);
}

function getAllDataFromLocalStorage() {
  const valueT = window.localStorage.getItem("allData");
  let result = JSON.parse(valueT);

  if (result === null) {
    result = allList;
  }
  return result;
}

let selectedRowId;

function saveUsersListToLocalStorage(array) {
  const arrayString = JSON.stringify(array);
  window.localStorage.setItem("users", arrayString);
}
// Im consused because of the usrrs
function getUsersListFromLocalStorage() {
  const value = window.localStorage.getItem("users");
  let result = JSON.parse(value);

  if (result === null) {
    result = defaultfClientsList;
  }
  return result;
}
//  banks
function saveBanksToLocalStorage(arr) {
  const arrString = JSON.stringify(arr);
  window.localStorage.setItem("banks", arrString);
}

function getBanksListFromLocalStorage() {
  const valueBanks = window.localStorage.getItem("banks");
  let resultBanks = JSON.parse(valueBanks);

  if (resultBanks === null) {
    resultBanks = defaultRuClientsList;
  }
  return resultBanks;
}

function addRows() {
  usersList.forEach((item) => {
    addRow(item);
  });
}
function addRowsServ() {
  banksList.forEach((item) => {
    addRow(item);
  });
}

function addRowsTable() {
  allList.forEach((item) => {
    addRow(item);
  });
}

function addRow(userData) {
  const idEl = document.createElement("td");
  idEl.innerText = userData?.id;

  const idElT = document.createElement("td");
  idElT.innerText = userData?.id;

  const fnameEl = document.createElement("td");
  fnameEl.innerText = userData?.fname;

  const DateBEL = document.createElement("td");
  DateBEL.innerText = userData?.DateB;

  const BrokerEL = document.createElement("td");
  BrokerEL.innerText = userData?.Broker;

  const fnameElT = document.createElement("td");
  fnameElT.innerText = userData?.fname;

  const DateBELT = document.createElement("td");
  DateBELT.innerText = userData?.DateB;

  const BrokerELT = document.createElement("td");
  BrokerELT.innerText = userData?.Broker;

  const depositEL = document.createElement("td");
  depositEL.innerText = userData?.deposit;

  const mailEL = document.createElement("td");
  mailEL.innerText = userData?.mail;

  const mailELT = document.createElement("td");
  mailELT.innerText = userData?.mail;

  const depositELT = document.createElement("td");
  depositELT.innerText = userData?.deposit;
// Change, There is another table 
  const currencyEL= document.createElement("td");
  currencyEL.innerText = userData?.currency;

  const sumservEl = document.createElement("td");
  sumservEl.innerText = userData?.sumserv;

  const currencyELT = document.createElement("td");
  currencyELT.innerText = userData?.currency;

  const sumservElT = document.createElement("td");
  sumservElT.innerText = userData?.sumserv;

  const ageEl = document.createElement("td");
  ageEl.innerText = userData?.age;
  ageEl.classList.add("user-age");

  const ageElT = document.createElement("td");
  ageElT.innerText = userData?.age;
  ageElT.classList.add("user-age");

  const actionEl = document.createElement("td");
  const editEl = document.createElement("div");
  editEl.innerText = "Редактировать";
  editEl.classList.add("table-btn", "edit-btn");
  editEl.onclick = function () {
    updateForm(userData);
  };

  const removeEl = document.createElement("div");
  removeEl.innerText = "Удалить";
  removeEl.classList.add("table-btn", "remove-btn");
  removeEl.onclick = function () {
    removeRowFromTable(userData);
  };
  actionEl.append(editEl, removeEl);

  const actionElT = document.createElement("td");
  const editElT = document.createElement("div");
  editElT.innerText = "Редактировать";
  editElT.classList.add("table-btn", "edit-btn");
  editElT.onclick = function () {
    updateForm(userData);
  };
  const removeElT = document.createElement("div");
  removeElT.innerText = "Удалить";
  removeElT.classList.add("table-btn", "remove-btn");
  removeElT.onclick = function () {
    noRemove(userData);
  };
  actionElT.append(editElT, removeElT);

  const row = document.createElement("tr");
  row.setAttribute("id", userData?.id + "-row");
  row.classList.add("data-row");
  row.append(
    idEl,
    fnameEl,
    DateBEL,
    BrokerEL,
    depositEL,
    mailEL,
    ageEl,
    currencyEL,
    sumservEl,
    actionEl
  );
  $(".table").append(row);

  const rowT = document.createElement("tr");
  rowT.setAttribute("id", userData?.id + "-row");
  rowT.classList.add("data-row");
  rowT.append(
    idElT,
    fnameElT,
    DateBELT,
    BrokerELT,
    depositELT,
    mailELT,
    ageElT,
    currencyELT,
    sumservElT,
    actionElT
  );

  $(".table__sec").append(rowT);
}

function noRemove(userData) {
  result = alert("Удаление невозможно по причине связи с депозитарием");
}

function removeRowFromTable(userData) {
  result = confirm("Вы действительно хотите удалить запись?");
  if (result) {
    usersList = usersList.filter((item) => item.id !== userData.id);
    saveUsersListToLocalStorage(usersList);
    removeRow(userData);
  }
}

function removeRow(userData) {
  $("#" + userData?.id + "-row").remove();
}

function addUser(data) {
  if ($("#age").val() === "1") {
    // data.id = getRandomIntInclusive(0, 1000);
    banksList.push(data);
    allList.push(data);
    saveBanksToLocalStorage(banksList);
    saveAllDataToLocalStorage(allList);
    addRow(data);
  } else if ($("#age").val() === "2") {
    // data.id = getRandomIntInclusive(0, 1000);
    usersList.push(data);
    allList.push(data);
    saveUsersListToLocalStorage(usersList);
    saveAllDataToLocalStorage(allList);
    addRow(data);
  } else {
    allList.push(data);
    saveAllDataToLocalStorage(allList);
    addRow(data);
  }
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function clearForm() {
  $("#fname").val(function () {
    return "";
  });
  $("#DateB").val(function () {
    return "";
  });
  $("#deposit").val(function () {
    return "";
  });
  $("#mail").val(function () {
    return "";
  });
  $("#currency").val(function () {
    return "";
  });
  $("#sumserv").val(function () {
    return "";
  });
}

function clearRows() {
  $(".data-row").remove();
}

//____________________________________________________________________________________________________________________________________

function updateForm(userData) {
  returnAddBtn();
  selectedRowId = userData?.id;
  // с помощью метода children мы получаем дочерние элемента (ячейки таблицы) строки с id '{n}-row'
  // Меняем здесь
  const cells = $("#" + selectedRowId + "-row").children();
  $("#fname").val(function () {
    return cells[1].innerText;
  });
  $("#DateB").val(function () {
    return cells[2].innerText;
  });
  $("#Broker").val(function () {
    return cells[3].innerText;
  });
  $("#deposit").val(function () {
    return cells[4].innerText;
  });
  $("#mail").val(function () {
    return cells[5].innerText;
  });
  $("#age").val(function () {
    return cells[6].innerText;
  });
  $("#currency").val(function () {
    return cells[7].innerText;
  });
  $("#sumserv").val(function () {
    return cells[8].innerText;
  });

  // изменение текста кнопки "Добавить" на "Изменить"

  $(".submit-btn").val(function () {
    return "Изменить";
  });

  // добавление новой кнопки для отмены
  const cancelEl = document.createElement("input");
  cancelEl.classList.add("submit-btn", "submit-btn-red");
  cancelEl.setAttribute("type", "button");
  cancelEl.setAttribute("value", "Отменить");
  cancelEl.onclick = function () {
    returnAddBtn();
  };
  $(".submit-btn-wrapper").append(cancelEl);
}

// изменение записи в массиве
function updateUser(data) {
  data.id = selectedRowId;

  // We check if the modification 
  const checkIfElInSberList = banksList.find(el => el.id === data.id)
  // We check if the modification
  const checkIfElInVTBList = usersList.find(el => el.id === data.id)

  if (Boolean(checkIfElInSberList)) { // if it's true then we remove the founded item from SberList
    banksList = banksList.filter((item) => item.id !== data.id);

    // We verify if the user has change the age or not
    if (checkIfElInSberList.age.toString() !== data.age.toString()) {
      usersList = [...usersList, data]
    } else {
      banksList = [...banksList, data]
    }
  }

  if (Boolean(checkIfElInVTBList)) { // if it's true then we remove the founded item from VTBList
    usersList = usersList.filter((item) => item.id !== data.id);

    // We verify if the user has change the age or not
    if (checkIfElInVTBList.age.toString() !== data.age.toString()) {
      banksList = [...banksList, data]
    } else {
      usersList = [...usersList, data]
    }
  }

  function sort(array) { // function to sort the list of User by id
    const arraySorted = array.sort((a,b) => a.id - b.id);
    return arraySorted
  }

  saveBanksToLocalStorage(sort(banksList));
  saveUsersListToLocalStorage(sort(usersList));

  updateRow(userData);
  returnAddBtn();
}

// изменение данных в строке
function updateRow(userData) {
  const cells = $("#" + selectedRowId + "-row").children();
  cells[1].innerText = userData.fname;
  cells[2].innerText = userData.DateB;
  cells[3].innerText = userData.Broker;
  cells[4].innerText = userData.deposit;
  cells[5].innerText = userData.mail;
  cells[6].innerText = userData.age;
  cells[7].innerText = userData.currency;
  cells[8].innerText = userData.sumserv;
}

// удаление кнопки "Отмена" и изменение кнопки "Изменить" на кнопку "Добавить"
function returnAddBtn() {
  clearForm();
  $(".submit-btn-red").remove();
  $(".submit-btn").val(function () {
    return "Добавить";
  });
  selectedRowId = null;
}

$(document).ready(function () {
  usersList = getUsersListFromLocalStorage();
  banksList = getBanksListFromLocalStorage();
  allList = [...usersList, ...banksList];
  addRowsTable();
  $("#banks").change(clearRows);
  $("#banks").change(clearForm);
  $("#banks").on("change", function () {
    if ($(this).val() === "1") {
      addRowsServ(defaultRuClientsList);
    } else if ($(this).val() === "2") {
      addRows(defaultfClientsList);
    } else if ($(this).val() === "0") {
      addRowsTable(defaultfClientsList, defaultRuClientsList);
    }
  });

  $("#addUserForm").submit(function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const value = $("#submitBtn").val();
    if (value === "Добавить") {
      data.id = getRandomIntInclusive(0, 1000);
      addUser(data);
    } else if (value === "Изменить") {
      updateUser(data);
    }
    clearForm();
    return false;
  });
});
