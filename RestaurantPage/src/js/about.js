export default function makeAboutTab() {
    const aboutPage = document.createElement('div');

    const aboutHeadline = document.createElement('h1');
    aboutHeadline.textContent = 'This is the about page';

    aboutPage.appendChild(aboutHeadline);

    return aboutPage;
}