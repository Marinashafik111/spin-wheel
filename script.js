const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin");
const popup = document.getElementById("popup");
const resultText = document.getElementById("result-text");
const closeBtn = document.getElementById("close");

// الجوايز
const prizes = [
    "خصم 30%",
    "خصم 20%",
    "هديه مجانية",
    "خصم 10%",
    "خصم 10%",
    "خصم 20%"
];

// منع اللعب أكتر من مرة
if (localStorage.getItem("played")) {
    spinBtn.disabled = true;
    spinBtn.innerHTML = "Already Played";
}

spinBtn.onclick = () => {
    if (localStorage.getItem("played")) return;

    let randomDeg = Math.floor(5000 + Math.random() * 5000);
    wheel.style.transform = `rotate(${randomDeg}deg)`;

    //  بعد 5 ثواني تظهر النتيجة
    setTimeout(() => {
        let actualDeg = randomDeg % 360;
        let section = Math.floor(actualDeg / 60);
        let prize = prizes[section];

        resultText.innerHTML = "مبروووك! حصلت على: " + prize;
        popup.style.display = "block";

        localStorage.setItem("played", true);
        spinBtn.disabled = true;
        spinBtn.innerHTML = "Already Played";

    }, 5000);
};

closeBtn.onclick = () => {
    popup.style.display = "none";
};
