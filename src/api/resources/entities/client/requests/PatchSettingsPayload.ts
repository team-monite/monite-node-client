/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../../../../index";

/**
 * @example
 *     {}
 */
export interface PatchSettingsPayload {
    language?: Monite.LanguageCodeEnum;
    currency?: Monite.CurrencySettingsInput;
    reminder?: Monite.RemindersSettings;
    /** Defines whether the prices of products in receivables will already include VAT or not. */
    vat_mode?: Monite.VatModeEnum;
    /** Defines whether the amount discounts (for percentage discounts it does not matter) on VAT inclusive invoices will be applied on amounts including VAT or excluding VAT. */
    vat_inclusive_discount_mode?: Monite.VatModeEnum;
    /** Payment preferences for entity to automate calculating suggested payment date based on payment terms and entity preferences. */
    payment_priority?: Monite.PaymentPriorityEnum;
    /** Automatically attempt to find a corresponding purchase order for all incoming payables. */
    allow_purchase_order_autolinking?: boolean;
    receivable_edit_flow?: Monite.ReceivableEditFlow;
    document_ids?: Monite.DocumentIDsSettingsRequest;
    /** Auto tagging settings for all incoming OCR payable documents. */
    payables_ocr_auto_tagging?: Monite.OcrAutoTaggingSettingsRequest[];
    /** Sets the default behavior of whether a signature is required to accept quotes. */
    quote_signature_required?: boolean;
    /**
     * This setting affects how PDF is generated for paid accounts receivable invoices. If set to `true`, once an invoice is fully paid its PDF version is updated to display the amount paid and the payment-related features are removed.
     *
     * The PDF file gets regenerated at the moment when an invoice becomes paid. It is not issued as a separate document, and the original PDF invoice is no longer available.
     *
     * This field is deprecated and will be replaced by `document_rendering.invoice.generate_paid_invoice_pdf`.
     */
    generate_paid_invoice_pdf?: boolean;
    accounting?: Monite.AccountingSettings;
    /** If enabled, the approval policy will be skipped and the payable will be moved to `waiting_to_be_paid` status. */
    payables_skip_approval_flow?: boolean;
    /** Settings for rendering documents in PDF format. */
    document_rendering?: Monite.DocumentRenderingSettings;
}
