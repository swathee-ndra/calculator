
function num(val) {
    document.getElementById("text").value += val;
}


function Alclrr() {
    document.getElementById("text").value = "";
}


function clr() {
    let display = document.getElementById("text");
    display.value = display.value.slice(0, -1);
}


function equal() {
    let display = document.getElementById("text");
    try {
        
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}


document.addEventListener("keydown", function (e) {
    const key = e.key;
    if (!isNaN(key) || "+-*/.%".includes(key)) {
        num(key);
    } else if (key === "Enter") {
        equal();
    } else if (key === "Backspace") {
        clr();
    } else if (key.toLowerCase() === "c") {
        Alclrr();
    }
});
