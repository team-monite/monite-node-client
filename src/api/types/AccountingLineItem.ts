/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

/**
 * Contains the details of an invoice line item retrieved from an accounting system.
 */
export interface AccountingLineItem {
    /** The name or description of the product or service being invoiced. */
    description?: string;
    /** Discount amount for this line item (if any). */
    discount_amount?: number;
    /** Discount percentage for this line item (if any). */
    discount_percentage?: number;
    /** ID of the ledger account associated with this line item. You can use `GET /ledger_accounts/{ledger_account_id}` to get further details about this ledger account. */
    ledger_account_id?: string;
    /** The quantity of the product or service. */
    quantity?: number;
    /** An internal reference to the tax rate in the accounting system that the line item is linked to. */
    tax_rate_ref?: Monite.AccountingRefObject;
    /** The cost per unit of the product or service. */
    unit_amount?: number;
}
