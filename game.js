const questions = [
    // {
    //     question: 'QUESTION 1',
    //     answer: 'ANSWER 1',
    // },
];

let random;
const displayQuestion = document.querySelector('#front');
const displayAnswer = document.querySelector('#back');
let availableQuestion = questions.slice();
let questionIndex;
let getQuestion = document.getElementById('add-question');
let getAnswer = document.getElementById('add-answer');


function addQuestion (){
    if (getQuestion.value && getAnswer.value !== ""){
        questions.push({question: getQuestion.value, answer: getAnswer.value});
        availableQuestion = [...questions];
        getQuestion.value = '';
        getAnswer.value = '';
        alert('Dodano poprawnie');
        console.log('Dodano poprawnie');
    }else {
        alert('Oba pola są wymagane');
        console.log('Oba pola są wymagane');
    }
}
 
function nextQuestion () {
    if (availableQuestion.length != 0) {
        random = availableQuestion[Math.floor(Math.random() * availableQuestion.length)];
        questionIndex = availableQuestion.indexOf(random);
        displayQuestion.innerText = random.question;
        displayAnswer.innerText = random.answer;
        availableQuestion.splice(questionIndex,1);
    }else {
        alert('To już wszystkie fiszki!');
        window.location.reload(true);
    };
    console.log(random);
}

