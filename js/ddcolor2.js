console.log("Script  2 is running!");


let pbFillDropdown2 = document.getElementById("pbFillDropdown2")
let ddColor2 = document.getElementById("ddColor2")

const colArray2 = ["red", "blue" , "green" , "yellow" , "purple"];

const colArray3 = [["red", "#ff0000"], ["blue", "#0000ff"], ["green", "#00ff00"], ["gosh", "#624646"], ["purple", "#e00cdd"]];

pbFillDropdown2.addEventListener("click", addColors2 )
function addColors2() {
    ddColor2.innerHTML = "";
    colArray3.forEach(fillDropdown2)
    console.log(document.all)

}

function fillDropdown2(color) {
    const el2 = document.createElement("option")
    el2.textContent = color[0]
    el2.value = color[1]
    console.log(el2.value)
    ddColor2.appendChild(el2)
}

ddColor2.addEventListener('change', setBackgroundColor2)

function setBackgroundColor2() {
    const selectedIndex = ddColor2.selectedIndex;
    const selectedColor = ddColor2.options[selectedIndex];
    const color = selectedColor.value
    bdy.style.backgroundColor = color;
}