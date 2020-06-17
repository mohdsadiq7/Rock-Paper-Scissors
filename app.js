let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
	const choices = ['r', 'p', 's'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function convertToWord(letter){
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	return "Scissors";
}

function win(userChoice, computerChoice){
	const smallUserword="user".fontsize(3).sub();
	const smallCompword="comp".fontsize(3).sub();
	const userChoice_div=document.getElementById(userChoice);
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML =`<span style="color:#F9F345;">${convertToWord(userChoice)}</span><span style="color:#00E4F2;">${smallUserword}</span> beats <span style="color:#F9F345;">${convertToWord(computerChoice)}</span><span style="color:#E2584D;">${smallCompword}</span> . You win :-) `;
	userChoice_div.classList.add('green-glow');
	setTimeout(function() { userChoice_div.classList.remove('green-glow')},300);
}

function lose(userChoice, computerChoice){
	const smallUserword="user".fontsize(3).sub();
	const smallCompword="comp".fontsize(3).sub();
	const userChoice_div=document.getElementById(userChoice);
	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML =`<span style="color:#F9F345;">${convertToWord(userChoice)}</span><span style="color:#00E4F2;">${smallUserword}</span> lost to <span style="color:#F9F345;">${convertToWord(computerChoice)}</span><span style="color:#E2584D;">${smallCompword}</span> . You lost :-/ `;
	userChoice_div.classList.add('red-glow');
	setTimeout(function() {userChoice_div.classList.remove('red-glow')},300);
}

function draw(userChoice, computerChoice){
	const smallUserword="user".fontsize(3).sub();
	const smallCompword="comp".fontsize(3).sub();
	const userChoice_div=document.getElementById(userChoice);
	result_p.innerHTML =`<span style="color:#F9F345;">${convertToWord(userChoice)}</span><span style="color:#00E4F2;">${smallUserword}</span> equals <span style="color:#F9F345;">${convertToWord(computerChoice)}</span><span style="color:#E2584D;">${smallCompword}</span> . Its a Draw  :-| `;
	userChoice_div.classList.add('gray-glow');
	setTimeout(function() { userChoice_div.classList.remove('gray-glow')},300);
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch(userChoice + computerChoice){
		case "rs":
		case "sp":
		case "pr":
			win(userChoice, computerChoice);
			break;
		case "sr":
		case "ps":
		case "rp":
			lose(userChoice, computerChoice);
			break;
		case "rr":
		case "pp":
		case "ss":
			draw(userChoice, computerChoice);
			break;		
	}
}

function main(){
	rock_div.addEventListener('click',() => game("r"));
	paper_div.addEventListener('click', ()=> game("p"));
	scissors_div.addEventListener('click',() => game("s"));
}

main();