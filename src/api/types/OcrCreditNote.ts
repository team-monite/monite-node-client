/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

export interface OcrCreditNote {
    document_number?: string;
    original_invoice_number?: string;
    issue_date?: string;
    currency?: Monite.CurrencyEnum;
    subtotal?: number;
    tax_rate?: number;
    tax_amount?: number;
    total_amount?: number;
    sender: Monite.OcrCounterpartDetails;
    recipient: Monite.OcrCounterpartDetails;
    line_items: Monite.OcrLineItem[];
}
