/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type ReceivablesGetRequestStatusInItem =
    | "draft"
    | "issued"
    | "accepted"
    | "expired"
    | "declined"
    | "recurring"
    | "partially_paid"
    | "paid"
    | "overdue"
    | "uncollectible"
    | "canceled";

export const ReceivablesGetRequestStatusInItem = {
    Draft: "draft",
    Issued: "issued",
    Accepted: "accepted",
    Expired: "expired",
    Declined: "declined",
    Recurring: "recurring",
    PartiallyPaid: "partially_paid",
    Paid: "paid",
    Overdue: "overdue",
    Uncollectible: "uncollectible",
    Canceled: "canceled",
} as const;
