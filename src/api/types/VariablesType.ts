/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type VariablesType =
    | "quote"
    | "invoice"
    | "credit_note"
    | "discount_reminder"
    | "final_reminder"
    | "overdue_reminder";

export const VariablesType = {
    Quote: "quote",
    Invoice: "invoice",
    CreditNote: "credit_note",
    DiscountReminder: "discount_reminder",
    FinalReminder: "final_reminder",
    OverdueReminder: "overdue_reminder",
} as const;