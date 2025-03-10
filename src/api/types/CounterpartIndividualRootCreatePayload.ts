/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

/**
 * This schema is used to create counterparts that are individuals (natural persons).
 */
export interface CounterpartIndividualRootCreatePayload {
    individual: Monite.CounterpartIndividualCreatePayload;
    /** The language used to generate PDF documents for this counterpart. */
    language?: Monite.LanguageCodeEnum;
    reminders_enabled?: boolean;
    /** The counterpart's taxpayer identification number or tax ID. For identification purposes, this field may be required for counterparts that are not VAT-registered. */
    tax_id?: string;
}
