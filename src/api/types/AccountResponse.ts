/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

export interface AccountResponse {
    id: string;
    bank_accounts?: Monite.BankAccount[];
    type: Monite.PaymentAccountType;
}
