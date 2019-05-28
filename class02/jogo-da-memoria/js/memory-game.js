const memoryGame = (function() {

    let letters = document.querySelectorAll('li');
    let numberPlays = 0;

    function _listLetters() {
        letters.forEach(function(letter) {
            letter.addEventListener('click', function() {
                letter.classList.toggle('--is-visible');
            })
        })
        _quantityPlays();
    }

    function _quantityPlays() {
        let numberCardsPlays = document.querySelector('span')
        letters.forEach(function(letter) {
            letter.addEventListener('click', function() {
                numberPlays++;

                if(numberPlays > 1) {
                    numberCardsPlays.textContent = `${numberPlays} Moves`
                }
                else {
                    numberCardsPlays.textContent = `${numberPlays} Move`
                }
            })
        })
    }

    function init() {
        _listLetters();
    }

    return {
        init,
    }
}());