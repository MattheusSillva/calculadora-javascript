let display = window.document.getElementById("display");

function insert(n){
    display.innerHTML += n;
}

function clean(){
    display.innerHTML = "";
}

function result(){
    try {
        display.innerHTML = eval(display.innerHTML);
    } catch (error){
        display.innerHTML = "ERRO";
    }
}

function apagar(){
    display.innerHTML = display.innerHTML.substring(0, display.innerHTML.length -1)
}