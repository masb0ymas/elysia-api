import _ from "lodash";
/**
 *
 * @param value
 * @returns
 */
export function isNumeric(value) {
    return !_.isNaN(parseFloat(value)) && _.isFinite(value);
}
