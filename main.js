var elements = {
    "calcBox": document.getElementById("calcBox")
}
const box = [];
box.clear = function() {
    elements.calcBox.innerText = "";
}
box.calculate = function(input) {
    eval(input);
}
window.onkeydown = function (key) {
    if (key.ctrlKey && key.code == "Backspace") {
        box.clear();
    } else if (key.code == "Enter") {
        box.calculate(elements.calcBox.innerText);
    }
};