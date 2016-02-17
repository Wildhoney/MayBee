/**
 * @constant IS_UNDEFINED
 * @type {Symbol}
 */
const IS_UNDEFINED = Symbol('undefined');

/**
 * @constant IS_NULL
 * @type {Symbol}
 */
const IS_NULL = Symbol('null');

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
 * @method cursor
 * @param {Object} cursor
 * @param {*} defaultValue
 * @return {Proxy}
 */
const wrap = (cursor, defaultValue) => {

    return new Proxy(cursor, {

        /**
         * @method get
         * @param {Object} target
         * @param {String} property
         * @return {*}
         */
        get: (target, property) => {

            switch (property) {
                case 'valueOf': return () => defaultValue;
            }

            const value = target[property];

            if (typeof value === 'undefined') {
                return wrap({}, IS_UNDEFINED);
            }

            if (value === null) {
                return wrap({}, IS_NULL);
            }

            return target[property];

        }

    });

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

    return wrap(cursor);

};

/**
 * @method isUndefined
 * @param {Proxy} proxy
 * @return {Boolean}
 */
export const isUndefined = proxy => {
    return proxy.valueOf() === IS_UNDEFINED;
};

/**
 * @method isNull
 * @param {Proxy} proxy
 * @return {Boolean}
 */
export const isNull = proxy => {
    return proxy.valueOf() === IS_NULL;
};
