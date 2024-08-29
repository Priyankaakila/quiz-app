const quizData = [
    {
        question: "Which of the following is a JavaScript framework?",
        a: "Django",
        b: "React",
        c: "Laravel",
        d: "Flask",
        correct: "b",
    },
    {
        question: "Which company developed the Java programming language?",
        a: "Microsoft",
        b: "Apple",
        c: "Oracle",
        d: "Sun Microsystems",
        correct: "d",
    },
    {
        question: "Which of the following is not a programming language?",
        a: "Python",
        b: " JavaScript",
        c: "HTML",
        d: "C++",
        correct: "c",
    },
    {
        question: "Which method is used to find the length of a string in JavaScript?",
        a: "size()",
        b: "length()",
        c: "count()",
        d: "len()",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const aText = document.getElementById('a-text')
const bText = document.getElementById('b-text')
const cText = document.getElementById('c-text')
const dText = document.getElementById('d-text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    aText.innerText = currentQuizData.a
    bText.innerText = currentQuizData.b
    cText.innerText = currentQuizData.c
    dText.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <div class= "result">
                    <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                    <button onclick="location.reload()" class="reload">Reload</button>
                </div>
                `
        }
    }
})