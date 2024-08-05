export default function makeMenuTab() {
    const menuPage = document.createElement('div');
    menuPage.classList.add('centered');

    const menuHeadline = document.createElement('h1');
    menuHeadline.textContent = 'This is the menu page';

    menuPage.appendChild(menuHeadline);

    return menuPage;
}