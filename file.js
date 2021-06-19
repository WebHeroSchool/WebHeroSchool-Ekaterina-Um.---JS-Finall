let button = document.getElementById('btn');
let arrCards = [];
let card;

// создание карты
let createCard = (i, bags) => {
  card = document.createElement('div');
  card.className = 'card';
  document.getElementById('main-screen').appendChild(card);
  let cardInternal = document.createElement('div');
  cardInternal.className = 'card-internal';
  card.appendChild(cardInternal);
  let cardFront = document.createElement('div');
  cardFront.className = 'card-front';
  cardInternal.appendChild(cardFront);
  let cardBack = document.createElement('div');
  cardBack.className = 'card-back';
  cardInternal.appendChild(cardBack);
// замена оборотной стороны карты на баг
  if (i == bags) cardBack.style.backgroundImage = 'url(img/card-bug.svg)';
//поворот карты по клику
  let flipCard = (function(){
  	 let count = 0;
     return function(){
      count++;
      if (count == 1) cardInternal.classList.toggle('turn');
      else window.location.reload();
  	}
  })();
   card.addEventListener('click', flipCard);
}

// раздача карт
button.onclick = function() {
  const level = document.querySelector('input[name="choice"]:checked').value;
  document.querySelector('body').innerHTML = '<div class="main-cont"><div id = "main-screen" class = "main-screen"></div></div>';
  let mainScreen = document.querySelector('.main-screen');
  let bags = Math.round(Math.random()*level);
  for (let i = 0 ; i < level ; i++){
    createCard(i, bags);
  }
  if (level == 10) {
    document.querySelector('.main-screen').style.width = '83%';
    document.querySelector('.main-screen').style.maxWidth = '1186px';
  }
// перезагрузка страницы при повторном клике
  let reloadPage = (function(){
  	let count = 0;
    return function(){
    	count++;
      if (count > 1) window.location.reload();
    }
  })();
  mainScreen.addEventListener('click', reloadPage);
}
