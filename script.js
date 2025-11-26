//quiz, kui saab valesti saab vajutada nuppu proovi uuesti
//lisa lõpptulemuste kast, kui kõik küsimused on vastatud ja vajutatkse vastavat nuppu
//15 laulu, valib iga küsimuse jaoks suvakjalt ühe kolmest, mis on seal vastuses
//lauluarvamine näitab tulemust, kui kõik küsimused vastatud.
let check1 = document.getElementById("kontroll-nupp-1")
let check2 = document.getElementById("kontroll-nupp-2")
let check3 = document.getElementById("kontroll-nupp-3")
let check4 = document.getElementById("kontroll-nupp-4")
let check5 = document.getElementById("kontroll-nupp-5")
let check6 = document.getElementById("kontroll-nupp-6")
let check7 = document.getElementById("kontroll-nupp-7")
let check8 = document.getElementById("kontroll-nupp-8")
let check9 = document.getElementById("kontroll-nupp-9")
let check10 = document.getElementById("kontroll-nupp-10")
let check11 = document.getElementById("kontroll-nupp-11")
let check12 = document.getElementById("kontroll-nupp-12")

let rightAnswerSelected = false;

function tryAgain(answerBox, buttonName) {
    buttonName.innerHTML = "Kontrolli";
    document.getElementById(answerBox).innerHTML = "";
    buttonName.onclick = () => Check(answerBox, buttonName);
}

function Check(answerBox, buttonName) {
    console.log(rightAnswerSelected);
    if (rightAnswerSelected) {
        document.getElementById(answerBox).innerHTML = "Õige vastus!";
        rightAnswerSelected = false;
    }
    else {
        document.getElementById(answerBox).innerHTML = "Vale vastus. Proovi uuesti!";
        buttonName.innerHTML = "Proovi uuesti";
        buttonName.onclick = () => tryAgain(answerBox, buttonName);
    }
    console.log(rightAnswerSelected);
};

check1.onclick = () => Check('vastus1', check1)
check2.onclick = () => Check('vastus2', check2)
check3.onclick = () => Check('vastus3', check3)
check4.onclick = () => Check('vastus4', check4)
check5.onclick = () => Check('vastus5', check5)
check6.onclick = () => Check('vastus6', check6)
check7.onclick = () => Check('vastus7', check7)
check8.onclick = () => Check('vastus8', check8)
check9.onclick = () => Check('vastus9', check9)
check10.onclick = () => Check('vastus10', check10)
check11.onclick = () => Check('vastus11', check11)
check12.onclick = () => Check('vastus12', check12)