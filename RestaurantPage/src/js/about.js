export default function makeAboutTab() {
    const aboutPage = document.createElement('div');
    aboutPage.classList.add('centered');

    const aboutHeadline = document.createElement('h1');
    aboutHeadline.textContent = 'This is the about page';

    aboutPage.appendChild(aboutHeadline);

    return aboutPage;
}