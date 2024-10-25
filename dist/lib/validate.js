import { isValid } from "date-fns";
import { isNumeric } from "./number.js";
const emptyValues = [null, undefined, "", "null", "undefined"];
const invalidValues = [...emptyValues, false, 0, "false", "0"];
/**
 *
 * @param value
 * @deprecated move to validate.number
 * @returns
 */
export function validateNumber(value) {
    if (isNumeric(Number(value))) {
        return Number(value);
    }
    return 0;
}
/**
 *
 * @param value
 * @deprecated move to validate.empty
 * @returns
 */
export function validateEmpty(value) {
    if (emptyValues.includes(value)) {
        return null;
    }
    return value;
}
/**
 *
 * @param value
 * @deprecated move to validate.boolean
 * @returns
 */
export function validateBoolean(value) {
    if (invalidValues.includes(value)) {
        return false;
    }
    return true;
}
export class validate {
    /**
     *
     * @param value
     * @returns
     */
    static number(value) {
        if (isNumeric(Number(value))) {
            return Number(value);
        }
        return 0;
    }
    /**
     *
     * @param value
     * @returns
     */
    static empty(value) {
        if (emptyValues.includes(value)) {
            return null;
        }
        return value;
    }
    /**
     *
     * @param value
     * @returns
     */
    static boolean(value) {
        if (invalidValues.includes(value)) {
            return false;
        }
        return true;
    }
    /**
     *
     * @param value
     * @returns
     */
    static isDate(value) {
        if (value == null) {
            return false;
        }
        const valueDate = value instanceof Date ? value : new Date(value);
        return isValid(valueDate);
    }
}
