//quiz, kui saab valesti saab vajutada nuppu proovi uuesti
//lisa lõpptulemuste kast, kui kõik küsimused on vastatud ja vajutatkse vastavat nuppu
//15 laulu, valib iga küsimuse jaoks suvakjalt ühe kolmest, mis on seal vastuses
//lauluarvamine näitab tulemust, kui kõik küsimused vastatud.

let quizPoints = 0;
let songGuessPoints = 0;
const songsQ = {1: ['1-2.mp3', 'ära ärata.mp3', 'barranco.mp3'],
2: ['Croissantid.mp3', 'heikki.mp3', 'MINA KA.mp3'],
3: ['öölaps!.mp3', 'peagi saabun....mp3', 'push it.mp3'],
4: ['tmt.mp3', 'LAUSU TÕTT.mp3', 'für Oksana.mp3'],
5: ['Universum.mp3', 'trammipark!!.mp3', 'duubel5-v2.mp3.mp3']
};

let song1 = songsQ[1][Math.floor(Math.random() * 3)];//esimene laul randomiga
let song2 = songsQ[2][Math.floor(Math.random() * 3)];//teine laul randomiga
let song3 = songsQ[3][Math.floor(Math.random() * 3)];//kolmas laul randomiga
let song4 = songsQ[4][Math.floor(Math.random() * 3)];//neljas laul randomiga
let song5 = songsQ[5][Math.floor(Math.random() * 3)];//viies laul randomiga

let q1Answered = false;
let q2Answered = false;
let q3Answered = false;
let q4Answered = false;
let q5Answered = false;

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

function loeLauluarvamisePunkte(songGuessPoints) {
    songGuessPoints += 1;
    return songGuessPoints;
}

function selectAnswer(event) {
    event.target.parentElement.querySelectorAll('.vastuse-kast').forEach((btn) => {//vaatab läbi kõik vajutatud nuppu vanem elemendi lapsed ja võtab kõigilt klassi selected ära
        btn.classList.remove('selected');
    });
    event.target.classList.add('selected');//lisab vajutatud nupule klassi selected
    if (page === 'lauluarvamine') {//ainult kui on lauluarvamise lehel kontrollib seda
        if (song1.startsWith(event.target.innerHTML)) {//ei suutnud välja mõelda, kuidas seda hea oleks teha funktsioonina, nii et praegu jääb terve lauluarvamise tulemuste kontroll siia
            songGuessPoints = loeLauluarvamisePunkte(songGuessPoints);
            q1Answered = true;
        }
        else if (song2.startsWith(event.target.innerHTML.replace(/\W+$/, ''))) {
            songGuessPoints = loeLauluarvamisePunkte(songGuessPoints);
            q2Answered = true;
        }
        else if (song3.startsWith(event.target.innerHTML)) {
           songGuessPoints = loeLauluarvamisePunkte(songGuessPoints);
           q3Answered = true;
        }
        else if (song4.startsWith(event.target.innerHTML)) {
            songGuessPoints = loeLauluarvamisePunkte(songGuessPoints);
            q4Answered = true;
        }
        else if (song5.startsWith(event.target.innerHTML)) {
            songGuessPoints = loeLauluarvamisePunkte(songGuessPoints);
            q5Answered = true;
        }
        else {
            for (i in songsQ) {
                if (i == 1) {
                    for (j in songsQ[i]) {
                        if (songsQ[i][j].includes(event.target.innerHTML)) {
                            q1Answered = false;
                            songGuessPoints += -1;
                        }
                    }
                }
                else if (i == 2) {
                    for (j in songsQ[i]) {
                        if (songsQ[i][j].includes(event.target.innerHTML)) {
                            q2Answered = false;
                            songGuessPoints += -1;
                        }
                    }
                }
                else if (i == 3) {
                    for (j in songsQ[i]) {
                        if (songsQ[i][j].includes(event.target.innerHTML)) {
                            q3Answered = false;
                            songGuessPoints += -1;
                        }
                    }
                }
                else if (i == 4) {
                    for (j in songsQ[i]) {
                        if (songsQ[i][j].includes(event.target.innerHTML)) {
                            q4Answered = false;
                            songGuessPoints += -1;
                        }
                    }
                }
                else if (i == 5) {
                    for (j in songsQ[i]) {
                        if (songsQ[i][j].includes(event.target.innerHTML)) {
                            q5Answered = false;
                            songGuessPoints += -1;
                        }
                    }
                }
            }
        }
    }
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

function playAudio(i, song) {
    let audioElement = document.getElementById(i + "laul"); //võtab õige audio elemendi
    audioElement.src = song; // annab audio elemendile õige laulu
    audioElement.play(); // mängib laulu
}

let page = document.body.id;

if (page === "quiz") {
    for (let index = 1; index <= 12; index++) {
        document.getElementById("nupp-" + index).onclick = () => checkAnswer(index);
    } //for loop, mis lisab kõigile kontrolli nuppudele onclick kuulari ja käivitab nuppu vajutusel funktsiooni andes kaasa indexi
}

else if (page === "lauluarvamine") {
    //heli nupud
    for (let i=1; i<=5; i++) {//väsisin ära nii et siin on lollid lihtsad lahendused
        if (i === 1) {
            document.getElementById('heli-nupp-' + i).onclick = () => playAudio(i, song1);//paneb kõigile heli nuppudele onclick event handeleri ja kutsuba välja funktsiooni kui nuppu vajutatakse
        }
        else if (i === 2) {
            document.getElementById('heli-nupp-' + i).onclick = () => playAudio(i, song2);//paneb kõigile heli nuppudele onclick event handeleri ja kutsuba välja funktsiooni kui nuppu vajutatakse
        }
        else if (i === 3) {
            document.getElementById('heli-nupp-' + i).onclick = () => playAudio(i, song3);//paneb kõigile heli nuppudele onclick event handeleri ja kutsuba välja funktsiooni kui nuppu vajutatakse
        }
        else if (i === 4) {
            document.getElementById('heli-nupp-' + i).onclick = () => playAudio(i, song4);//paneb kõigile heli nuppudele onclick event handeleri ja kutsuba välja funktsiooni kui nuppu vajutatakse
        }
        else if (i === 5) {
            document.getElementById('heli-nupp-' + i).onclick = () => playAudio(i, song5);//paneb kõigile heli nuppudele onclick event handeleri ja kutsuba välja funktsiooni kui nuppu vajutatakse
        }
    }
    let tulemuseKoht = document.querySelector('.tulemus-kast')
    tulemuseKoht.onclick = () => {
        tulemuseKoht.innerHTML = "Sinu tulemus on: " + songGuessPoints + " / 5";
    }
}
