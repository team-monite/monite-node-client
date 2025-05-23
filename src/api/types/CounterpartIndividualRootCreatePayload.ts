/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

/**
 * This schema is used to create counterparts that are individuals (natural persons).
 */
export interface CounterpartIndividualRootCreatePayload {
    /** A user-defined identifier of the counterpart. For example, the customer or vendor reference number in the entity's CRM system. If specified, it will be displayed in PDF invoices and other accounts receivable documents created by the entity. */
    external_reference?: string;
    individual: Monite.CounterpartIndividualCreatePayload;
    /** The language used to generate PDF documents for this counterpart. */
    language?: Monite.LanguageCodeEnum;
    reminders_enabled?: boolean;
    /** The counterpart's taxpayer identification number or tax ID. For identification purposes, this field may be required for counterparts that are not VAT-registered. */
    tax_id?: string;
}
