const memoryGame = (function() {

    let letters = document.querySelectorAll('li');
    let  numberCardsPlays = document.querySelector('span');

    function _listLetters() {
        letters.forEach(function(letter) {
            letter.addEventListener('click', function() {
                letter.classList.toggle('--is-visible');
            })
            _quantityPlays(0);
        })
    }

    function _quantityPlays(numberPlays) {
        letters.forEach(function(letter) {
            letter.addEventListener('click', function() {
                numberPlays++;

                if(numberPlays === 1) {
                    numberCardsPlays.textContent = `${numberPlays} Move`;
                }
                else {
                    numberCardsPlays.textContent = `${numberPlays} Moves`;
                }
            })
        })
    }

    function _lastUpdate() {
        let containerTimer = document.querySelector('.timer');
        let timer = 1;

        setInterval(function() {
            containerTimer.textContent = timer;

            timer++;
        }, 1000)
    }

    function _refresh() {
        let arrowRefresh = document.querySelector('.config-game');

        arrowRefresh.addEventListener('click', function() {
            letters.forEach(function(letter) {
                letter.classList.remove('--is-visible');
            })
            numberCardsPlays.textContent = " ";
            _quantityPlays(0);
        })
    }

    function init() {
        _listLetters();
        _refresh();
        _lastUpdate();
    }

    return {
        init,
    }
}());