/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

/**
 * Represents a general ledger account retrieved from an accounting system.
 */
export interface LedgerAccountResponse {
    /** A unique identifier of the ledger account. */
    id: string;
    /** The currency of the ledger account, specified as a three-letter [currency code](https://docs.monite.com/references/currencies) (ISO 4217). */
    currency?: Monite.CurrencyEnum;
    /** The current balance in the account. */
    current_balance?: number;
    /** User-defined description of the ledger account. */
    description?: string;
    /** Indicates whether this ledger account represents a bank account. */
    is_bank_account: boolean;
    /** A user-defined name of the ledger account. Examples: Accounts Receivable, Office Equipment, Advertising, Salaries. */
    name: string;
    /** The account code in the accounting system. */
    nominal_code?: string;
    /** The status of the ledger account. Possible values: Active, Archived, Pending, Unknown. */
    status: string;
    /** The subtype or category of the ledger account. Possible values vary based on the accounting system used. Examples: Current, Fixed, Expense, Inventory, Equity. */
    subtype?: string;
    /** The type of the ledger account. It determines whether the account is a credit account or a debit account and where it appears in financial reports within the accounting system. Possible values: Asset, Equity, Expense, Income, Liability, Unknown. */
    type: string;
}
