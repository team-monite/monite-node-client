/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../../../../index";

/**
 * @example
 *     {}
 */
export interface CreditNoteUpdateRequest {
    /** The total amount including taxes */
    amount?: number;
    /** ID of the payable this credit note is based on. The credit note will be linked to this payable */
    based_on?: string;
    /** The document ID of the original payable */
    based_on_document_id?: string;
    /** ID of the counterpart's address */
    counterpart_address_id?: string;
    /** ID of the counterpart's bank account */
    counterpart_bank_account_id?: string;
    /** ID of the counterpart */
    counterpart_id?: string;
    /** ID of the counterpart's VAT registration */
    counterpart_vat_id_id?: string;
    /** The currency code of the credit note */
    currency?: Monite.CurrencyEnum;
    /** An arbitrary description of this credit note */
    description?: string;
    /** A unique credit note number assigned by the credit note issuer for tracking purposes */
    document_id?: string;
    /** The date when the credit note was issued, in the YYYY-MM-DD format */
    issued_at?: string;
    /** The ID of the project this credit note belongs to */
    project_id?: string;
    /** Email address of the sender */
    sender?: string;
    /** The subtotal amount before taxes */
    subtotal?: number;
    /** List of tag IDs associated with this credit note */
    tag_ids?: string[];
    /** The tax percentage applied to the subtotal */
    tax?: number;
    /** The calculated tax amount */
    tax_amount?: number;
}
