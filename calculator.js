function display(val){
    document.getElementById('answer').value += val;
}

function solve() {
    let x = document.getElementById('answer').value;
    let y = eval(x);
    document.getElementById('answer').value =y;
}

function clearBtn(){
    document.getElementById('answer').value="";
}