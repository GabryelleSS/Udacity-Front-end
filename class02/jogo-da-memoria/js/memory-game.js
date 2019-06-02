const memoryGame = (function() {

    let cards = document.querySelectorAll('li');
    let numberCardsPlays = document.querySelector('.moves');
    let containerTimer = document.querySelector('.timer');
    let cardsVisibles= document.querySelectorAll('.cards.--is-visible');
    let modalWinner = document.querySelector('.modal-winner');
    let contador = 1;
    let contadorDeCartas = 1;
    let time = 0;
    let interval;

    function _clearTimer() {
        if(_refresh) {
            clearInterval(interval);
            time = 0;
            containerTimer.textContent = time;
            contador = 1;
        }
    }
    
    function _listCards() {
        cards.forEach(function(card) {
            card.addEventListener('click', function() {

                if(cardsVisibles.length == 2){
                    _refreshCards();
                }

                card.classList.toggle('--is-visible');
                cardsVisibles = document.querySelectorAll('.cards.--is-visible');
                
                if(cardsVisibles.length == 2) {
                    let iguais = (
                        cardsVisibles[0].querySelector('i').className == cardsVisibles[1].querySelector('i').className
                    )

                    if(iguais) {
                        cardsVisibles.forEach(function(cardVisible) {
                            cardVisible.classList.add('--is-correct');
                        })
                    }
                }

                if(!document.querySelectorAll('.cards:not(.--is-correct)').length) {
                    let containerGame = document.querySelector('.container-game');
                    let totalTime = document.querySelector('.total-time');
                    let totalScore = document.querySelector('.total-score');
                    
                    modalWinner.classList.add('--is-active');
                    containerGame.appendChild(modalWinner);

                    totalTime.textContent = `Tempo: ${containerTimer.textContent}`;
                    totalScore.textContent = `Pontuação: ${numberCardsPlays.textContent}`;
                }
                
                if(contador == 1) {
                    _timer();
                }
                contador++;
            });
        });
        _quantityPlays(1);
        tryAgain();
    }

    function tryAgain() {
        let btnTryAgain = document.querySelector('.btn-try-again');

        btnTryAgain.addEventListener('click', function() {
            _refreshCards();
            _mixcards();
            numberCardsPlays.textContent = " ";
            contadorDeCartas = 1;
            _quantityPlays(1);
            _refreshStars();
            _clearTimer();
            _refreshCardsSelect();
            modalWinner.classList.remove('--is-active');
        }) 
    }

    function _timer() {
        interval = setInterval(function() {
            containerTimer.textContent = time;
            time++;
        }, 1000)
    }
   

    function _mixcards() {
        cards.forEach(function(card) {
            let ramdomCartas = Math.floor(Math.random() * 16) + 1;

            card.style.order = ramdomCartas;
        })
    }

    function _quantityPlays(numberPlays) {
        cards.forEach(function(card) {
            card.onclick = function() {
                if(numberPlays === 1) {
                    numberCardsPlays.textContent = `${numberPlays} Move`;
                }
                else {
                    numberCardsPlays.textContent = `${numberPlays} Moves`;
                }
                numberPlays++;
            }
        })
    }

    function _scoreStars() {
        let starOne = document.querySelector('.star-one');
        let starOneNotSelectActive = document.querySelector('.star-one-not-select');

        let starTwo = document.querySelector('.star-two');
        let starTwoNotSelectActive = document.querySelector('.star-two-not-select');

        let starThree = document.querySelector('.star-three');
        let starThreeNotSelectActive = document.querySelector('.star-three-not-select');

        cards.forEach(function(card) {
            card.addEventListener('click', function() {
                if(contadorDeCartas > 30) {
                    starThree.classList.add('--is-disable');
                    starThreeNotSelectActive.classList.add('--is-active');
                }
                else if(contadorDeCartas > 24) {
                    starTwo.classList.add('--is-disable');
                    starTwoNotSelectActive.classList.add('--is-active');
                } 
                else if(contadorDeCartas  > 16) { 
                    starOne.classList.add('--is-disable');
                    starOneNotSelectActive.classList.add('--is-active');
                }
                contadorDeCartas++;
            })
        })
    }

    function _refreshStars() {
        let stars = document.querySelectorAll('.star-complet');
        stars.forEach(function(star) {
            star.classList.remove('--is-disable');
            star.classList.remove('--is-active');
        })
    }
    
    function _refreshCards() {
        cards.forEach(function(card) {
            card.classList.remove('--is-visible');
        })
    }

    function _refreshCardsSelect() {
        cards.forEach(function(card) {
            card.classList.remove('--is-correct');
        })
    }

    function _refresh() {
        let arrowRefresh = document.querySelector('.refrash');

        arrowRefresh.addEventListener('click', function() {
            _refreshCards();
            _mixcards();
            numberCardsPlays.textContent = " ";
            contadorDeCartas = 1;
            _quantityPlays(1);
            _refreshStars();
            _clearTimer();
            _refreshCardsSelect();
        })
    }

    function initGame() {
        _mixcards();
        _listCards();
        _refresh();
        _scoreStars();  
    }

    return {
        initGame,
    }
}());