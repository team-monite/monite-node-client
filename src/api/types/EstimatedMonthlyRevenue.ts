/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

export interface EstimatedMonthlyRevenue {
    /** The amount of the monthly revenue, in [minor units](https://docs.monite.com/references/currencies#minor-units). For example, $12.50 is represented as 1250. */
    amount?: number;
    /** [Currency code](https://docs.monite.com/references/currencies) of the revenue. */
    currency?: Monite.CurrencyEnum;
}
