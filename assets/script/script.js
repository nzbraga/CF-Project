const addUser = document.querySelector('#add-user')
const clearScore = document.querySelector('#clear-score')
const clearAll = document.querySelector('#clear-all')

const card = document.querySelector('.card')
const container = document.querySelector('.container')


const btnWin = document.querySelector('.btn-win')
const btnDouble = document.querySelector('.btn-double')
const btnLose = document.querySelector('.btn-lose')

let scoreWin = document.querySelector('.score-number-win')
let scoreLose = document.querySelector('.score-number-lose')
let scoreDouble = document.querySelector('.score-number-double')
let scoreTotal = document.querySelector('.score-total')



//

addUser.addEventListener('click', () =>{

   
});

clearScore.addEventListener('click', () =>{

    scoreWin.innerHTML = 0;
    scoreLose.innerHTML = 0;
    scoreDouble.innerHTML = 0;
    scoreTotal.innerHTML = 0;
 
})


function eventWin() {
    
    addWin = scoreWin.innerHTML

    newScore = parseInt(addWin)

    scoreWin.innerHTML = newScore +1
    
    addScoreTotal = scoreTotal.innerHTML

    newScoreTotal = parseInt(addScoreTotal)

    scoreTotal.innerHTML = newScoreTotal +1
    
}

function eventDouble() {

    addWin = scoreDouble.innerHTML

    newScore = parseInt(addWin)

    scoreDouble.innerHTML = newScore +1
    
    addScoreTotal = scoreTotal.innerHTML

    newScoreTotal = parseInt(addScoreTotal)

    scoreTotal.innerHTML = newScoreTotal +2
   
}


function eventLose(){
    
    addWin = scoreLose.innerHTML

    newScore = parseInt(addWin)

    scoreLose.innerHTML = newScore +1
    
    addScoreTotal = scoreTotal.innerHTML

    newScoreTotal = parseInt(addScoreTotal)

    scoreTotal.innerHTML = newScoreTotal -1


}


btnLose.addEventListener('click', () =>{

    eventLose()
    
})

function createUser() {
 
     
    const cardContainer = document.createElement('div');
    cardContainer.classList.add('card-container');
    container.appendChild(cardContainer);

    const card = document.createElement("div");
    card.classList.add("card");
    cardContainer.appendChild(card);    
    
    const cardTitle = document.createElement("div");
    cardTitle.classList.add("card-title");
    card.appendChild(cardTitle);

    const cardName = document.createElement("h3");
    cardName.innerText = userName;
    cardTitle.appendChild(cardName);

    const userCard = document.createElement('div');
    userCard.classList.add('user-card');
    card.appendChild(userCard);

    const titleWin = document.createElement('p');
    titleWin.classList.add('title-win');
    titleWin.innerHTML = "CORTOU";
    userCard.appendChild(titleWin);

    const titleDouble = document.createElement('p');
    titleDouble.classList.add('title-double');
    titleDouble.innerHTML = "APAROU";
    userCard.appendChild(titleDouble);

    const titleLose = document.createElement('p');
    titleLose.classList.add('title-lose');
    titleLose.innerHTML = "CORTADO";
    userCard.appendChild(titleLose);

    const scoreWin = document.createElement('p');
    scoreWin.classList.add('score-number-win');
    scoreWin.innerHTML = "0";
    userCard.appendChild(scoreWin);

    const scoreDouble = document.createElement('p');
    scoreDouble.classList.add('score-number-double');
    scoreDouble.innerHTML = "0";
    userCard.appendChild(scoreDouble);

    const scoreLose = document.createElement('p');
    scoreLose.classList.add('score-number-lose');
    scoreLose.innerHTML = "0";
    userCard.appendChild(scoreLose);

    const btnWin = document.createElement('button');
    btnWin.classList.add('btn-win');
    btnWin.innerHTML = "+";
    userCard.appendChild(btnWin);

    const btnDouble = document.createElement('button');
    btnDouble.classList.add('btn-double');
    btnDouble.innerHTML = "↕";
    userCard.appendChild(btnDouble);

    const btnLose = document.createElement('button');
    btnLose.classList.add('btn-lose');
    btnLose.innerHTML = "-";
    userCard.appendChild(btnLose);

    const userScore = document.createElement('div');
    userScore.classList.add('user-score');
    card.appendChild(userScore);

    const scoreTotal = document.createElement('p');
    scoreTotal.classList.add('score-total');
    scoreTotal.innerHTML = "0";
    userScore.appendChild(scoreTotal);

    cardContainer.appendChild(card)
    
}

document.addEventListener('click', (e) => {
    const targetEl = e.target;
    const parentEl = targetEl.closest('h4')

    if (targetEl.classList.contains('add-user')){
        userName = prompt('Qual seu nome?')

        if (userName){
            createUser()
        } 
    
    }
    
    if (targetEl.classList.contains('btn-win')) {
        parentEl.innerHTML = eventWin()
    }

    if (targetEl.classList.contains('btn-double')) {
        parentEl.innerHTML = eventDouble()
    }

    if (targetEl.classList.contains('clear-all')) {
        

        const cardContainer = document.querySelector('.card-container')
        
        if(card){
        cardContainer.remove()


    }
    
}})
