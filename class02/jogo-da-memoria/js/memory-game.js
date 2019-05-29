const memoryGame = (function() {

    let letters = document.querySelectorAll('li');
    let  numberCardsPlays = document.querySelector('span');
    let containerTimer = document.querySelector('.timer');
    let contador = 1;

    function _lastTimer(timer) {
        setInterval(function() {
            containerTimer.textContent = timer;
            timer++;

            console.log(timer);
        }, 1000)
    }

    function _listLetters() {
        letters.forEach(function(letter) {
            letter.addEventListener('click', function() {
                letter.classList.toggle('--is-visible');
                if(contador === 1) {
                    _lastTimer(1);
                }
                contador++
            });
            _quantityPlays(0);
        });
    }

    function _mixLetters() {
        letters.forEach(function(letter) {
            let ramdomCartas = Math.floor(Math.random() * 16) + 1;

            letter.style.order = ramdomCartas;
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

    function _refresh() {
        let arrowRefresh = document.querySelector('.config-game');

        arrowRefresh.addEventListener('click', function() {
            letters.forEach(function(letter) {
                letter.classList.remove('--is-visible');
            })
            numberCardsPlays.textContent = " ";
            _quantityPlays(0);
            _mixLetters();
        })
    }

    function init() {
        _mixLetters();
        _listLetters();
        _refresh();
    }

    return {
        init,
    }
}());