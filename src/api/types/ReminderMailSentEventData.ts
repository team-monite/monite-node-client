/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

/**
 * Contains information about an invoice reminder sent via email.
 */
export interface ReminderMailSentEventData {
    /** ID of the email sending operation. Can be used to get the email sending status from `GET /receivables/{receivable_id}/mails/{mail_id}`. */
    mail_id: string;
    /** The overall email sending status across all recipients. */
    mail_status: Monite.ReceivableMailStatusEnum;
    /** Contains a list of email recipients (To, CC, BCC) and the email sending status for each recipient. */
    recipients: Monite.ReceivableMailRecipients;
    /**
     * Invoice reminder type:
     *
     * * `term_1` - [payment reminder](https://docs.monite.com/accounts-receivable/invoices/payment-reminders) sent before discount date 1,
     * * `term_2` - payment reminder sent before discount date 2,
     * * `term_final` - payment reminder sent before the invoice due date.
     * * `overdue` - [overdue reminder](https://docs.monite.com/accounts-receivable/invoices/overdue-reminders) sent after the due date.
     */
    term: Monite.ReminderTypeEnum;
}
