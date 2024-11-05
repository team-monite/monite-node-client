/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type QuoteStateEnum = "draft" | "issued" | "accepted" | "expired" | "declined" | "deleted";

export const QuoteStateEnum = {
    Draft: "draft",
    Issued: "issued",
    Accepted: "accepted",
    Expired: "expired",
    Declined: "declined",
    Deleted: "deleted",
} as const;