/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

/**
 * A schema represents address info of the entity
 */
export interface EntityAddressSchema {
    /** A city (a full name) where the entity is registered */
    city: string;
    /** A country name (as ISO code) where the entity is registered */
    country: Monite.AllowedCountries;
    /** A street where the entity is registered */
    line1: string;
    /** An alternative street used by the entity */
    line2?: string;
    /** A postal code of the address where the entity is registered */
    postal_code: string;
    /** State, county, province, prefecture, region, or similar component of the entity's address. For US entities, `state` is required and must be a two-letter [USPS state abbreviation](https://pe.usps.com/text/pub28/28apb.htm), for example, NY or CA. */
    state?: string;
}
