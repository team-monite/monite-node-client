/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

/**
 * Address information.
 */
export interface CounterpartRawAddressUpdateRequest {
    /** City name. */
    city?: string;
    /** Two-letter ISO country code ([ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)). */
    country?: Monite.AllowedCountries;
    /** Street address. */
    line1?: string;
    /** Additional address information (if any). */
    line2?: string;
    /** ZIP or postal code. */
    postal_code?: string;
    /** State, region, province, or county. */
    state?: string;
}
