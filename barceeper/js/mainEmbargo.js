
function startWork() {
  if(event.target.getAttribute('data-status') != "active") return;

  document.querySelector('.stopButton').classList.toggle('close');
  event.target.setAttribute('data-status','unactive');
  showStats();
}


function stopWork() {
  event.target.classList.toggle('close');
  document.querySelector('.startButton').setAttribute('data-status', 'active');
}


function showStats() {
  if(event.target != document.querySelector('.statButton') && event.target != document.querySelector('.startButton')) return;
  document.querySelector('.statButton').classList.remove('buttons');
  document.querySelector('.statButton').classList.remove('stButHover');
  document.querySelector('.statButton').classList.add('stats');
  document.querySelector('.statButton').style.width="320px";
  document.querySelector('.statButton').style.height="300px";
  setTimeout(function(){
    document.querySelector('.statContainer').classList.remove('hide');
  }, 500)
}

function closeStats() {
  document.querySelector('.statContainer').classList.add('hide');
  document.querySelector('.statButton').style.width="290px";
  document.querySelector('.statButton').style.height="130px";
  document.querySelector('.statButton').classList.remove('stats');
  document.querySelector('.statButton').classList.add('buttons');
  setTimeout (function(){
    document.querySelector('.statButton').classList.add('stButHover');
  }, 1000);
}


document.querySelector('.closeStat').onclick = closeStats;
document.querySelector('.startButton').onclick = startWork;
document.querySelector('.stopButton').onclick = stopWork;
document.querySelector('.statButton').onclick = showStats;
