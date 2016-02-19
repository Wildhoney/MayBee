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
         * @return {Proxy|*}
         */
        get: (target, property) => {

            switch (property) {

                /**
                 * @property valueOf
                 * @return {Function}
                 */
                case 'valueOf': return () => defaultValue;

                /**
                 * @property Symbol.toPrimitive
                 * @return {String}
                 */
                case Symbol.toPrimitive: return () => '';

            }

            const value = target[property];

            switch (value) {
                case undefined: return wrap(() => {}, IS_UNDEFINED);
                case null: return wrap(() => {}, IS_NULL);
            }

            return target[property];

        },

        /**
         * @method apply
         * @return {Proxy}
         */
        apply: () => {
            return wrap(() => {}, IS_UNDEFINED);
        },

        /**
         * @property Symbol.toPrimitive
         * @return {String}
         */
        [Symbol.toPrimitive]: () => ''

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
 * @method valueOf
 * @param {String} property
 * @return {*}
 */
const valueOf = property => {

    if (typeof Object(property).valueOf === 'function') {
        return Object(property).valueOf();
    }

    return property;

};

/**
 * @method isSupported
 * @return {Boolean}
 */
export const isSupported = () => {
    return 'Proxy' in global;
};

/**
 * @method isUndefined
 * @param {*} value
 * @return {Boolean}
 */
export const isUndefined = value => {
    return valueOf(value) === IS_UNDEFINED;
};

/**
 * @method isNull
 * @param {*} value
 * @return {Boolean}
 */
export const isNull = value => {
    return valueOf(value) === IS_NULL;
};
