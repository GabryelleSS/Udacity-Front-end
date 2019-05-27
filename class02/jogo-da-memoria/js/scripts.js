const memoryGame = (function() {

    let cards = document.querySelectorAll('.letters');
    let quantityMoves = document.querySelector('span')
    let arrowRestart = document.querySelector('.reflash');
    let moves = 1;
    console.log(quantityMoves)

    cards.forEach(function(card) {
        card.addEventListener('click', function() {
            card.classList.toggle('--is-active');
        })
    })

    function quantityPlays() {
        cards.forEach(function(card) {
            card.addEventListener('click', function() {
                quantityMoves.textContent = `${moves} Moves`
                moves++;
            })
        })
    }

    function restartGame() {
        
    }

    quantityPlays();
}());