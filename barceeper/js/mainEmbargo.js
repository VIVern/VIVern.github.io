
let a=document.getElementById('start');
console.log(a[0]);


function startWork() {
  if( document.getElementById('start')[0].style.background == "green" ) {
    end.classList.toggle(hide);
    start.style.background == "rgb(6,61,3)";
  }
}

console.log(start.style.background)
start.onclick=startWork;
