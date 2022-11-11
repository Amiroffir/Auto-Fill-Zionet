// get into a website and add values to a form

const collection = document.getElementsByTagName("input");
let myName = collection[0].value;
collection[0].style.backgroundColor = "lightgreen";
let myEmail = collection[1].value;
collection[1].style.backgroundColor = "lightgreen";
let myPhone = collection[2].value;
collection[2].style.backgroundColor = "lightgreen";
collection[3].style.backgroundColor = "red";
collection[4].value = "Haim/Elias";
collection[4].style.backgroundColor = "lightgreen";
collection[5].checked = true;
collection[7].style.backgroundColor = "red";

collection[3].onkeypress = () => {
  collection[3].style.backgroundColor = "lightgreen";
};
collection[7].onkeypress = () => {
  collection[7].style.backgroundColor = "lightgreen";
};
