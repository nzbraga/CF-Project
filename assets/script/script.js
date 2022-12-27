
const addUser = document.querySelector('#add-user')
const clearScore = document.querySelector('#clear-score')
const clearAll = document.querySelector('#clear-all')

const card = document.querySelector('.card')
const cardContainer = document.querySelector('.card-container')
const container = document.querySelector('.container')

const btnWin = document.querySelector('.btn-win')
const btnDouble = document.querySelector('.btn-double')
const btnLose = document.querySelector('.btn-lose')

let usersScore = document.querySelector('.score-total') 
let scoreWin = document.querySelector('.score-number-win')
let scoreDouble = document.querySelector('.score-number-double')
let scoreLose = document.querySelector('.sore-number-lose')

//

function createUser() {
    
    const cardContainer = document.querySelector('.card-container')
     
    const card = document.createElement("div");
    card.classList.add("card");
    cardContainer.appendChild(card);    
    
    const cardTitle = document.createElement("div");
    cardTitle.classList.add("card-title");
    card.appendChild(cardTitle);

    const cardName = document.createElement("h3");
    cardName.innerText = userName.toUpperCase();
    cardTitle.appendChild(cardName);

    const userCard = document.createElement('div');
    userCard.classList.add('user-card');
    card.appendChild(userCard);



    const cardWin = document.createElement('div');
    cardWin.classList.add('card-win');
    userCard.appendChild(cardWin);

    const titleWin = document.createElement('p');
    titleWin.classList.add('title-win');
    titleWin.innerHTML = "CORTOU";
    cardWin.appendChild(titleWin);

    const scoreWin = document.createElement('h4');
    scoreWin.classList.add('score-number-win');
    scoreWin.innerHTML = "0";
    cardWin.appendChild(scoreWin);
    
    const btnWin = document.createElement('button');
    btnWin.classList.add('btn-win');
    btnWin.innerHTML = "+";
    cardWin.appendChild(btnWin);


    
    const cardDouble = document.createElement('div');
    cardDouble.classList.add('card-double');
    userCard.appendChild(cardDouble);

    const titleDouble = document.createElement('p');
    titleDouble.classList.add('title-double');
    titleDouble.innerHTML = "APAROU";
    cardDouble.appendChild(titleDouble);

    const scoreDouble = document.createElement('h4');
    scoreDouble.classList.add('score-number-double');
    scoreDouble.innerHTML = "0";
    cardDouble.appendChild(scoreDouble);

    const btnDouble = document.createElement('button');
    btnDouble.classList.add('btn-double');
    btnDouble.innerHTML = "↕";
    cardDouble.appendChild(btnDouble);




    const cardLose = document.createElement('div');
    cardLose.classList.add('card-lose');
    userCard.appendChild(cardLose);

    const titleLose = document.createElement('p');
    titleLose.classList.add('title-lose');
    titleLose.innerHTML = "CORTADO";
    cardLose.appendChild(titleLose);

    const scoreLose = document.createElement('h4');
    scoreLose.classList.add('score-number-lose');
    scoreLose.innerHTML = "0";
    cardLose.appendChild(scoreLose);
 
    const btnLose = document.createElement('button');
    btnLose.classList.add('btn-lose');
    btnLose.innerHTML = "-";
    cardLose.appendChild(btnLose);




    const userScore = document.createElement('div');
    userScore.classList.add('user-score');
    card.appendChild(userScore);

    const scoreTotal = document.createElement('p');
    scoreTotal.classList.add('score-total');
    scoreTotal.innerHTML = "0";
    userScore.appendChild(scoreTotal);

    cardContainer.appendChild(card)
    
}

//

document.addEventListener('click', (e) => {
    
    const targetEl = e.target;
    const parentEl = targetEl.closest("div")
    const parentCard = parentEl.closest(".card")
    
    if (targetEl.classList.contains("add-user")){

        userName = prompt("Qual seu nome?")

        if (userName){
            createUser()
        } 
    
    }
    
    if (targetEl.classList.contains("btn-win")) {

        scoreWin = parentEl.querySelector('.score-number-win')
        totalScore = parentCard.querySelector('.score-total')
    
        
        addWin = scoreWin.innerText
        newScore = parseInt(addWin)
        scoreWin.innerHTML = newScore +1        
        addScoreTotal = totalScore.innerHTML
        newScoreTotal = parseInt(addScoreTotal)
        totalScore.innerHTML = newScoreTotal +1
                
    }
    
    if (targetEl.classList.contains("btn-double")) {

        scoreDouble = parentEl.querySelector('.score-number-double')
        totalScore = parentCard.querySelector('.score-total')
    
        addDouble = scoreDouble.innerText
        newScore = parseInt(addDouble)
        scoreDouble.innerHTML = newScore +1        
        addScoreTotal = totalScore.innerHTML
        newScoreTotal = parseInt(addScoreTotal)
        totalScore.innerHTML = newScoreTotal +2
    }
    
    if (targetEl.classList.contains("btn-lose")) {

        scoreLose = parentEl.querySelector('.score-number-lose')
        totalScore = parentCard.querySelector('.score-total')
    
        
        addLose = scoreLose.innerText

        newScore = parseInt(addLose)

        scoreLose.innerHTML = newScore +1
        
        addScoreTotal = totalScore.innerHTML

        newScoreTotal = parseInt(addScoreTotal)

        totalScore.innerHTML = newScoreTotal -1
    }
    
    if (targetEl.classList.contains("clear-score")) {
        
        
        let cardScoreContainer = cardContainer.querySelectorAll('h4')
        let cardScoreTotal = cardContainer.getElementsByClassName('score-total')

        for ( i= 0, len = cardScoreContainer.length; i < len; i++) {
            
            cardScoreContainer[i].innerHTML = "0"
        }

        for ( i= 0, len = cardScoreTotal.length; i < len; i++) {
            
            cardScoreTotal[i].innerHTML = "0"
        }

            
    }

    if (targetEl.classList.contains("clear-all")) {
        

        let clearAllScore = cardContainer.querySelectorAll('.card')
        
        for ( i= 0, len = clearAllScore.length; i < len; i++) {
            
            clearAllScore[i].remove()
        }

        
    }

    
})
