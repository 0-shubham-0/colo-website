let dates = document.querySelectorAll(".date");
let rows = document.querySelectorAll(".row");
dates.forEach(n => n.addEventListener("click", ClickHandler));

function ClickHandler(){
    dates.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
}