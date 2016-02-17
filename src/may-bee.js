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
 * @method guard
 * @param {Object} cursor
 * @return {Proxy}
 */
export const safeguard = cursor => {

    if (typeof cursor !== 'object') {
        return void throwError('Cannot safeguard non-objects');
    }

    return new Proxy(cursor, {

        /**
         * @method get
         * @param {Object} target
         * @param {String} property
         * @return {*}
         */
        get: (target, property) => {
            return target[property];
        }

    });

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
