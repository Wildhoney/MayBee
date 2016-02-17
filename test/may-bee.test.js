import {safeguard} from '../src/may-bee';

const TYPE_CAT = Symbol('cat');

const person = {
    name: 'Adam',
    age: 30,
    pets: [
        { name: 'Kipper', type: TYPE_CAT },
        { name: 'Busters', type: TYPE_CAT },
        { name: 'Miss Kittens', type: TYPE_CAT }
    ],
    petNames: function() {
        return this.pets.map(pet => pet.name).join(', ');
    }
};

it('Should be able to throw an exception when safeguarding a non-object;', () => {
    expect(() => safeguard('Adam')).toThrow(new Error('MayBee: Cannot safeguard non-objects.'));
    expect(() => safeguard(30)).toThrow(new Error('MayBee: Cannot safeguard non-objects.'));
    expect(() => safeguard(Symbol('Kipper'))).toThrow(new Error('MayBee: Cannot safeguard non-objects.'));
});

it('Should be able to access properties on the object;', () => {

    const model = safeguard(person);

    expect(model.name).toEqual('Adam');
    expect(model.age).toEqual(30);

    expect(model.pets[0].name).toEqual('Kipper');
    expect(model.pets[1].name).toEqual('Busters');
    expect(model.pets[2].name).toEqual('Miss Kittens');

    expect(model.pets[0].type).toEqual(TYPE_CAT);
    expect(model.pets[1].type).toEqual(TYPE_CAT);
    expect(model.pets[2].type).toEqual(TYPE_CAT);

    expect(model.petNames()).toEqual('Kipper, Busters, Miss Kittens');

});
