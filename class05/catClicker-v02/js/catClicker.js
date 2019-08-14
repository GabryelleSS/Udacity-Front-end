const catClicker = (function() {
    function _drawCats(imgCat) {
        const menuCats = document.querySelector('.menu-cats');
        const $containerCats = document.querySelector('.container');

        // const obj = [ 
        //     {name: 'gatinho', img: 'img/cat.jpg'},
        //     {name: 'Bolinho', img: 'img/cat.jpg'},
        // ]

        // const markup = `<li>
        //         ${obj.map(cat => (`<span>${cat.name}</span>`))}
        // </li>`
        // console.log(markup);
        

        // $containerCats.innerHTML = markup;
        
        const $containerCats = document.createElement('div');
        $containerCats.classList.add('block-cat');
        menuCats.appendChild($containerCats);

        const $div = document.createElement('div');
        $div.classList.add('info-cat');
        $containerCats.appendChild($div);

        const $imgCats = document.createElement('img');
        $imgCats.classList.add('img-cat');
        $imgCats.src = imgCat;
        $imgCats.alt = "Cat";
        $div.appendChild($imgCats);

        const $list = document.createElement('ul');
        $div.appendChild($list);

        const $name = document.createElement('li');
        $name.classList.add('name-cat');
        $name.textContent = 'Bolinha';
        $list.appendChild($name);

        const $idade = document.createElement('li');
        $idade.classList.add('age-cat');
        $idade.textContent = 2;
        $list.appendChild($idade);

        const $click = document.createElement('li');
        $click.classList.add('number-click');
        $click.textContent = `Numero de clicks 10`;
        $list.appendChild($click);

        const openContent = document.createElement('div');
        openContent.classList.add('btn-open-content');
        $containerCats.appendChild(openContent);

        const $btnCat = document.createElement('button');
        $btnCat.textContent = 'Sobre o gato';
        openContent.appendChild($btnCat);
    }

    function init() {
        _drawCats('img/cat-two.png');
        _drawCats('img/cat-two.png');
        _drawCats('img/cat-two.png');
        _drawCats('img/cat-two.png');
    }
    return {
        init: init,
    }
}());