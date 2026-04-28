// ===== SLIDER =====
let images = [
    "images/bali1.jpg",
    "images/bali2.jpg",
    "images/bali3.jpg"
];

let current = 0;

function showSlide() {
    document.getElementById("slider-img").src = images[current];
}

function nextSlide() {
    current = (current + 1) % images.length;
    showSlide();
}

function prevSlide() {
    current = (current - 1 + images.length) % images.length;
    showSlide();
}

// ===== CIEKAWOSTKI =====
let facts = [
    "Na Bali znajduje się ponad 20 000 świątyń!",
    "Wyspa nazywana jest 'Wyspą Bogów'.",
    "Ryż jest podstawą diety mieszkańców."
];

function showFact() {
    let random = Math.floor(Math.random() * facts.length);
    document.getElementById("fact").innerText = facts[random];
}

// ===== QUIZ =====
let score = 0;

function checkAnswer(question, answer) {
    if (
        (question === 1 && answer === 'a') ||
        (question === 2 && answer === 'a') ||
        (question === 3 && answer === 'a')
    ) {
        score++;
    }

    document.getElementById("score").innerText =
        "Twój wynik: " + score;
}