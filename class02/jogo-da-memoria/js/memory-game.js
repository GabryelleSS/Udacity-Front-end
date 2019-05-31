    const memoryGame = (function() {

    let letters = document.querySelectorAll('li');
    let numberCardsPlays = document.querySelector('.moves');
    let containerTimer = document.querySelector('.timer');
    let contador = 1;

    function _timer(timer) {
        setInterval(function() {
            containerTimer.textContent = timer;
            timer++;

            // console.log(timer);
        }, 1000)
    }

    function _listLetters() {
        letters.forEach(function(letter) {
            letter.addEventListener('click', function() {
                letter.classList.toggle('--is-visible');
                if(contador === 1) {
                    _timer(1);
                }
                contador++
            });
            _quantityPlays(1);
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

                if(numberPlays === 1) {
                    numberCardsPlays.textContent = `${numberPlays} Move`;
                }
                else {
                    numberCardsPlays.textContent = `${numberPlays} Moves`;
                }
                // console.log(numberPlays)
                numberPlays++;
            })
        })
    }

    function _scoreStars() {
        let contadorDeCartas = 1;
        let starOne = document.querySelector('.star-one');
        let starOneNotSelectActive = document.querySelector('.star-one-not-select');

        let starTwo = document.querySelector('.star-two');
        let starTwoNotSelectActive = document.querySelector('.star-two-not-select');

        let starThree = document.querySelector('.star-three');
        let starThreeNotSelectActive = document.querySelector('.star-three-not-select');

        letters.forEach(function(letter) {
            letter.addEventListener('click', function() {
                if(contadorDeCartas  > 16) {
                    starOne.classList.add('--is-disable');
                    starOneNotSelectActive.classList.add('--is-active');
                } 
                if(contadorDeCartas > 24) {
                    starTwo.classList.add('--is-disable');
                    starTwoNotSelectActive.classList.add('--is-active');
                } 
                if(contadorDeCartas > 30) {
                    starThree.classList.add('--is-disable');
                    starThreeNotSelectActive.classList.add('--is-active');
                }
                contadorDeCartas++;
            })
        })
    }

    _scoreStars();

    function removeStars() {
        let stars = document.querySelectorAll('.star-complet');
        stars.forEach(function(star) {
            star.classList.remove('--is-visible');
            console.log(star)
        })
    }

    function _refresh() {
        let arrowRefresh = document.querySelector('.config-game');

        arrowRefresh.addEventListener('click', function() {
            letters.forEach(function(letter) {
                letter.classList.remove('--is-visible');
            })
            numberCardsPlays.textContent = " ";
            _quantityPlays(1);
            _mixLetters();
            removeStars();
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