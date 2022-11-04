function checkNumber() {
    let numberList = 0;
    let count = 1;
    let myNumber = document.querySelector("#inputnum").value;


while (myNumber > count) {
    if (myNumber % count == 0) {numberList += count}
    count+=1;
}

document.querySelector("#inputnum").value=""
if (numberList == myNumber) {
    document.querySelector("#perfnumdiv").innerText = `The number ${myNumber} is perfect!`
} else {
    document.querySelector("#perfnumdiv").innerText = `The number ${myNumber} is not perfect`
}
}

function randomnum1() {
    let numberList = 0;
    let count = 1;
    let myNumber = Math.round(Math.random() * 100)


while (myNumber > count) {
    if (myNumber % count == 0) {numberList += count}
    count+=1;
}

document.querySelector("#inputnum").value=""
if (numberList == myNumber) {
    document.querySelector("#perfnumdiv").innerText = `The number ${myNumber} is perfect!`
} else {
    document.querySelector("#perfnumdiv").innerText = `The number ${myNumber} is not perfect`
}
}

const colorInput = document.querySelector("#color1").addEventListener("input", function() {
    const myColor = document.querySelector("#color1").value;
    document.body.style.backgroundColor = myColor
});


document.querySelector(".range1").oninput = function () {
    const r = document.querySelector("#red").value;
    const g = document.querySelector("#green").value;
    const p = document.querySelector("#purple").value;

    document.body.style.backgroundColor = (`rgb(${r},${g},${p}`);
}

document.querySelector(".range2").oninput = function () {
    const r = document.querySelector("#red").value;
    const g = document.querySelector("#green").value;
    const p = document.querySelector("#purple").value;

    document.body.style.backgroundColor = (`rgb(${r},${g},${p}`);
}

document.querySelector(".range3").oninput = function () {
    const r = document.querySelector("#red").value;
    const g = document.querySelector("#green").value;
    const p = document.querySelector("#purple").value;

    document.body.style.backgroundColor = (`rgb(${r},${g},${p}`);
}


