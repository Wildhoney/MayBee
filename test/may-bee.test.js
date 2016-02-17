import {safeguard} from '../src/may-bee';

it('Can result to true', () => {
    expect(typeof safeguard).toBe('function');
});