const questions = {
    History: {
        easy: [
            {
                question: "Απέναντι σε ποία ομάδα κατέκτησε ο Ερυθρός Αστέρας το Κύπελλο Πρωταθλητριών ;",
                answer: "Marseille",
                points: 1
            }
        ],
        medium: [
            {
                question: "Σε πόσους τελικόυς UEFA Champions League(1992-93 Και μετά) έχει αγωνιστει η Ατλέτικο Μαδρίτης ;",
                answer: "Δύο",
                points: 2
            }
        ],
        hard: [
            {
                question: "Ποιά ηταν η ποιό ακριβή μεταγραφή την σεζον 21/22;",
                answer: "Jack Grealish 117.50εκ",
                points: 3
            }
        ]
    },
    Geography: {
        easy: [
            {
                question: "Από ποιά χώρα κατάγεται ο Gregor Kobel της Borussia Dortmund ;",
                answer: "Ελβετία",
                points: 1
            }
        ],
        medium: [
            {
                question: "Σε πόσες χώρες έχει αγωνιστεί ο Mauro Icardi;",
                answer: "4",
                points: 2
            }
        ],
        hard: [
            {
                question: "Σε ποιά πόλη βρίσκετε το στάδιο Luigi Ferraris;",
                answer: "Γένοβα, UC Sampdoria ",
                points: 3
            }
        ]
    },
    playerID: {
        easy: [
            {
                question: "Σε ποόν παιχτη ανήκει το παρακάτω βιογραφικό;",
                image: "images/id1.png",
                answer: "José Sá",
                points: 1
            }
        ],
        medium: [
            {
                question: "Σε ποόν παιχτη ανήκει το παρακάτω βιογραφικό;",
                image: "images/id2.png",
                answer: "Franco Vázquez",
                points: 2
            }
        ],
        hard: [
            {
                question: "Σε ποόν παιχτη ανήκει το παρακάτω βιογραφικό;",
                image: "images/id3.png",
                answer: "Javier Pastore",
                points: 3
            }
        ]
    },
    GuessTheFinal: {
        easy: [
            {
                question: "Ποιές ομάδες ήταν finalist στο 2023 UEFA Europa League final ",
                answer: "Sevilla & Roma.",
                points: 1
            }
        ],
        medium: [
            {
                question: "Πόσο έληξε ο τελικός του Champions League 2015-2016 	Real Madrid-Atlético Madrid;",
                answer: "1-1 (5-3 πέναλντι)",
                points: 2
            }
        ],
        hard: [
            {
                question: "Ποίος τελικός του Champions League διεξήχθει ποίο πρόσφατα στο Metropolitano Stadium,",
                answer: "Liverpool	2–0	Tottenham Hotspur",
                points: 3
            }
        ]
    },
    Logo: {
        easy: [
            {
                question: "Ποια ομάδα έχει αυτό το έμβλημα; (Εικόνα)",
                image: "images/Frosinone.png",
                answer: "Frosinone",
                points: 1
            }
        ],
        medium: [
            {
                question: "Ποια ομάδα έχει αυτό το έμβλημα; (Εικόνα)",
                image: "images/Charleroi.png",
                answer: "Charleroi",
                points: 2
            }
        ],
        hard: [
            {
                question: "Ποια ομάδα έχει αυτό το έμβλημα; (Εικόνα)",
                image: "images/Zurich.png",
                answer: "Zurich",
                points: 3
            }
        ]
    },
    PlayerNumber: {
        easy: [
            {
                question: "Ποιό είναι το νούμερο του παρακάτω παίχτη;",
                image: "images/watkins.jpg",
                answer: "11",
                points: 1
            }
        ],
        medium: [
            {
                question: "Ποιό είναι το νούμερο του παρακάτω παίχτη;",
                image: "images/simons.jpg",
                answer: "20",
                points: 2
            }
        ],
        hard: [
            {
                question: "Ποιό είναι το νούμερο του παρακάτω παίχτη;",
                image: "images/garcia.png",
                answer: "22",
                points: 3
            }
        ]
    }
};

let player1Score = 0;
let player2Score = 0;
let currentPlayer = 1;  // Ξεκινάμε με τον παίκτη 1
let currentQuestion = null;
let player1Name = 'Παίκτης 1';
let player2Name = 'Παίκτης 2';

function submitNames() {
    player1Name = document.getElementById('player1-name').value || 'Παίκτης 1';
    player2Name = document.getElementById('player2-name').value || 'Παίκτης 2';
    
    document.getElementById('player1-display').textContent = player1Name;
    document.getElementById('player2-display').textContent = player2Name;
    document.getElementById('current-player').textContent = player1Name;  // Ξεκινάμε με τον παίκτη 1
    
    document.getElementById('name-section').style.display = 'none';
    document.getElementById('game-section').style.display = 'block';
}

function loadCategory(category) {
    document.getElementById('category-title').textContent = category;
    document.getElementById('question-section').style.display = 'block';
    document.getElementById('answer-section').style.display = 'none';
    // Display the question buttons
    document.querySelectorAll('#question-section .question-button').forEach(button => {
        button.style.display = 'inline-block';
    });

    // Optionally, update the category title
    document.getElementById('category-title').textContent = category;

}

function loadQuestion(difficulty) {
    const category = document.getElementById('category-title').textContent;
    const questionSet = questions[category][difficulty];
    const randomIndex = Math.floor(Math.random() * questionSet.length);
    currentQuestion = questionSet.splice(randomIndex, 1)[0];
    
    document.getElementById('question').textContent = currentQuestion.question;
    if (currentQuestion.image) {
        document.getElementById('question-image').src = currentQuestion.image;
        document.getElementById('question-image').style.display = 'block';
    } else {
        document.getElementById('question-image').style.display = 'none';
    }
    document.getElementById('answer').value = '';
    
    document.getElementById('question-section').style.display = 'none';
    document.getElementById('answer-section').style.display = 'block';
    document.getElementById('answer-box').style.display = 'none';
}

function submitAnswer() {
    const playerAnswer = document.getElementById('answer').value.trim();
    document.getElementById('correct-answer').textContent = `Σωστή απάντηση: ${currentQuestion.answer}`;
    
    document.getElementById('answer-section').style.display = 'none';
    document.getElementById('answer-box').style.display = 'block';
}

function confirmAnswer(isCorrect) {
    if (isCorrect) {
        if (currentPlayer === 1) {
            player1Score += currentQuestion.points;
        } else {
            player2Score += currentQuestion.points;
        }
        updateScore();
    }
    switchPlayer();  // Εναλλαγή παίκτη μετά από κάθε απάντηση
    checkGameEnd();
}

function updateScore() {
    document.getElementById('score').innerHTML = `<span class="player" id="player1-display">${player1Name}:</span> ${player1Score} <span class="player player2" id="player2-display">${player2Name}:</span> ${player2Score}`;
}

function switchPlayer() {
    currentPlayer = currentPlayer === 1 ? 2 : 1;  // Εναλλαγή παίκτη
    document.getElementById('current-player').textContent = currentPlayer === 1 ? player1Name : player2Name;  // Ενημέρωση της ένδειξης του τρέχοντος παίκτη
}

function resetQuestion() {
    currentQuestion = null;
    document.getElementById('category-title').textContent = '';
    document.getElementById('question-section').style.display = 'none';
    document.getElementById('answer-section').style.display = 'none';
    document.getElementById('answer-box').style.display = 'none';
    document.getElementById('category-section').style.display = 'block';
}

function checkGameEnd() {
    const remainingQuestions = Object.values(questions).flatMap(category => 
        Object.values(category).flatMap(difficulty => difficulty)
    );

    if (remainingQuestions.length === 0) {
        displayWinner();
    } else {
        resetQuestion();
    }
}

function displayWinner() {
    let winnerMessage = '';

    if (player1Score > player2Score) {
        winnerMessage = `Ο νικητής είναι ο ${player1Name} με σκορ ${player1Score}!`;
    } else if (player2Score > player1Score) {
        winnerMessage = `Ο νικητής είναι ο ${player2Name} με σκορ ${player2Score}!`;
    } else {
        winnerMessage = `Ισοπαλία! Και οι δύο παίκτες έχουν σκορ ${player1Score}.`;
    }

    document.getElementById('winner-message').textContent = winnerMessage;
    document.getElementById('final-score').textContent = `Συνολικό Σκορ: ${player1Name} - ${player1Score}, ${player2Name} - ${player2Score}`;
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
    resetGame();
}

function resetGame() {
    player1Score = 0;
    player2Score = 0;
    currentPlayer = 1;  // Ξεκινάμε πάλι με τον παίκτη 1
    updateScore();
    resetQuestion();
    document.getElementById('name-section').style.display = 'block';
    document.getElementById('game-section').style.display = 'none';
}

//music
const music = document.getElementById('background-music');
        const playPauseBtn = document.getElementById('play-pause-btn');

        function togglePlayPause() {
            if (music.paused) {
                music.play().catch(error => {
                    console.log('Autoplay was prevented:', error);
                });
                playPauseBtn.textContent = 'Pause Music';
            } else {
                music.pause();
                playPauseBtn.textContent = 'Start Music';
            }
        }

        function volumeUp() {
            if (music.volume < 1) {
                music.volume = Math.min(1, music.volume + 0.1); // Αύξηση έντασης κατά 0.1
            }
        }

        function volumeDown() {
            if (music.volume > 0) {
                music.volume = Math.max(0, music.volume - 0.1); // Μείωση έντασης κατά 0.1
            }
        }

        window.addEventListener('load', function() {
            // Καθυστέρηση 2 δευτερολέπτων πριν την εμφάνιση των κουμπιών
            setTimeout(() => {
                document.getElementById('music-controls').classList.add('show');
            }, 2000);
        });
        