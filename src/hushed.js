/**
 * @property NULL
 * @type {Symbol}
 */
export const NULL = Symbol('isNull');

/**
 * @property UNDEFINED
 * @type {Symbol}
 */
export const UNDEFINED = Symbol('isUndefined');

/**
 * @method guard
 * @param {Object} x
 * @return {Proxy}
 */
export const guard = x => new Proxy(x);

/**
 * @method isNull
 * @param {Proxy} x
 * @return {Boolean}
 */
export const isNull = x => false;

/**
 * @method isUndefined
 * @param {Proxy} x
 * @return {Boolean}
 */
export const isUndefined = x => false;
