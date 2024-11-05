/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

export interface PaymentIntentResponse {
    id: string;
    updated_at: string;
    amount: number;
    application_fee_amount?: number;
    batch_payment_id?: string;
    currency: string;
    invoice?: Monite.Invoice;
    object?: Monite.PaymentObject;
    payer?: Monite.AccountResponse;
    payment_link_id?: string;
    payment_methods: Monite.MoniteAllPaymentMethodsTypes[];
    payment_reference?: string;
    provider?: string;
    recipient: Monite.RecipientAccountResponse;
    selected_payment_method?: Monite.MoniteAllPaymentMethodsTypes;
    status: string;
}