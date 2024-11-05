/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../../../../../../index";

/**
 * @example
 *     {
 *         country: "AF",
 *         value: "123456789"
 *     }
 */
export interface EntityVatId {
    country: Monite.AllowedCountries;
    type?: Monite.VatIdTypeEnum;
    value: string;
}