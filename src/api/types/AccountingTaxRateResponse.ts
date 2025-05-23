/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

export interface AccountingTaxRateResponse {
    id: string;
    /** Code for the tax rate from the accounting platform. */
    code?: string;
    components?: Monite.TaxComponentResponse[];
    /** Effective tax rate in percent [minor units](https://docs.monite.com/references/currencies#minor-units). Example: 12.5% is 1250. */
    effective_tax_rate?: number;
    name?: string;
    status?: string;
    /** Total (not compounded) sum of the components of a tax rate in [minor units](https://docs.monite.com/references/currencies#minor-units). Example: 12.5% is 1250. */
    total_tax_rate?: number;
}
