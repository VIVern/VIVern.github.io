/*
регистрация пользователей
через добавления значение в харанее созданные переменный
*/

var log1="Федюкович", pass1="123";
var log2="", pass2="";
var log3="", pass3="";
var log4="", pass4="";
var log5="", pass5="";

function logCheck() {
  let checkLog=document.querySelectorAll("#logIn");
  let checkPas=document.querySelectorAll("#pass");

  if(checkLog[0].value == log1 && checkPas[0].value == pass1) {
    logCheckTrue();
  }
  else if(checkLog[0].value == log2 && checkPas[0].value == pass2) {
    logCheckTrue();
  }
  else if(checkLog[0].value == log3 && checkPas[0].value == pass3) {
    logCheckTrue();
  }
  else if(checkLog[0].value == log4 && checkPas[0].value == pass4) {
    logCheckTrue();
  }
  else if(checkLog[0].value == log5 && checkPas[0].value == pass5) {
    logCheckTrue();
  }
  else {
    document.querySelectorAll('.failLog')[0].classList.toggle("close");
  }
}

function logCheckTrue() {
  document.getElementsByTagName('form')[0].classList.add("hide");
  document.querySelectorAll('.failLog')[0].classList.add("hide");
  document.querySelectorAll('.enterButton')[0].classList.add('hide');
  document.querySelectorAll('.barCheck')[0].classList.remove('hide');
  document.getElementsByTagName('h1')[0].innerText = "Выберите бар";
}


document.querySelectorAll('.enterButton')[0].onclick=logCheck;
