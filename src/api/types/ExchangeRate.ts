/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

export interface ExchangeRate {
    base: Monite.CurrencyEnum;
    to: Monite.CurrencyEnum;
    rate: number;
}
