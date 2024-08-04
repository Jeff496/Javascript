import _ from 'lodash';
import testM from './test';

function component() {
    const element = document.createElement('div');;

    element.textContent = testM('banana');

    return element;
}

document.body.appendChild(component());
