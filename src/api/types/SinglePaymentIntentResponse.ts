/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

export interface SinglePaymentIntentResponse {
    id: string;
    created_at: string;
    amount: number;
    currency: Monite.CurrencyEnum;
    error?: Record<string, unknown>;
    object: Monite.PaymentObjectPayable;
    payment_reference: string;
    recipient: Monite.PaymentIntentsRecipient;
    status: string;
}