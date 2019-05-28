const memoryGame = (function() {

    let letters = document.querySelectorAll('li');
    let numberPlays = 0;

    function _listLetters() {
        letters.forEach(function(letter) {
            letter.addEventListener('click', function() {
                letter.classList.toggle('--is-visible');
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