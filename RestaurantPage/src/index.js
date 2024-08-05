import './styles.css';
import makeHomeTab from './js/home';
import makeMenuTab from './js/menu';
import makeAboutTab from './js/about';

function clearContent() {
    const content = document.getElementById('content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

function switchTab(otherTab) {
    clearContent();
    const content = document.getElementById('content');
    content.appendChild(otherTab());
}

document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.querySelector('button:nth-of-type(1)');
    const menuButton = document.querySelector('button:nth-of-type(2)');
    const aboutButton = document.querySelector('button:nth-of-type(3)');

    homeButton.addEventListener('click', () => switchTab(makeHomeTab));
    menuButton.addEventListener('click', () => switchTab(makeMenuTab));
    aboutButton.addEventListener('click', () => switchTab(makeAboutTab));

    switchTab(makeHomeTab);
});