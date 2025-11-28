//quiz, kui saab valesti saab vajutada nuppu proovi uuesti
//lisa lõpptulemuste kast, kui kõik küsimused on vastatud ja vajutatkse vastavat nuppu
//15 laulu, valib iga küsimuse jaoks suvakjalt ühe kolmest, mis on seal vastuses
//lauluarvamine näitab tulemust, kui kõik küsimused vastatud.
//https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_audio_play

let quizPoints = 0;
let songGuessPoints = 0;
let songsQ1 = ['nublu - 1-2.mp3', 'nublu - ära ärata.mp3', 'nublu - barranco.mp3']
let songsQ2 = ['nublu - croissantid.mp3', 'nublu - heikki.mp3', 'nublu - MINA KA feat. reket.mp3']
let songsQ3 = ['nublu - öölaps!.mp3', 'nublu - peagi saabun....mp3', 'nublu - push it feat. maria kallastu.mp3']
let songsQ4 = ['nublu - tmt.mp3', 'nublu & Vaiko Eplik - LAUSU TOTT.mp3', 'nublu x gameboy tetris - für Oksana.mp3']
let songsQ5 = ['nublu x Mikael Gabriel - Universum.mp3', 'trammipark!!.mp3', 'duubel5-v2.mp3.mp3']

function showResults() {
    let butRes = document.createElement("button");//nupp, mis tekib, kui kõigile küsimustele on midagi vastatud
    butRes.innerHTML = "Vaata tulemust"; 
    butRes.style.padding = "15px 35px";
    butRes.style.fontSize = "22px";
    butRes.style.border = "none";
    butRes.style.cursor = "pointer";
    let resBox = document.querySelector(".tulemuse-kast");
    if (resBox.childElementCount > 0) { //kui tulemuse kastis on juba lapsi, siis ei tee midagi
        return;
    }
    resBox.appendChild(butRes);
    butRes.onclick = (event) => { // arrow function
        console.log(event);
        resBox.removeChild(butRes);//võtab ära nuppu ja asendab teksti kastiga, mis ütleb tulemuse
        let resText = document.createElement("p");
        resText.innerHTML = quizPoints + " / 12";
        resText.style.fontSize = "22px";
        resText.style.height = '27.3333px';
        resText.style.paddingLeft = '35px';
        resText.style.paddingRight = '35px';
        resText.style.paddingTop = '15px';
        resText.style.paddingBottom = '15px';
        resText.style.backgroundColor = "#FEE440";
        resBox.appendChild(resText);
    };}

function startStateQuizQuestion(index, valik) {
    let nupp = document.getElementById("nupp-" + index)
    nupp.innerHTML = "Kontrolli";//kontrolli nupp
    document.getElementById("vastus-" + index).innerHTML = "";//tühjendab vastuse kasti
    valik.classList.remove('selected');//eemaldab valikust selected klassi
    nupp.onclick = () => checkAnswer(index);//paneb nuppu uuesti onclick kuulari, mis käivitab kontrolli funktsiooni
}

function selectAnswer(event) {
    event.target.parentElement.querySelectorAll('.vastuse-kast').forEach((btn) => {//vaatab läbi kõik vajutatud nuppu vanem elemendi lapsed ja võtab kõigilt klassi selected ära
        btn.classList.remove('selected');
    });
    event.target.classList.add('selected');//lisab vajutatud nupule klassi selected
}
document.querySelectorAll('.vastuse-kast').forEach((btn) => {//vaatab läbi kõik klassi nuppud ja paneb neile kuulari, millega kutsuda välja funktsioon
    btn.onclick = selectAnswer;
});

let correctAnswers = ["Markkus Pulk", "26. juuni 1996", "Keilas", 
                    "Tallinna Vanalinna Hariduskolleegium", "Ajakirjandus ja kommunikatsioon",
                    "Mina Ka", "Push It", "Mikael Gabriel", "Paisati müüki", "Kurrunurruvuti",
                    "Ema tehtud lasanje", "Vanaisa"];//õiged vastused

function checkAnswer(index) {
    let nupp = document.getElementById("nupp-" + index);//kontrolli nupp
    let vastus = document.getElementById("vastus-" + index);//siia kasti tuleb vastuse bool
    let valik = nupp.parentElement.querySelector('.vastuse-kast.selected');//see vaatab, et mingi valik oleks tehtud
    if (!valik) {
        vastus.innerText = "Palun vali vastus!";
        return;
    }
    if (valik.innerHTML === correctAnswers[index-1]) { //võrdleb õigete vastuste järjendit kohal, kus on küsimus valiku sisemise htmli'ga
        vastus.innerText = "Õige vastus!";
        quizPoints += 1;
        if (index == 12) {
            showResults();
        }
        return;
    }
    vastus.innerText = "Vale vastus!";
    nupp.innerHTML = "Proovi uuesti";
    nupp.onclick = () => startStateQuizQuestion(index, valik);
    showResults();
}
for (let index = 1; index <= 12; index++) {
    document.getElementById("nupp-" + index).onclick = () => checkAnswer(index);
} //for loop, mis lisab kõigile kontrolli nuppudele onclick kuulari ja käivitab nuppu vajutusel funktsiooni andes kaasa indexi
