/**
 * @method throwError
 * @param {String} message
 * @return {void}
 * @throws {Error}
 */
const throwError = message => {
    throw new Error(`MayBee: ${message}.`);
};

/**
 * @method safeguard
 * @param {Object} cursor
 * @return {Proxy}
 */
export const safeguard = cursor => {

    if (typeof cursor !== 'object') {
        return void throwError('Cannot safeguard non-objects');
    }

};
