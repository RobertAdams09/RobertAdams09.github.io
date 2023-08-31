const questionSet = [
    {
    incorrect1: 'Are you live in London?',
    correct: 'Do you live in London?',
    incorrect2: 'Be you live in London?',
    incorrect3: 'I do not know the answer to this question!',
    questionId: '1/20',
    },
    {
    incorrect1: 'She let me borrowing her car',
    incorrect2: 'She let me to borrow her car',
    correct: 'She let me borrow her car',
    incorrect3: 'I do not know the answer to this question!',
    questionId: '2/20',
    },
    {
    incorrect1: 'She is teacher',
    incorrect2: 'She is any teacher',
    correct: 'She is a teacher',
    incorrect3: 'I do not know the answer to this question!',
    questionId: '3/20',
    },
    {
    incorrect1: 'We met at December',
    correct: 'We met in December',
    incorrect2: 'We met on December',
    incorrect3: 'I do not know the answer to this question!',
    questionId: '4/20',
    },
    {
    correct: 'He speaks English perfectly',
    incorrect1: 'He perfectly speaks English',
    incorrect2: 'He speaks perfectly English',
    incorrect3: 'I do not know the answer to this question!',
    questionId: '5/20',
    },
    {
    incorrect1: 'I will call you when I am going to have time',
    correct: 'I will call you when I have time',
    incorrect2: 'I will call you when I will have time',
    incorrect3: 'I do not know the answer to this question!',
    questionId: '6/20',
    },
    {
    incorrect1: 'They went to the UK to studying English',
    correct: 'They went to the UK to study English',
    incorrect2: 'They went to the UK for study English',
    incorrect3: 'I do not know the answer to this question!',
    questionId: '7/20',
    },
    {
    correct: 'She wants some of the cake',
    incorrect1: 'She wants some of cake',
    incorrect2: 'She wants some of',
    incorrect3: 'I do not know the answer to this question!',
    questionId: '8/20',
    },
    {
    incorrect1: 'She slept during four hours',
    incorrect2: 'She slept since four hours',
    correct: 'She slept for four hours,',
    incorrect3: 'I do not know the answer to this question!',
    questionId: '9/20',
    },
    {
    incorrect1: 'It is Sunday and there is no work. I must not get up early',
    correct: 'It is Sunday and there is no work. I do not have to get up early',
    incorrect2: 'It is Sunday and there is no work. I can not get up early',
    incorrect3: 'I do not know the answer to this question!',
    questionId: '10/20',
    },
    {
    correct: 'I wish that I had a new car',
    incorrect1: 'I wish that I have a new car',
    incorrect2: 'I wish that I will have a new car',
    incorrect3: 'I do not know the answer to this question!',
    questionId: '11/20',
    },
    {
    incorrect1: 'She told me that I sit down',
    correct: 'She told me to sit down',
    incorrect2: 'She told to sit down',
    incorrect3: 'I do not know the answer to this question!',
    questionId: '12/20',
    },
    {
    incorrect1: 'My bike has stolen',
    incorrect2: 'My bike be stolen',
    correct: 'My bike got stolen',
    incorrect3: 'I do not know the answer to this question!',
    questionId: '13/20',
    },
    {
    incorrect1: 'She used to get up early. She does it every day',
    incorrect2: 'She used to getting up early. She does it every day',
    correct: 'She is used to getting up early. She does it every day',
    incorrect3: 'I do not know the answer to this question!',
    questionId: '14/20',
    },
    {
    correct: 'I ate the cake you bought',
    incorrect1: 'I ate the cake that you bought it',
    incorrect2: 'I ate the cake that bought you',
    incorrect3: 'I do not know the answer to this question!',
    questionId: '15/20',
    },
    {
    incorrect1: 'Could you tell me where is the station?',
    incorrect2: 'Could you tell me where will be the station?',
    correct: 'Could you tell me where the station is?',
    incorrect3: 'I do not know the answer to this question!',
    questionId: '16/20',
    },
    {
    correct: 'I failed the exam! I should have studied more',
    incorrect1: 'I failed the exam! I should studied more',
    incorrect2: 'I failed the exam! I should had studied more',
    incorrect3: 'I do not know the answer to this question!',
    questionId: '17/20',
    },
    {
    incorrect1: 'I finish everything by Tuesday',
    incorrect2: 'I will have been finishing everything by Tuesday',
    correct: 'I will have finished everything by Tuesday',
    incorrect3: 'I do not know the answer to this question!',
    questionId: '18/20',
    },
    {
    correct: 'Never have I had such an excellent meal',
    incorrect1: 'Never I have had such an excellent meal',
    incorrect2: 'Never have had I such an excellent meal',
    incorrect3: 'I do not know the answer to this question!',
    questionId: '19/20',
    },
    {
    incorrect1: 'He stopped to smoke. He has not started again',
    incorrect2: 'He stopped smoke. He has not started again',
    correct: 'He stopped smoking. He has not started again',
    incorrect3: 'I do not know the answer to this question!',
    questionId: '20/20',
    },
];

const explanations = [
    {
        correct: 'Do you live in London?',
        explanation: `We make the question form of the present simple of verbs like 'live' with 'do' or 'does'.`,
        questionid: `1/20`,
    },
    {
        correct: 'She let me borrow her car',
        explanation: `After the verb 'let', we use the infinitive without 'to'.`,
        questionid: `2/20`,
    },
    {
        correct: 'She is a teacher',
        explanation: `We need to use 'a' or 'an' when we say what someone's job is.`, 
        questionid: `3/20`,
    },
    {
        correct: 'We met in December',
        explanation: `With months, we always use the prepositions 'in'.`,
        questionid: `4/20`,
    },
    {
        correct: 'He speaks English perfectly',
        explanation: `Adverbs of manner, like 'perfectly', usually go at the end of a clause.`,
        questionid: `5/20`,
    },
    {
        correct: 'I will call you when I have time',
        explanation: `We use the present simple to talk about the future after words like 'when', 'as soon as' and 'before'.`,
        questionid: `6/20`,
    },
    {
        correct: 'They went to the UK to study English',
        explanation: `We use 'to + infinitive' (sometimes called the 'infinitive of purpose') to talk about why we do something in English.`,
        questionid: `7/20`,
    },
    {
        correct: 'She wants some of the cake',
        explanation: `We use 'some of' with before a noun that also has a word like 'the' or 'my'. We use 'some' directly before a noun (I want some cake). We can't use 'some of' alone, without a noun.`,
        questionid: `8/20`,
    },
    {
        correct: 'She slept for four hours,',
        explanation: `When we say how long something lasted in English, we need 'for'.`, 
        questionid: `9/20`,
    },
    {
        correct: 'It is Sunday and there is no work. I do not have to get up early',
        explanation: `We use 'don't have to' when there is no obligation. 'Mustn't' means 'it's not okay to do something. And of course, in this example it's okay to get up early and it's okay to stay in bed.`,
        questionid: `10/20`,
    },
    {
        correct: 'I wish that I had a new car',
        explanation: `We use 'wish + past simple' to make wishes for unreal things in the present.`,
        questionid: `11/20`,
    },
    {
        correct: 'She told me to sit down',
        explanation: `When we report orders with 'tell', we can use 'to + infinitive'. We must use an object like 'me' (or 'him' etc) after tell.`,
        questionid: `12/20`,
    },
    {
        correct: 'My bike got stolen',
        explanation: `We can use 'get' to make a passive sentence instead of the verb 'be'. Here, it means 'my bike was stolen'.`,
        questionid: `13/20`,
    },
    {
        correct: 'She is used to getting up early. She does it every day',
        explanation: `When we talk about a present habit or custom, we use 'be + used to + verb+ing'.`,
        questionid: `14/20`,
    },
    {
        correct: 'I ate the cake you bought',
        explanation: `We can drop the 'that' from relative clauses when the relative pronoun is the object of the relative clause.`,
        questionid: `15/20`,
    },
    {
        correct: 'Could you tell me where the station is?',
        explanation: `We use normal word order (subject + verb) in the second part of an embedded question.`,
        questionid: `16/20`,
    },
    {
        correct: 'I failed the exam! I should have studied more',
        explanation: `We use 'should + have + past participle' to talk about regrets in the past.`,
        questionid: `17/20`,
    },
    {
        correct: 'I will have finished everything by Tuesday',
        explanation: `We use the future perfect (will + have + past participle) to underline that an action will be complete before a second point in the future. We often give the second point in a time phrase with 'by'.`,
        questionid: `18/20`,
    },
    {
        correct: 'Never have I had such an excellent meal',
        explanation: `'Never' needs to be followed by inversion when it's at the beginning of the sentence. We put the auxiliary verb first, then the subject, then the main verb.`,
        questionid: `19/20`,
    },
    {
        correct: 'He stopped smoking. He has not started again',
        explanation: `We use 'stop' with the gerund (verb+ing) when we mean stop something forever.`,
        questionid: `20/20`,
    },
];


// Popup Section Functionality //
const popupSection = document.getElementById("popup-section");
const xButton = document.querySelector(".x-button");


document.addEventListener("DOMContentLoaded", function(){
    setTimeout(function(){ 
        popupSection.style.display = "inline-block";
    }, 1500);
});

// Close the Popup Section
xButton.addEventListener("click", function() {
    popupSection.style.display = "none";
});


// Dynamically Populate the set of Questions for the Quiz 
const quizContainer = document.querySelector('.quiz-container');

window.addEventListener('DOMContentLoaded', function() {
    showQuestionSet(questionSet);
});

function showQuestionSet(questionItems) {
    let showQuestions = questionItems.map(function(item) {
        return `<h1>Which is correct?</h1>
                <div class="buttons-container">
                    <button class="quiz-answer1" id="btns" type="button"><p></p>${item.correct}</button>
                    <button class="quiz-answer2" id="btns" type="button"><p></p>${item.incorrect1}</button>
                    <button class="quiz-answer3" id="btns" type="button"><p></p>${item.incorrect2}</button>
                    <button class="quiz-answer4" id="btns" type="button"><p></p>${item.incorrect3}</button>
                </div>
                <h3 class="question-id">${item.questionId}</h3>`
    });
    showQuestions = showQuestions.join('');
    quizContainer.innerHTML = showQuestions;
};

// Hidden Quiz Section - Appears only after clicking the button 
// Show Overlay of the Quiz Section 
const overlay = document.querySelector(".overlay");
const accessQuizBtn = document.querySelector(".access-quiz-btn");
const closebutton = document.querySelector(".close-button");

const showOverlay = (element) => {
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
};

accessQuizBtn.addEventListener("click", () => {
    showOverlay(overlay);
});

// Hide Overlay of the Quiz 
closebutton.addEventListener("click", function() {
    overlay.style.display = "none";
});

// Burger Navigation Button Functionality 
const button = document.getElementById("button");
const burgerNav = document.querySelector(".burger-nav");

button.addEventListener("click", function() {
    burgerNav.style.display = burgerNav.style.display == "none" ? "block": "none";
});

// Frequently Asked Question Functionality //
const question1 = document.querySelector(".question1");
const answer1 = document.querySelector(".answer1");
const question2 = document.querySelector(".question2");
const answer2 = document.querySelector(".answer2");
const question3 = document.querySelector(".question3");
const answer3 = document.querySelector(".answer3");
const question4 = document.querySelector(".question4");
const answer4 = document.querySelector(".answer4");
const question5 = document.querySelector(".question5");
const answer5 = document.querySelector(".answer5");
const question6 = document.querySelector(".question6");
const answer6 = document.querySelector(".answer6");
const question7 = document.querySelector(".question7");
const answer7 = document.querySelector(".answer7");
const question8 = document.querySelector(".question8");
const answer8 = document.querySelector(".answer8");
const question9 = document.querySelector(".question9");
const answer9 = document.querySelector(".answer9");
const question10 = document.querySelector(".question10");
const answer10 = document.querySelector(".answer10");

//Function that Shows-Hides Answers from Frequently Asked Questions//
const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === 'none') {
    domElement.style.display = 'block';
    } else {
    domElement.style.display = 'none';
    }
};

question1.addEventListener("click", () => {
    toggleHiddenElement(answer1);
});

question2.addEventListener("click", () => {
    toggleHiddenElement(answer2);
});

question3.addEventListener("click", () => {
    toggleHiddenElement(answer3);
});

question4.addEventListener("click", () => {
    toggleHiddenElement(answer4);
});

question5.addEventListener("click", () => {
    toggleHiddenElement(answer5);
});

question6.addEventListener("click", () => {
    toggleHiddenElement(answer6);
});

question7.addEventListener("click", () => {
    toggleHiddenElement(answer7);
});

question8.addEventListener("click", () => {
    toggleHiddenElement(answer8);
});

question9.addEventListener("click", () => {
    toggleHiddenElement(answer9);
});

question10.addEventListener("click", () => {
    toggleHiddenElement(answer10);
});