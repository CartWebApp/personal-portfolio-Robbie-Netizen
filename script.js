const eecuCard = document.getElementById('card-eecu');
const eecuCardExpanded = document.getElementById('expanded-card-eecu')
const toDoCard = document.getElementById('card-to-do');
const todoCardExpanded = document.getElementById('expanded-card-to-do')
const looplessCard = document.getElementById('card-loopless');
const looplessCardExpanded = document.getElementById('expanded-card-loopless')
const animalCard = document.getElementById('card-animal');
const animalCardExpanded = document.getElementById('expanded-card-animal')
const blackHoldCard = document.getElementById('card-black-hole');
const expandedCardView = document.getElementById('large-card-holder')


eecuCard.addEventListener('click', (eecu) => {
    expandCard("eecu");
});

eecuCardExpanded.addEventListener('click', (eecu) => {
    expandCard("eecu");
});

function expandCard(project) {
    let expandedCard = document.getElementById('expanded-card-' + project);
    console.log(expandedCard);
    expandedCard.classList.toggle('hidden');
    expandedCard.classList.toggle('shown');
    expandedCardView.classList.remove('inactive');
    console.log(expandedCard.classList);
    console.log(expandedCardView.classList);
}

function minimizeCard(project) {
    let expandedCard = document.getElementById('expanded-card-' + project);
    console.log(expandedCard);
    expandedCard.classList.toggle('hidden');
    expandedCard.classList.toggle('shown');
    expandedCardView.classList.remove('inactive');
    console.log(expandedCard.classList);
    console.log(expandedCardView.classList);
}