let button = document.querySelectorAll(".button")
let display = document.querySelector(".display")
let equal = document.querySelector(".equal")
let clear = document.querySelector(".clear");
let del = document.querySelector(".del");

button.forEach(button => {
    button.addEventListener("click", ()=> {
        display.value += button.innerHTML;
        display.style.color = "black";
    })
});

equal.addEventListener("click", ()=> {
    try {
        let result = eval(display.value);
        display.value = result;
        // console.log(result);
    }
    catch(err) {
        display.value = "Invalid Input"
        display.style.color = "red";
    }

});
document.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        event.preventDefault();
        equal.click();
    }
})
clear.addEventListener("click", ()=> {
    display.value = "";
})
del.addEventListener("click", ()=> {
    let newDisplayValue = display.value.slice(0, -1);
    display.value = newDisplayValue;
})