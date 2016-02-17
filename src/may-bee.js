/**
 * @constant UNDEFINED
 * @type {Symbol}
 */
const UNDEFINED = Symbol('undefined');

/**
 * @constant NULL
 * @type {Symbol}
 */
const NULL = Symbol('null');

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

/**
 * @method isUndefined
 * @param {Proxy} proxy
 * @return {Boolean}
 */
export const isUndefined = proxy => {
    return proxy.valueOf() === UNDEFINED;
};

/**
 * @method isNull
 * @param {Proxy} proxy
 * @return {Boolean}
 */
export const isNull = proxy => {
    return proxy.valueOf() === NULL;
};
