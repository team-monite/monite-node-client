/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

/**
 * This schema is used to create counterparts that are organizations (juridical persons).
 */
export interface CounterpartOrganizationRootCreatePayload {
    /** The language used to generate pdf documents for this counterpart. */
    language?: Monite.LanguageCodeEnum;
    organization: Monite.CounterpartOrganizationCreatePayload;
    reminders_enabled?: boolean;
    /** The counterpart's taxpayer identification number or tax ID. This field is required for counterparts that are non-VAT registered. */
    tax_id?: string;
}