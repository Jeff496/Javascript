function populateHeader(obj) {
    const header = document.querySelector('header');
    const newH1 = document.createElement('h1');
    newH1.textContent = obj.squadName;
    header.appendChild(newH1);

    const newPara = document.createElement('p');
    newPara.textContent = `Hometown: ${obj.homeTown} //Formed: ${obj.formed}`;
    header.appendChild(newPara);
}

function populateHeroes(obj) {
    const section = document.querySelector('section');
    const heroes = obj.members;

    for (const hero of heroes) {
        const newArticle = document.createElement('article');
        const newH2 = document.createElement('h2');
        const newPara1 = document.createElement('p');
        const newPara2 = document.createElement('p');
        const newPara3 = document.createElement('p');
        const newUl = document.createElement('ul');

        newH2.textContent = hero.name;
        newPara1.textContent = `Secret identity: ${hero.secretIdentity}`;
        newPara2.textContent = `Age: ${hero.age}`;
        newPara3.textContent = 'Superpowers:';

        const superPowers = hero.powers;
        for (const power of superPowers) {
            const newLi = document.createElement('li');
            newLi.textContent = power;
            newUl.appendChild(newLi);
        }

        newArticle.appendChild(newH2);
        newArticle.appendChild(newPara1);
        newArticle.appendChild(newPara2);
        newArticle.appendChild(newPara3);
        newArticle.appendChild(newUl);

        section.appendChild(newArticle);
    }
}

async function populate() {
    const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    const request = new Request(requestURL);

    const response = await fetch(request);
    const superheroes = await response.json();

    populateHeader(superheroes);
    populateHeroes(superheroes);
}

populate();