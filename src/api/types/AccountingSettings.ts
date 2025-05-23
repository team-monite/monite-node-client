/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

export interface AccountingSettings {
    /** Default ledger accounts that will be used for various objects pushed into an accounting system. Use `GET /ledger_accounts` to get the IDs of these ledger accounts. */
    ledger_account_ids?: Monite.DefaultLedgerAccountIDs;
    /** Default accounting tax IDs that will be used for various objects pushed into an accounting system. Use `GET /accounting_tax_rates` to get the IDs of these taxes. */
    tax_ids?: Monite.DefaultAccountingTaxIDs;
}
