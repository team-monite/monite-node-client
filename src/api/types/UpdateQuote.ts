/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

export interface UpdateQuote {
    /** Unique ID of the counterpart contact. */
    contact_id?: string;
    /** Address of invoicing, need to state as a separate fields for some countries if it differs from address of a company. */
    counterpart_billing_address_id?: string;
    /** Unique ID of the counterpart. */
    counterpart_id?: string;
    /** Address where goods were shipped / where services were provided. */
    counterpart_shipping_address_id?: string;
    /** Counterpart VAT ID id */
    counterpart_vat_id_id?: string;
    currency?: Monite.CurrencyEnum;
    /** The amount of tax deducted in minor units */
    deduction_amount?: number;
    /** A note with additional information about a tax deduction */
    deduction_memo?: string;
    /** The discount for a receivable. */
    discount?: Monite.Discount;
    entity?: Monite.ReceivableEntityBase;
    /** Entity bank account ID */
    entity_bank_account_id?: string;
    /** Entity VAT ID id */
    entity_vat_id_id?: string;
    /** The date (in ISO 8601 format) until which the quote is valid. */
    expiry_date?: string;
    /** Optional text displayed below the line items table in the PDF. */
    footer?: string;
    line_items?: Monite.LineItemUpdate[];
    /** A note with additional information for a receivable */
    memo?: string;
    /** Metadata for partner needs */
    partner_metadata?: Record<string, unknown>;
    /** Unique ID of the payment terms. */
    payment_terms_id?: string;
    /** A project related to current receivable */
    project_id?: string;
    /** Link for custom quote accept page */
    quote_accept_page_url?: string;
    /** Whether acceptance a quote requires a signature. */
    signature_required?: boolean;
    /** A list of IDs of user-defined tags (labels) assigned to this receivable. */
    tag_ids?: string[];
    /** Trade name of the entity */
    trade_name?: string;
    /** Indicates whether the goods, materials, or services listed in the receivable are exempt from VAT or not. */
    vat_exempt?: boolean;
    /** The reason for the VAT exemption, if applicable. */
    vat_exemption_rationale?: string;
    /** The amount of tax withheld in percent minor units */
    withholding_tax_rate?: number;
}
