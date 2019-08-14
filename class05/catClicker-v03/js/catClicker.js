const catClicker = (function() {

    const _cats = [
        {
            name: 'Amora',
            age: 2,
            clickers: 0,
            imgSrc: 'img/cat.png',
            imgAlt: 'cat',
        },
        {
            name: 'Bolinha',
            age: 1,
            clickers: 0,
            imgSrc: 'img/cat-two.png',
            imgAlt: 'cat',
        },
        {
            name: 'Python',
            age: 8,
            clickers: 0,
            imgSrc: 'img/cat-three.png',
            imgAlt: 'cat',
        },
        {
            name: 'Vader',
            age: 5,
            clickers: 0,
            imgSrc: 'img/cat-four.png',
            imgAlt: 'cat',
        },
        {
            name: 'Rick',
            age: 12,
            clickers: 0,
            imgSrc: 'img/cat-five.png',
            imgAlt: 'cat',
        },
    ]

    function _drawCat({ cat, container }) {
        
        if(!container) {
            return;
        }

        const { name, age, clickers, imgSrc, imgAlt } = cat;

        const catHTML = 
            `<div class="cat">
                <img src="${imgSrc}" alt="${imgAlt}">
                <ul class="info-cats">
                    <li class="name">Nome: ${name}</li>
                    <li class="age">Idade: ${age}</li>
                    <li class="clickers">Quantidades de clickers: ${parseInt(clickers)}</li>
                </ul>
                <div>
                    <button class="btn">Sobre o gato</button>
                </div>
            </div>`;

        container.innerHTML += catHTML;
    }

    function init(menuCat, containerCats) {
        _cats.forEach(cat => {
            _drawCat({
                cat,
                container: document.querySelector(menuCat)
            })
        });
    }

    return {
        init,
    }
}());