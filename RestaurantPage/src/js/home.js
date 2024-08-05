import picture from '../sarang.jpg';

export default function makeHomeTab() {
    const homePage = document.createElement('div');
    homePage.classList.add('centered');

    const headline = document.createElement('h1');
    headline.textContent = 'Hello, this is the Restaurant homepage';
    
    const homePagePic = new Image();
    homePagePic.src = picture;

    homePage.appendChild(headline);
    homePage.appendChild(homePagePic);

    return homePage;
}