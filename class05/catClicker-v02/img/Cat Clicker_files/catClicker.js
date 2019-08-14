const catClicker = (function() {
    const $numberClicker = document.querySelector('.numberClicker');
    let i = 0;

    function _drawCats(nameCat, elImg) {
        const containerCats = document.querySelector('.container-img-cat');

        const containerCat = document.createElement('div');
        containerCat.classList.add('cats');
        containerCats.appendChild(containerCat);

        const $nameCat = document.createElement('p');
        $nameCat.textContent = nameCat;
        containerCat.appendChild($nameCat);

        const $imgCat = document.createElement('img');
        $imgCat.classList.add('img-cat-clicker');
        containerCat.appendChild($imgCat);
        $imgCat.src = elImg;
        $imgCat.alt = "Cat";
    }

    function _numberClicker(cats) {
        const imgsCats = document.querySelectorAll(cats);

        imgsCats.forEach(function(cat) {
            cat.onclick = () => $numberClicker.textContent = i++;
        });
    }

    function init() {
        _numberClicker('.img-cat-clicker');
        _drawCats('Bolinha', 'img/cat.png');
        _drawCats('Bolinha', 'img/cat-two.png');
        _drawCats('Bolinha', 'img/cat-three.png');
        _drawCats('Bolinha', 'img/cat-four.png');
        _drawCats('Bolinha', 'img/cat-five.png');
    }

    return {
        init: init,
    }
}());