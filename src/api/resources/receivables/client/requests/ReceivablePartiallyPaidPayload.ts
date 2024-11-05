/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * @example
 *     {
 *         amount_paid: 1
 *     }
 */
export interface ReceivablePartiallyPaidPayload {
    /** How much has been paid on the invoice (in minor units). */
    amount_paid: number;
    /** Optional comment explaining how the payment was made. */
    comment?: string;
}
