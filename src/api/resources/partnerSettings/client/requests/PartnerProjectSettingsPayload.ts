/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../../../../index";

/**
 * @example
 *     {}
 */
export interface PartnerProjectSettingsPayload {
    /** Settings for the accounting module. */
    accounting?: Monite.AccountingSettings;
    /** Default API version for partner. */
    api_version?: Monite.ApiVersion;
    /** Commercial conditions for receivables. */
    commercial_conditions?: string[];
    /** Custom currency exchange rates. */
    currency?: Monite.CurrencySettings;
    /** A default role to provision upon new entity creation. */
    default_role?: Record<string, unknown>;
    /** Settings for the e-invoicing module. */
    einvoicing?: Monite.EInvoicingSettingsPayload;
    /** Settings for email and mailboxes. */
    mail?: Monite.MailSettingsPayload;
    /** Settings for the payables module. */
    payable?: Monite.PayableSettingsPayload;
    /** Settings for the payments module. */
    payments?: Monite.PaymentsSettingsPayload;
    /** Settings for the receivables module. */
    receivable?: Monite.ReceivableSettingsPayload;
    /** Measurement units. */
    units?: Monite.Unit[];
    website?: string;
}
