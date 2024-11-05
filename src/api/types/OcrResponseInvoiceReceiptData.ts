/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

export interface OcrResponseInvoiceReceiptData {
    /** Total in cents/eurocents. Outdated, actual conversion happens in payables. */
    total?: number;
    /** Total, without minor units */
    total_raw?: number;
    /** Subtotal cents/eurocents. Outdated, actual conversion happens in payables. */
    total_excl_vat?: number;
    /** Subtotal, without minor units */
    total_excl_vat_raw?: number;
    /** VAT amount in cents. Outdated, actual conversion happens in payables. */
    total_vat_amount?: number;
    /** VAT amount, without minor units */
    total_vat_amount_raw?: number;
    /** VAT Percent minor units. Example: 12.5% is 1250. Outdated, actual conversion happens in payables. */
    total_vat_rate?: number;
    /** VAT Percent raw, without minor units. */
    total_vat_rate_raw?: number;
    /** ISO 4217 currency code */
    currency?: string;
    /** Purchase Order Number */
    purchase_order_number?: string;
    /** Counterpart name */
    counterpart_name?: string;
    /** Counterpart address */
    counterpart_address?: string;
    /** Counterpart bank ID */
    counterpart_account_id?: string;
    /** Invoice/receipt ID */
    document_id?: string;
    /** Raw payment terms parsed but not calculated. */
    payment_terms_raw?: string[];
    /** Tax payer ID */
    tax_payer_id?: string;
    /** Counterpart VAT ID */
    counterpart_vat_id?: string;
    /** Document issuance date in ISO format */
    document_issued_at_date?: string;
    /** Document due date in ISO format */
    document_due_date?: string;
    /** Counterpart address as a json object compatible with counterparts service */
    counterpart_address_object?: Monite.OcrAddress;
    /** The bank account number */
    counterpart_account_number?: string;
    /** The bank routing number */
    counterpart_routing_number?: string;
    /** List of line items from document. Outdated, actual conversion happens in payables. */
    line_items?: Monite.OcrResponseInvoiceReceiptLineItem[];
    /** List of line items from document raw, without minor units conversion. */
    line_items_raw?: Monite.OcrResponseInvoiceReceiptLineItemRaw[];
}