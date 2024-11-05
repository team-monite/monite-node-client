/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

export interface ReceivableFacadeCreateInvoicePayload {
    commercial_condition_description?: string;
    /** Address of invoicing, need to state as a separate fields for some countries if it differs from address of a company. */
    counterpart_billing_address_id: string;
    /** Different types of companies for different countries, ex. GmbH, SAS, SNC, etc. */
    counterpart_business_type?: string;
    counterpart_id: string;
    /** Address where goods were shipped / where services were provided. */
    counterpart_shipping_address_id?: string;
    /** Counterpart VAT ID id */
    counterpart_vat_id_id?: string;
    currency: Monite.CurrencyEnum;
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
    /**
     * The date when the goods are shipped or the service is provided.
     *
     * If omitted, defaults to the invoice issue date,
     * and the value is automatically set when the invoice status changes to `issued`.
     */
    fulfillment_date?: string;
    line_items: Monite.LineItem[];
    /** A note with additional information for a receivable */
    memo?: string;
    overdue_reminder_id?: string;
    /** Metadata for partner needs */
    partner_metadata?: Record<string, unknown>;
    /** Link to the invoice's payment page. Either Monite's payment links or your custom payment links. */
    payment_page_url?: string;
    payment_reminder_id?: string;
    payment_terms_id?: string;
    /** A project related to current receivable */
    project_id?: string;
    /** Contain purchase order number. */
    purchase_order?: string;
    /** A list of IDs of user-defined tags (labels) assigned to this receivable. */
    tag_ids?: string[];
    /** Trade name of the entity */
    trade_name?: string;
    /** The type of the document uploaded. */
    type: "invoice";
    /** Indicates whether the goods, materials, or services listed in the receivable are exempt from VAT or not. */
    vat_exempt?: boolean;
    /** The reason for the VAT exemption, if applicable. */
    vat_exemption_rationale?: string;
    /** Defines whether the prices of products in receivable will already include VAT or not. */
    vat_mode?: Monite.VatModeEnum;
    /** The amount of tax withheld in percent minor units */
    withholding_tax_rate?: number;
}