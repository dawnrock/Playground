var handleButtonCLick = () => alert("Button CLicked!");
var handleHeaderCLick = () => alert("You clicked the header!");

var handleInputCHange = (event) => {
    console.log(event.target.value);
}

document.getElementById("my-button").addEventListener("click", handleButtonCLick);

document.getElementById("main-header").addEventListener("click", handleHeaderCLick);

document.getElementById("my-input").addEventListener("change", handleInputCHange);