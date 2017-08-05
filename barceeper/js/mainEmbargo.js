
function startWork() {
  if(event.target.getAttribute('data-status') != "active") return;

  document.querySelector('.stopButton').classList.toggle('close');
  event.target.setAttribute('data-status','unactive');
}

document.querySelector('.startButton').onclick = startWork;


function stopWork() {
  event.target.classList.toggle('close');
  document.querySelector('.startButton').setAttribute('data-status', 'active');
}


document.querySelector('.stopButton').onclick = stopWork;
