
function onSubmitClicked() {
    const emailRegex =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    
    // check first name contains more than 2 letters

    let firstNameInput = document.getElementById("firstName");
    let isFirstNameValid = firstNameInput.value.length > 1;
    if (!isFirstNameValid) {
        alert("First name should have minimum 2 letters");
    }

    let lastNameInput = document.getElementById("lastName");
    let islastNameValid = lastNameInput.value.length > 1;
    if (!islastNameValid) {
        alert("Last name should have minimum 2 letters");
    }

    let emailInput = document.getElementById("email");
    let isEmailValid = emailRegex.test(emailInput.value);
    if (!isEmailValid) {
        alert("Email is not valid");
    }

    if (isFirstNameValid === true && islastNameValid === true && isEmailValid === true) {
        alert("Well Done! See you in Mardi Gras 2022! :)");
    }
}


(function(){
    function buildQuiz(){
      
      const output = [];
  
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          const answers = [];
  
          for(letter in currentQuestion.answers){
  
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      let numCorrect = 0;
  
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        if(userAnswer === currentQuestion.correctAnswer){

          numCorrect++;
          answerContainers[questionNumber].style.color = 'lightgreen';
        }

        else{
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "What day comes after Mardi Gras?",
        answers: {
          a: "Ash Wednesday",
          b: "Bul Thursday",
          c: "Friday"
        },
        correctAnswer: "a"
      },
      {
        question: "What is the day before Mardi Gras called?",
        answers: {
          a: "Saturday",
          b: "Ash Wednesday",
          c: "Lundi Gras"
        },
        correctAnswer: "c"
      },
      {
        question: "Where was the first known carnival celebration?",
        answers: {
          a: "London, great britain",
          b: "Paris, France",
          c: "Nice, France"
        },
        correctAnswer: "c"
      },
      {
        question: "When was the earliest known carnival celebration?",
        answers: {
          a: "1284",
          b: "1294",
          c: "1454"
        },
        correctAnswer: "b"
      },
      {
        question: "What is the signature Mardi Gras dessert?",
        answers: {
          a: "Tiramisu",
          b: "Cookie",
          c: "King cake"
        },
        correctAnswer: "c"
      },
      {
        question: "What is traditionally hidden inside a king cake?",
        answers: {
          a: "A plastic baby",
          b: "Flag",
          c: "Money"
        },
        correctAnswer: "a"
      },
      {
        question: "Before the COVID-19 pandemic, when was the most recent cancellation of New Orleans’ Mardi Gras parades?",
        answers: {
          a: "1946",
          b: "1945",
          c: "1996"
        },
        correctAnswer: "b"
      },
      {
        question: "What is Mardi Gras called in the United Kingdom, Australia, New Zealand and Canada?",
        answers: {
          a: "Special Thursday",
          b: "Ash Wednesday",
          c: "Shrove Tuesday"
        },
        correctAnswer: "c"
      },
      {
        question: "How many king cakes are sold during an average carnival season?",
        answers: {
          a: "500,000",
          b: "1,000,000",
          c: "650,000"
        },
        correctAnswer: "a"
      },
      {
        question: "What time does New Orleans law require masks to be removed on Mardi Gras?",
        answers: {
          a: "5 p.m.",
          b: "6 p.m.",
          c: "7 p.m."
        },
        correctAnswer: "b"
      }
    ];
  
    buildQuiz();

    submitButton.addEventListener('click', showResults);
  })();
