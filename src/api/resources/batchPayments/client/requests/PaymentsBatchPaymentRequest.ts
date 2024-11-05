/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../../../../index";

/**
 * @example
 *     {
 *         payer_bank_account_id: "payer_bank_account_id",
 *         payment_intents: [{
 *                 object: {
 *                     id: "id",
 *                     type: "payable"
 *                 },
 *                 recipient: {
 *                     id: "id",
 *                     type: "counterpart"
 *                 }
 *             }]
 *     }
 */
export interface PaymentsBatchPaymentRequest {
    payer_bank_account_id: string;
    payment_intents: Monite.SinglePaymentIntent[];
}
