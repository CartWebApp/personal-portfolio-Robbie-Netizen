const eecuCard = document.getElementById('card-eecu');
const eecuCardExpanded = document.getElementById('expanded-card-eecu')
const toDoCard = document.getElementById('card-to-do');
const todoCardExpanded = document.getElementById('expanded-card-to-do')
const looplessCard = document.getElementById('card-loopless');
const looplessCardExpanded = document.getElementById('expanded-card-loopless')
const animalCard = document.getElementById('card-animal');
const animalCardExpanded = document.getElementById('expanded-card-animal')
const blackHoldCard = document.getElementById('card-black-hole');
const blackHoleCardExpanded = document.getElementById('expanded-card-black-hole')

function expandCards() {
    let expandedCardName = "eecuCard" + "Expanded";
    console.log(expandedCardName)
    expandedCardName.classList.toggle("hidden");
    expandedCardName.classList.toggle("shown");
}

expandCards()







