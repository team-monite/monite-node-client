/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {}
 */
export interface CreditNoteLineItemUpdateRequest {
    /** Detailed description of the line item */
    description?: string;
    /** Name or title of the line item */
    name?: string;
    /** Quantity of items */
    quantity?: number;
    /** Subtotal amount before tax */
    subtotal?: number;
    /** Tax percentage */
    tax?: number;
    /** Tax amount */
    tax_amount?: number;
    /** Total amount including tax */
    total?: number;
    /** Unit of measurement */
    unit?: string;
    /** Price per unit in smallest currency unit */
    unit_price?: number;
}