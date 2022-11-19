let mathInput = document.getElementById("math");
let triviaInput = document.getElementById("trivia");
let dateInput = document.getElementById("date");
let monthInput = document.getElementById("month");
let yearInput = document.getElementById("year");

let mathFacts = document.getElementById("mathFacts");
let triviaFacts = document.getElementById("triviaFacts");
let dateFacts = document.getElementById("dateFacts");
let yearFacts = document.getElementById("yearFacts");

const fetchMathFacts = async () =>{
    const number = mathInput.value
    const resposne = await fetch(`http://numbersapi.com/${number}/math`);
    const data = await resposne.text();
    mathFacts.innerHTML = data;
}

const fetchTriviaFacts = async () =>{
    const number = triviaInput.value
    const resposne = await fetch(`http://numbersapi.com/${number}`);
    const data = await resposne.text();
    triviaFacts.innerHTML = data;
}

const fetchDateFacts = async () =>{
    const date = dateInput.value
    const month = monthInput.value
    const resposne = await fetch(`http://numbersapi.com/${date}/${month}/date`);
    const data = await resposne.text();
    dateFacts.innerHTML = data;
}

const fetchYearFacts = async () =>{
    const year = yearInput.value
    const resposne = await fetch(`http://numbersapi.com/${year}/year`);
    const data = await resposne.text();
    yearFacts.innerHTML = data;
}
