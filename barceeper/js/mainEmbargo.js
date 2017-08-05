
function startWork() {
  if(event.target.getAttribute('data-status') != "active") return;

  document.querySelector('.stopButton').classList.toggle('close');
  event.target.setAttribute('data-status','unactive');
  showStats();
}


function stopWork() {
  event.target.classList.toggle('close');
  document.querySelector('.startButton').setAttribute('data-status', 'active');

  setTimeout(function(){
    document.querySelector('.statButton').innerText = "stats";
    document.querySelector('.statButton').style.width="290px";
    document.querySelector('.statButton').style.height="130px";
    document.querySelector('.statButton').classList.toggle('buttons');
    document.querySelector('.statButton').classList.toggle('stats');
  }, 5000);
}


function showStats() {
  document.querySelector('.statButton').classList.remove('buttons');
  document.querySelector('.statButton').classList.add('stats');
  document.querySelector('.statButton').style.width="300px";
  document.querySelector('.statButton').style.height="300px";
  document.querySelector('.statButton').innerText = "";
}

document.querySelector('.startButton').onclick = startWork;
document.querySelector('.stopButton').onclick = stopWork;
document.querySelector('.statButton').onclick = showStats;
