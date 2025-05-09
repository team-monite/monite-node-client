/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

export interface CounterpartRawData {
    /** The address of the vendor or supplier. */
    address?: Monite.CounterpartRawAddress;
    /** Object representing counterpart bank account. */
    bank_account?: Monite.CounterpartRawBankAccount;
    /** The email address of the organization */
    email?: string;
    /** Vendor or supplier name. */
    name?: string;
    /** The phone number of the organization */
    phone?: string;
    /** The tax id of the counterpart. */
    tax_id?: string;
    /** VAT ID of the vendor or supplier which was used in the invoice. */
    vat_id?: Monite.CounterpartRawVatId;
}
