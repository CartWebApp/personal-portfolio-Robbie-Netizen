const eecuCard = document.getElementById('card-eecu');
const eecuCardExpanded = document.getElementById('expanded-card-eecu');

const toDoCard = document.getElementById('card-to-do');
const toDoCardExpanded = document.getElementById('expanded-card-to-do');

const looplessCard = document.getElementById('card-loopless');
const looplessCardExpanded = document.getElementById('expanded-card-loopless');

const animalCard = document.getElementById('card-animal');
const animalCardExpanded = document.getElementById('expanded-card-animal');

const blackHoldCard = document.getElementById('card-black-hole');
const blackHoldCardExpanded = document.getElementById('expanded-card-black-hole')

const expandedCardView = document.getElementById('large-card-holder');


eecuCard.addEventListener('click', () => {
    expandCard("eecu");
}, true);


eecuCardExpanded.addEventListener('click', () => {
    minimizeCard("eecu");
}, true);

toDoCard.addEventListener('click', () => {
    expandCard("to-do");
}, true);


toDoCardExpanded.addEventListener('click', () => {
    minimizeCard("to-do");
}, true);


looplessCard.addEventListener('click', () => {
    expandCard("loopless");
}, true);


looplessCardExpanded.addEventListener('click', () => {
    minimizeCard("loopless");
}, true);


animalCard.addEventListener('click', () => {
    expandCard("animal");
}, true);


animalCardExpanded.addEventListener('click', () => {
    minimizeCard("animal");
}, true);


blackHoldCard.addEventListener('click', () => {
    expandCard("black-hole");
}, true);


blackHoldCardExpanded.addEventListener('click', () => {
    minimizeCard("black-hole");
}, true);




function expandCard(project) {
    let expandedCard = document.getElementById('expanded-card-' + project);
    console.log(expandedCard);
    expandedCard.classList.remove('hidden');
    expandedCard.classList.add('shown');
    expandedCardView.classList.remove('inactive');
    console.log(expandedCard.classList);
    console.log(expandedCardView.classList);
}

function minimizeCard(project) {
    let expandedCard = document.getElementById('expanded-card-' + project);
    console.log(expandedCard);
    expandedCard.classList.add('hidden');
    expandedCard.classList.remove('shown');
    expandedCardView.classList.add('inactive');
    console.log(expandedCard.classList);
    console.log(expandedCardView.classList);
}

