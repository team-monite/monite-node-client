/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type CounterpartTagCategory =
    | "document_type"
    | "department"
    | "project"
    | "cost_center"
    | "vendor_type"
    | "payment_method"
    | "approval_status";

export const CounterpartTagCategory = {
    DocumentType: "document_type",
    Department: "department",
    Project: "project",
    CostCenter: "cost_center",
    VendorType: "vendor_type",
    PaymentMethod: "payment_method",
    ApprovalStatus: "approval_status",
} as const;
