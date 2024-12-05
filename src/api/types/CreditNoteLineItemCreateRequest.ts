/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * Schema for creating a new credit note line item.
 */
export interface CreditNoteLineItemCreateRequest {
    /** Detailed description of the line item */
    description?: string;
    /** Name or title of the line item */
    name?: string;
    /** Quantity of items */
    quantity?: number;
    /** Subtotal amount before tax in smallest currency unit */
    subtotal?: number;
    /** Tax percentage */
    tax?: number;
    /** Tax amount in smallest currency unit */
    tax_amount?: number;
    /** Total amount including tax in smallest currency unit */
    total?: number;
    /** Unit of measurement */
    unit?: string;
    /** Price per unit in smallest currency unit (e.g. cents) */
    unit_price?: number;
}