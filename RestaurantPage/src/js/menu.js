export default function makeMenuTab() {
    const menuPage = document.createElement('div');

    const menuHeadline = document.createElement('h1');
    menuHeadline.textContent = 'This is the menu';

    menuPage.appendChild(menuHeadline);

    return menuPage;
}