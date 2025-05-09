/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface TaxComponentResponse {
    /** A flag to indicate with the tax is calculated using the principle of compounding. */
    is_compound?: boolean;
    name?: string;
    /** Component tax rate in percent [minor units](https://docs.monite.com/references/currencies#minor-units). Example: 12.5% is 1250. */
    rate?: number;
}
