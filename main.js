const numbersBtn = document.querySelectorAll(".numbers");
const displayArea = document.querySelector("#display");
const lettersBtn = document.querySelectorAll(".letters");
const spaceBtn = document.querySelector("#space");
const enterBtn = document.querySelector("#enter");
const backBtn = document.querySelector("#back");
const okBtn = document.querySelector("#ok");
const capsBtn = document.querySelector("#caps");
const signBtn = document.querySelectorAll(".sign");
const shiftBtn = document.querySelector("#shift");
const btn = document.querySelectorAll("button");

let capsToggle = false;
let shiftToggle = false;

function makeThemBig (el) {
    el.innerText = el.innerText.toUpperCase();
}

function makeThemSmall (el) {
    el.innerText = el.innerText.toLowerCase();
}

numbersBtn.forEach((each)=> {
    each.addEventListener("click", (e) => {

        displayArea.value += e.target.innerText; 
    }); 
});

signBtn.forEach((each)=> {
    each.addEventListener("click", (e) => {

        displayArea.value += e.target.innerText; 
    }); 
});

lettersBtn.forEach((each)=> {
    each.addEventListener("click", (e) => {

        displayArea.value += e.target.innerText;

        if (shiftToggle) {
            shiftToggle = false;
            lettersBtn.forEach((each)=> {
            makeThemSmall(each);
        });
        }
    }); 
});

spaceBtn.addEventListener("click", (e) => {

    displayArea.value += " "; 
}); 

enterBtn.addEventListener("click", (e) => {

    displayArea.value +=  `\n`; 
}); 

backBtn.addEventListener("click", (e) => {

    displayArea.value = displayArea.value.slice(0, displayArea.value.length-1); 
}); 

okBtn.addEventListener("click", (e) => {
    alert( displayArea.value);
}); 

capsBtn.addEventListener("click", () => {
    if(!capsToggle) {
        capsToggle = true;
        lettersBtn.forEach( (each)=> {
        makeThemBig(each);
    });
    }
    else {
        capsToggle = false;
        lettersBtn.forEach( (each)=> {
        makeThemSmall(each);
    });
    }
}); 

shiftBtn.addEventListener("click", () => {
    if(capsToggle) {
        capsToggle = false;
    }

    if(!shiftToggle) {
        shiftToggle = true;
        lettersBtn.forEach( (each)=> {
        makeThemBig(each);
    });
    }
    else {
        shiftToggle = false;
        lettersBtn.forEach( (each)=> {
        makeThemSmall(each);
    });
    }
}); 


btn.forEach( (but) => {

    but.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "white";
        e.target.style.color = "blueviolet";
    })
});

btn.forEach( (but) => {

    but.addEventListener("mouseleave", (e) => {
        e.target.style.backgroundColor = "blueviolet";
        e.target.style.color = "white";
        okBtn.style.backgroundColor = "white"
        okBtn.style.color = "blueviolet"

    })
});