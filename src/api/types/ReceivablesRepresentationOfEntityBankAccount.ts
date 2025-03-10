/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface ReceivablesRepresentationOfEntityBankAccount {
    /** Unique ID of the entity bank account. */
    id?: string;
    /** Account holder's name */
    account_holder_name?: string;
    /** Account number (required if IBAN is not provided) */
    account_number?: string;
    /** The name of the entity's bank account. */
    bank_name?: string;
    /** The BIC of the entity's bank account. */
    bic?: string;
    /** The IBAN of the entity's bank account. */
    iban?: string;
    /** Routing number (US) */
    routing_number?: string;
    /** Sort code (GB) */
    sort_code?: string;
}
