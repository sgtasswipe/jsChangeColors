const colArray = ["red", "blue" , "green" , "yellow" , "purple"];
let pbFillDropdown = document.getElementById("pbFillDropdown")
let ddColor = document.getElementById("ddColor")
console.log("Script is running!");
console.log(pbFillDropdown);  // Check if the button element is correctly identified
console.log(ddColor);
let bdy = document.querySelector("body")

pbFillDropdown.addEventListener("click", addColors )
function addColors() {
    ddColor.innerHTML = "";
    colArray.forEach(fillDropdown)
    console.log(document.all)

}

function fillDropdown(color) {
    const el = document.createElement("option")
    el.textContent = color
    el.value = color
    ddColor.appendChild(el)
}

ddColor.addEventListener('change', setBackgroundColor)

function setBackgroundColor() {
    const selectedIndex = ddColor.selectedIndex;
    const selectedColor = ddColor.options[selectedIndex];
    const color = selectedColor.innerText
    bdy.style.backgroundColor = color;
}



