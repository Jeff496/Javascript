import _ from 'lodash';
import testM from './test';
import './style.css';
import cuteDog from './sarang.jpg';

function component() {
    const element = document.createElement('div');
    const para = document.createElement('p');

    element.textContent = testM('banana');
    para.textContent = _.join(['hello', 'webpack'], ' ');
    element.appendChild(para);

    para.classList.add('notFruit');

    const icon = new Image();
    icon.src = cuteDog;

    element.appendChild(icon);

    return element;
}

document.body.appendChild(component());
