const header = document.querySelector('header');
const main = document.querySelectorAll('main');
let data = new Date();
let day = data.getDate();
let month = data.getMonth();
let fullYear = data.getFullYear();


document.addEventListener('click', (e)=>{
    e.preventDefault()

    const targetEl = e.target;
    const parentEl = targetEl.closest("div");
    const parentForm = targetEl.closest("form");
    const parentCard = parentEl.closest(".card-score");

    


     if (targetEl.classList.contains("add-user")){

        newName = prompt("Qual o nome?")

        if (newName){
            createUser()
        } 
    
    }
    if (targetEl.classList.contains("btn-win-up")) {

        scoreWin = parentEl.querySelector('h3')
        totalScore = parentCard.querySelector('h4')
    
        
        addWin = scoreWin.innerHTML
        newScore = parseInt(addWin)
        scoreWin.innerHTML = newScore +1        
        addScoreTotal = totalScore.innerHTML
        newScoreTotal = parseInt(addScoreTotal)
        totalScore.innerHTML = newScoreTotal +1
                
    }
    if (targetEl.classList.contains("btn-win-down")) {

        scoreWin = parentEl.querySelector('h3')
        totalScore = parentCard.querySelector('h4')
        
        addWin = scoreWin.innerHTML
        newScore = parseInt(addWin)
        scoreWin.innerHTML = newScore -1        
        addScoreTotal = totalScore.innerHTML
        newScoreTotal = parseInt(addScoreTotal)
        totalScore.innerHTML = newScoreTotal -1
                
    }    
    if (targetEl.classList.contains("btn-double-up")) {

        scoreDouble = parentEl.querySelector('h3')
        totalScore = parentCard.querySelector('h4')
    
        addDouble = scoreDouble.innerHTML
        newScore = parseInt(addDouble)
        scoreDouble.innerHTML = newScore +1        
        addScoreTotal = totalScore.innerHTML
        newScoreTotal = parseInt(addScoreTotal)
        totalScore.innerHTML = newScoreTotal +2
    }    
    if (targetEl.classList.contains("btn-double-down")) {

        scoreDouble = parentEl.querySelector('h3')
        totalScore = parentCard.querySelector('h4')
    
        addDouble = scoreDouble.innerHTML
        newScore = parseInt(addDouble)
        scoreDouble.innerHTML = newScore -1        
        addScoreTotal = totalScore.innerHTML
        newScoreTotal = parseInt(addScoreTotal)
        totalScore.innerHTML = newScoreTotal -2
    }    
    if (targetEl.classList.contains("btn-lose-up")) {

        scoreLose = parentEl.querySelector('h3')
        totalScore = parentCard.querySelector('h4')
    
        
        addLose = scoreLose.innerHTML
        newScore = parseInt(addLose)
        scoreLose.innerHTML = newScore +1        
        addScoreTotal = totalScore.innerHTML
        newScoreTotal = parseInt(addScoreTotal)
        totalScore.innerHTML = newScoreTotal -1
    }
    if (targetEl.classList.contains("btn-lose-down")) {

        scoreLose = parentEl.querySelector('h3')
        totalScore = parentCard.querySelector('h4')
        
        addLose = scoreLose.innerHTML
        newScore = parseInt(addLose)
        scoreLose.innerHTML = newScore -1        
        addScoreTotal = totalScore.innerHTML
        newScoreTotal = parseInt(addScoreTotal)
        totalScore.innerHTML = newScoreTotal +1
    }    
    if (targetEl.classList.contains("clear-score")) {
        
        if (confirm("Apagar TODOS Pontos?") == true) {
            
            let mainContainer = document.querySelectorAll('h3')
            let mainScore = document.querySelectorAll('h4')
            
            for ( i= 0, len = mainContainer.length; i < len; i++) {   
                mainContainer[i].innerHTML = "0"
            }
                
            for ( i= 0, len = mainScore.length; i < len; i++) {
            mainScore[i].innerHTML = "0"
        }            
    }}        
    if (targetEl.classList.contains("clear-all")) {
        
        if (confirm("Apagar TODOS Jogadores?") == true) {
        let clearAllCards = document.querySelectorAll('.card')
        
        for(i=0, len = clearAllCards.length; i < len; i++){

            clearAllCards[i].remove()
        }        
    }}
    if(targetEl.classList.contains('btn-del-card')){
        if (confirm("Apagar esse Jogador?") == true) {
        parentForm.remove()
    }}
    if(targetEl.classList.contains('btn-edit-card')){
   
        newName = prompt("Qual o nome?")
        if (newName){
            oldName = parentEl.querySelector('h2')
            
            oldName.innerHTML = newName 

            console.log(oldName)
    }}
    if(targetEl.classList.contains('btn-reset-card')){
        if (confirm("Apagar PONTOS desse Jogador?") == true) {
                    
        scoreUser = parentForm.querySelectorAll('h3')
        scoreUserTotal = parentForm.querySelectorAll('h4')

        for(i=0, len = scoreUser.length; i < len; i++){

            
            scoreUser[i].innerHTML = "0"
        }
        for(i=0, len = scoreUserTotal.length; i < len; i++){

            
            scoreUserTotal[i].innerHTML = "0"
        }
    }
        
    }
    if(targetEl.classList.contains('btn-menu')){

       toggleFoms()
    }
    if(targetEl.classList.contains('btn-title-menu')){
        
        newTitle = prompt("Qual nome do Festival?")
        if (newTitle){
            let titleTop = document.getElementById('name-festival')
            uperTitle = newTitle.toUpperCase()
            titleTop.innerHTML = uperTitle
        } 

        toggleFoms()

    }    
    if(targetEl.classList.contains('btn-save')){
        saveLocalStorage()
    }
});

function createUser() {
    
    let cardContainer = document.querySelector('main');

    let card = document.createElement("form");
    card.classList.add("card");
    cardContainer.appendChild(card);    
    
    let cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    card.appendChild(cardHeader);

    let btnEditCard = document.createElement("button");
    btnEditCard.classList.add('btn-edit-card');
    btnEditCard.innerHTML = '<i class="fa-solid fa-user-pen"></i>';
    cardHeader.appendChild(btnEditCard);

    let cardTitle = document.createElement("h2");
    userName = newName.toUpperCase();
    cardTitle.innerText = userName.slice(0,8);
    cardHeader.appendChild(cardTitle);
    
    let btnResetCard = document.createElement("button");
    btnResetCard.classList.add('btn-reset-card');
    btnResetCard.innerHTML = '<i class="fa-solid fa-eraser"></i>';
    cardHeader.appendChild(btnResetCard);

    let btnDelCard = document.createElement("button");
    btnDelCard.classList.add('btn-del-card');
    btnDelCard.innerHTML = '<i class="fa-solid fa-x"></i>';
    cardHeader.appendChild(btnDelCard);
    
    let cardScore = document.createElement("div");
    cardScore.classList.add("card-score");
    card.appendChild(cardScore);
//
    let cardWin = document.createElement("div");
    cardWin.classList.add("card-win");
    cardScore.appendChild(cardWin);

    let scoreTitleWin = document.createElement("p");
    scoreTitleWin.classList.add("score-title");
    scoreTitleWin.innerHTML = "CORTOU"
    cardWin.appendChild(scoreTitleWin);

    let btnWinUp = document.createElement("button");
    btnWinUp.classList.add('btn-win-up');
    btnWinUp.innerHTML = '<i class="fa-solid fa-caret-up">';
    cardWin.appendChild(btnWinUp);
    
    let scoreNumberWin = document.createElement('h3')
    scoreNumberWin.classList.add('score-sumber-win')
    scoreNumberWin.innerHTML = "0"
    cardWin.appendChild(scoreNumberWin)

    let btnWinDown = document.createElement("button");
    btnWinDown.classList.add('btn-win-down');
    btnWinDown.innerHTML = '<i class="fa-solid fa-caret-down">';
    cardWin.appendChild(btnWinDown);
//
    let cardDouble = document.createElement("div");
    cardDouble.classList.add("Score-double");
    cardScore.appendChild(cardDouble);

    let scoreTitleDouble = document.createElement("p");
    scoreTitleDouble.classList.add("score-title");
    scoreTitleDouble.innerHTML = "APAROU"
    cardDouble.appendChild(scoreTitleDouble);

    let btnDoubleUp = document.createElement("button");
    btnDoubleUp.classList.add('btn-double-up');
    btnDoubleUp.innerHTML = '<i class="fa-solid fa-caret-up">';
    cardDouble.appendChild(btnDoubleUp);
    
    let scoreNumberDouble = document.createElement('h3')
    scoreNumberDouble.classList.add('score-sumber-double')
    scoreNumberDouble.innerHTML = "0"
    cardDouble.appendChild(scoreNumberDouble)

    let btnDoubleDown = document.createElement("button");
    btnDoubleDown.classList.add('btn-double-down');
    btnDoubleDown.innerHTML = '<i class="fa-solid fa-caret-down">';
    cardDouble.appendChild(btnDoubleDown);

    
    let cardLose = document.createElement("div");
    cardLose.classList.add("card-lose");
    cardScore.appendChild(cardLose);

    let scoreTitleLose = document.createElement("p");
    scoreTitleLose.classList.add("score-title");
    scoreTitleLose.innerHTML = "CORTADO"
    cardLose.appendChild(scoreTitleLose);

    let btnLoseUp = document.createElement("button");
    btnLoseUp.classList.add('btn-lose-up');
    btnLoseUp.innerHTML = '<i class="fa-solid fa-caret-up">';
    cardLose.appendChild(btnLoseUp);
    
    let scoreNumberLose = document.createElement('h3')
    scoreNumberLose.classList.add('score-sumber-lose')
    scoreNumberLose.innerHTML = "0"
    cardLose.appendChild(scoreNumberLose)

    let btnLoseDown = document.createElement("button");
    btnLoseDown.classList.add('btn-lose-down');
    btnLoseDown.innerHTML = '<i class="fa-solid fa-caret-down">';
    cardLose.appendChild(btnLoseDown);

    let userTotalScore = document.createElement('div')
    userTotalScore.classList.add('user-score')
    cardScore.appendChild(userTotalScore)

    let titleUserTotal = document.createElement('p')
    titleUserTotal.innerHTML = "PONTOS"
    userTotalScore.appendChild(titleUserTotal)

    let scoreTotalUser = document.createElement('h4')
    scoreTotalUser.classList.add('score-total')
    scoreTotalUser.innerHTML = "0"
    userTotalScore.appendChild(scoreTotalUser)
    
}
function toggleFoms(){
    let btnContainer = document.getElementById('btn-container')
    
    btnContainer.classList.toggle("hide");
    
}


function saveLocalStorage(){
    
    let cardContainerSave = document.querySelectorAll('.card-container')
    let nameFestival = document.getElementById('name-festival').innerText;
    let userName = document.querySelector('.card-title').innerHTML
    let userWin = document.querySelector('.score-number-win').innerHTML
    let userDouble = document.querySelector('.score-number-double').innerHTML
    let userLose = document.querySelector('.score-number-lose').innerHTML
    let userTotal = document.querySelector('.score-number-win').innerHTML
    let stringYear = String(fullYear)
    let year = stringYear.slice(2)
    let dateSaved = (`(${day}/${month+1}/${year})`)
    
    console.log(dateSaved)

    for(i=0, len = cardContainerSave.length; i < len; i++){

    localStorage.setItem(`${nameFestival}${dateSaved}`,JSON.stringify({userName, userWin, userDouble, userLose, userTotal}));

}}


function openLocalStorage(){

}


