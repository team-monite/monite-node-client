/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type WebhookObjectType =
    | "account"
    | "accounting_connection"
    | "approval"
    | "approval_request"
    | "approval_policy"
    | "approval_policy_process"
    | "batch_payment"
    | "comment"
    | "counterpart"
    | "counterpart_address"
    | "counterpart_bank_account"
    | "counterpart_contact_person"
    | "counterpart_partner_metadata"
    | "counterpart_tax_id"
    | "entity"
    | "entity_bank_account"
    | "entity_settings"
    | "entity_user"
    | "export"
    | "overdue_reminder"
    | "partner_settings"
    | "payable"
    | "payables_credit_note"
    | "payables_purchase_order"
    | "payable.line_item"
    | "payment"
    | "payment_intent"
    | "payment_link"
    | "payment_reminder"
    | "product"
    | "project"
    | "receivable"
    | "recurrence"
    | "role"
    | "tag"
    | "todo_task"
    | "workflow"
    | "workflow_pipeline"
    | "ocr_task"
    | "delivery_note";
export const WebhookObjectType = {
    Account: "account",
    AccountingConnection: "accounting_connection",
    Approval: "approval",
    ApprovalRequest: "approval_request",
    ApprovalPolicy: "approval_policy",
    ApprovalPolicyProcess: "approval_policy_process",
    BatchPayment: "batch_payment",
    Comment: "comment",
    Counterpart: "counterpart",
    CounterpartAddress: "counterpart_address",
    CounterpartBankAccount: "counterpart_bank_account",
    CounterpartContactPerson: "counterpart_contact_person",
    CounterpartPartnerMetadata: "counterpart_partner_metadata",
    CounterpartTaxId: "counterpart_tax_id",
    Entity: "entity",
    EntityBankAccount: "entity_bank_account",
    EntitySettings: "entity_settings",
    EntityUser: "entity_user",
    Export: "export",
    OverdueReminder: "overdue_reminder",
    PartnerSettings: "partner_settings",
    Payable: "payable",
    PayablesCreditNote: "payables_credit_note",
    PayablesPurchaseOrder: "payables_purchase_order",
    PayableLineItem: "payable.line_item",
    Payment: "payment",
    PaymentIntent: "payment_intent",
    PaymentLink: "payment_link",
    PaymentReminder: "payment_reminder",
    Product: "product",
    Project: "project",
    Receivable: "receivable",
    Recurrence: "recurrence",
    Role: "role",
    Tag: "tag",
    TodoTask: "todo_task",
    Workflow: "workflow",
    WorkflowPipeline: "workflow_pipeline",
    OcrTask: "ocr_task",
    DeliveryNote: "delivery_note",
} as const;
