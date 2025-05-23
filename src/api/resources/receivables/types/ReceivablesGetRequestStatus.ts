/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type ReceivablesGetRequestStatus =
    | "draft"
    | "issuing"
    | "issued"
    | "failed"
    | "accepted"
    | "expired"
    | "declined"
    | "recurring"
    | "partially_paid"
    | "paid"
    | "overdue"
    | "uncollectible"
    | "canceled";
export const ReceivablesGetRequestStatus = {
    Draft: "draft",
    Issuing: "issuing",
    Issued: "issued",
    Failed: "failed",
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
