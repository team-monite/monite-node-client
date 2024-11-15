/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

export interface CompleteVerificationResponse {
    /** Deprecated. Use bank_account_id instead. */
    id: string;
    /** Account holder's name */
    account_holder_name?: string;
    /** Account number (required if IBAN is not provided) */
    account_number?: string;
    bank_account_id: string;
    /** The name of the entity`s bank account. */
    bank_name?: string;
    /** The BIC of the entity`s bank account. */
    bic?: string;
    country?: Monite.AllowedCountries;
    currency?: Monite.CurrencyEnum;
    display_name?: string;
    /** The IBAN of the entity`s bank account. */
    iban?: string;
    /** Marks if a bank account should be used by default for the currency. Only 1 can be True for each currency. */
    is_default: boolean;
    /** Routing number (US) */
    routing_number?: string;
    /** Sort code (GB) */
    sort_code?: string;
    verifications: Monite.BankAccountVerifications;
    was_created_by_user_id?: string;
}
