
let dates = document.querySelectorAll(".date");
let rows = document.querySelectorAll(".eventList");
dates.forEach(n => n.addEventListener("click", ClickHandler));

function ClickHandler(){
    dates.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
    let filter = this.getAttribute('data-filter');
    rows.forEach(row => {
        row.classList.add('hide');
        row.classList.remove('active');
        if(row.getAttribute('data-item')== filter|| filter=="All"){
            row.classList.add('active'); 
            row.classList.remove('hide'); 
        }
    });
}

var allRadios = document.getElementsByName('toggle');
        var booRadio;
        var x = 0;
        for(x = 0; x < allRadios.length; x++){

            allRadios[x].onclick = function() {
                if(booRadio == this){
                    this.checked = false;
                    booRadio = null;
                }else{
                    booRadio = this;
                }
            };
        }
