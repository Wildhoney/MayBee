import {safeguard, isSupported, isUndefined, isNull} from '../../src/maybee';
import moment from 'moment';

document.addEventListener('DOMContentLoaded', () => {

    if (!isSupported()) {
        const headerNode = document.querySelector('h3');
        setTimeout(() => headerNode.classList.add('visible'), 0);
        return;
    }

    const model = safeguard({ animal: 'Bee', month: { current: 'May' } });

    const write = text => {
        const ulNode = document.querySelector('.chalkboard');
        const liNode = document.createElement('li');
        liNode.innerHTML = `<span>${moment().format('h:mm:ss a')}:</span> ${text}`;
        ulNode.appendChild(liNode);
    };

    global.model = model;
    global.isNull = isNull;
    global.isUndefined = isUndefined;
    global.write = write;

    const headerStyle = 'color: #4096ee; font-weight: bold';
    const lineStyle = 'color: #666; font-weight: normal';
    const codeStyle = 'color: #ef6764; font-weight: bold';

    console.log('%cWelcome to the MayBee interactive console.', headerStyle);
    console.log('');
    console.log('%cYou are able to access the %cmodel%c, %cisNull %cand %cisUndefined %cvariables from the global scope', lineStyle, codeStyle, lineStyle, codeStyle, lineStyle, codeStyle, lineStyle);
    console.log('%cso that you can experiment with MayBee to your heart\'s desire!', lineStyle);
    console.log('');
    console.log('%cFor example, you can try writing: %cisUndefined(model.with.a.function().and.a.property)%c.', lineStyle, codeStyle, lineStyle);
    console.log('%cYou could also experiment with non-properties/functions in the DOM by using the %cwrite %cfunction!', lineStyle, codeStyle, lineStyle);
    console.log('%cTry it with: %cwrite(model.with.an.unknown.property) %cand see how it appears in the DOM.', lineStyle, codeStyle, lineStyle);
    console.log('%cAlso don\'t forget to ensure you can still access the model\'s properties: %cwrite(model.animal) %cand %cwrite(model.month.current)%c.', lineStyle, codeStyle, lineStyle, codeStyle, lineStyle);

    console.log('');
    console.log('%cLast of all: If you think you have found an issue then please raise an issue', lineStyle);
    console.log('%con GitHub: %chttps://github.com/Wildhoney/MayBee/issues', lineStyle, 'color: #5ba4ef; text-decoration: underline');
    console.log('');
    console.log('%cHappy tinkering!', headerStyle);

});
