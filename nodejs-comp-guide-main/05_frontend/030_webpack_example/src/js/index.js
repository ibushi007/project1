import '../scss/style.scss';
import { plusNumber } from './plusNumber.js';
import isOdd from 'is-odd';

const obj = {
    display() {
        const num = plusNumber(1, 6);

        const oddy = isOdd(num) ? 'add' : 'even';
        const el = document.createElement('h2');

        el.textContent = `Number: ${num} is ${oddy}`;

        document.body.prepend(el);
    }
};

obj?.display();

