/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

export interface BankAccount {
    id: string;
    account_holder_name?: string;
    account_number?: string;
    bic?: string;
    country?: Monite.AllowedCountries;
    currency?: Monite.CurrencyEnum;
    display_name?: string;
    iban?: string;
    is_default?: boolean;
    /** Display name of a bank account */
    name?: string;
    sort_code?: string;
    was_created_by_user_id?: string;
}