import {safeguard, isSupported, isUndefined, isNull} from '../../src/maybee';

document.addEventListener('DOMContentLoaded', () => {

    if (!isSupported()) {
        const headerNode = document.querySelector('h3');
        setTimeout(() => headerNode.classList.add('visible'), 0);
        return;
    }

    global.model = safeguard({ animal: 'Bee', month: 'May' });
    global.isNull = isNull;
    global.isUndefined = isUndefined;

});
