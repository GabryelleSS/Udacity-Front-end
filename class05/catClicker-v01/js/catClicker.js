const catClicker = (function() {
    const $numberClicker = document.querySelector('.numberClicker');
    let i = 0;

    function createElCats(nameCat, elImg) {
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

    function _drawCats(functionCreateElCats) {
        functionCreateElCats('Bolinha', 'img/cat.png');
        functionCreateElCats('Bolinha', 'img/cat-two.png');
        functionCreateElCats('Bolinha', 'img/cat-three.png');
        functionCreateElCats('Bolinha', 'img/cat-four.png');
        functionCreateElCats('Bolinha', 'img/cat-five.png');
    }

    function _numberClicker(cats) {
        const imgsCats = document.querySelectorAll(cats);

        imgsCats.forEach(function(cat) {
            cat.onclick = () => $numberClicker.textContent = i++;
        });
    }

    function init() {
        _drawCats(createElCats);
        _numberClicker('.img-cat-clicker');
    }

    return {
        init: init,
        createElCats: createElCats,
    }
}());