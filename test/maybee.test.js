import {safeguard, isUndefined, isNull} from '../src/maybee';

const TYPE_CAT = Symbol('cat');
const PERSON_TYPE = Symbol('person');

const person = {
    name: 'Adam',
    age: 30,
    born: null,
    type: PERSON_TYPE,
    createdDateTime: new Date(),
    names: {
        getNameAndAge: () => {
            return `Adam is 30 years old`;
        },
        customNameAndAge(name) {
            return age => `${name} is ${age} years old`;
        }
    },
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
    expect(model.type).toEqual(PERSON_TYPE);
    expect(model.createdDateTime instanceof Date).toBeTruthy();

    expect(model.pets[0].name).toEqual('Kipper');
    expect(model.pets[1].name).toEqual('Busters');
    expect(model.pets[2].name).toEqual('Miss Kittens');

    expect(model.pets[0].type).toEqual(TYPE_CAT);
    expect(model.pets[1].type).toEqual(TYPE_CAT);
    expect(model.pets[2].type).toEqual(TYPE_CAT);

    expect(model.petNames()).toEqual('Kipper, Busters, Miss Kittens');
    expect(model.names.getNameAndAge()).toEqual('Adam is 30 years old');
    expect(model.names.customNameAndAge('Maria')(24)).toEqual('Maria is 24 years old');

});

it('Should be able to deduce when properties are undefined/null;', () => {

    const model = safeguard(person);

    expect(isUndefined(model.location)).toBeTruthy();
    expect(isUndefined(model.born.in.which.country)).toBeTruthy();
    expect(isNull(model.born)).toBeTruthy();

    expect(isUndefined(model.name)).toBeFalsy();
    expect(isNull(model.age)).toBeFalsy();
    expect(isNull(Object.create(null))).toBeFalsy();

});

it('Should not throw type errors when chaining properties and functions;', () => {

    const model = safeguard(person);

    expect(isUndefined(model.property.does.not.exist)).toBeTruthy();
    expect(isUndefined(model.function.does.not.exist())).toBeTruthy();
    expect(isUndefined(model.property().does.not.exist)).toBeTruthy();
    expect(isUndefined(model.function().does().not().exist())).toBeTruthy();

});
