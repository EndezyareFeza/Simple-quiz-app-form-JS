const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex


startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    answerButtonsElement.classList.remove('disable')
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    answerButtonsElement.classList.add('disable')
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'What is 2  * 2 ?',
        answers: [
            {text: '4', correct: true},
            {text: '6', correct: false},
            {text: '3', correct: false},
            {text: '1', correct: false},
        ]
    },
    {
        question: 'Which company is going to make the space travel possible in future ?',
        answers: [
            {text: 'SpaceX', correct: true},
            {text: 'Blue Origin', correct: true},
            {text: 'Virgin Galactic', correct: false},
            {text: 'Skylab', correct: false},
        ]
    },
    {
        question: 'Who is your favorite inspirational person ?',
        answers: [
            {text: 'Elon Musk', correct: true},
            {text: 'Bill Gates', correct: false},
            {text: 'Jeff Bezos', correct: false},
            {text: 'Mark Zuckerberg', correct: false},
        ]
    },
    {
        question: 'What is your favorite sci-fic movie of all time ?',
        answers: [
            {text: 'Interstellar', correct: true},
            {text: '2001 A space Odyssey', correct: true},
            {text: 'Back to The Future', correct: true},
            {text: 'Matrix', correct: true},
            {text: 'Inception', correct: true},
            {text: 'Stalker', correct: true},
        ]
    },
    {
        question: 'Which country do you want to visit most ?',
        answers: [
            {text: 'New Zealand', correct: true},
            {text: 'Japan', correct: true},
            {text: 'Argentina', correct: true},
            {text: 'Spain', correct: true},
            {text: 'Italy', correct: true},
            {text: 'France', correct: true},
        ]
    },
    {
        question: 'Which scientist do you like the most ?',
        answers: [
            {text: 'Albert Einstein', correct: true},
            {text: 'Isaac Newton', correct: true},
            {text: 'Marie Curie', correct: true},
            {text: 'Nikola Tesla', correct: true},
            {text: 'Galileo Galilei', correct: true},
            {text: 'Charles Darwin', correct: true},
        ]
    },
    {
        question: 'Which musician do you want to listen live ?',
        answers: [
            {text: 'Bob Dylan', correct: true},
            {text: 'Michael Jackson', correct: true},
            {text: 'Madonna', correct: true},
            {text: 'Aretha Franklin', correct: true},
            {text: 'John Lennon', correct: true},
            {text: 'Cat/Yusuf Stevens', correct: true},
        ]
    },
    {
        question: 'Which language do you want to learn with ease ?',
        answers: [
            {text: 'Spanish', correct: true},
            {text: 'Italian', correct: false},
            {text: 'Japanese', correct: false},
            {text: 'Korean', correct: false},
            {text: 'French', correct: false},
            {text: 'Kurdish', correct: true},
        ]
    },
    {
        question: 'Which chess player do you want to have lessons from ?',
        answers: [
            {text: 'Gary Kasparov', correct: true},
            {text: 'Bobby Fischer', correct: true},
            {text: 'Judith Polgar', correct: true},
            {text: 'Paul Morphy', correct: true},
            {text: 'Anatoly Karpov', correct: true},
            {text: 'Magnus Carlsen', correct: true},
        ]
    },
    {
        question: 'What age do you want to live again ?',
        answers: [
            {text: '8', correct: false},
            {text: '17', correct: true},
            {text: '21', correct: true},
            {text: '33', correct: false},
            {text: '41', correct: false},
        ]
    },
    {
        question: 'What is the answer ? (hint: hello world!)',
        answers: [
            {text: '4', correct: false},
            {text: '13', correct: false},
            {text: '42', correct: true},
            {text: '67', correct: false},
        ]
    },
]