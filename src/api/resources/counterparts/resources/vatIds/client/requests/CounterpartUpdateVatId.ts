/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../../../../../../index";

/**
 * @example
 *     {}
 */
export interface CounterpartUpdateVatId {
    country?: Monite.AllowedCountries;
    type?: Monite.VatIdTypeEnum;
    value?: string;
}
