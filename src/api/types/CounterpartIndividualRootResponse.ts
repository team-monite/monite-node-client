/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

/**
 * Represents counterparts that are individuals (natural persons).
 */
export interface CounterpartIndividualRootResponse {
    /** Unique ID of the counterpart. */
    id: string;
    /** Date and time when the counterpart was created. Timestamps follow the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
    created_at: string;
    /** Date and time when the counterpart was last updated. Timestamps follow the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
    updated_at: string;
    /** `true` if the counterpart was created automatically by Monite when processing incoming invoices with OCR. `false` if the counterpart was created by the API client. */
    created_automatically?: boolean;
    /** ID of the counterpart's billing address. If the counterpart is US-based and needs to accept ACH payments, this address must have all fields filled in. If `default_billing_address_id` is not defined, the default address is instead used as the billing address for ACH payments. */
    default_billing_address_id?: string;
    /** ID of the shipping address. */
    default_shipping_address_id?: string;
    /** Entity user ID of counterpart creator. */
    created_by_entity_user_id?: string;
    individual: Monite.CounterpartIndividualResponse;
    /** The language used to generate PDF documents for this counterpart. */
    language?: Monite.LanguageCodeEnum;
    reminders_enabled?: boolean;
    /** The counterpart's taxpayer identification number or tax ID. This field is required for counterparts that are non-VAT registered. */
    tax_id?: string;
    /** The counterpart type: `organization` (juridical person) or `individual` (natural person). */
    type: Monite.CounterpartType;
}
