/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../../../../index";

/**
 * @example
 *     {}
 */
export interface UpdateRecurrencePayload {
    /**
     * Controls how invoices are processed when generated:
     * - "draft": Creates invoices in draft status, requiring manual review, issuing, and sending
     * - "issue": Automatically issues invoices but requires manual sending
     * - "issue_and_send": Fully automates the process (creates, issues, and sends invoices)
     *
     * Default: "issue" (or "issue_and_send" if subject_text and body_text are provided)
     *
     * Note: When using "issue_and_send", both subject_text and body_text must be provided.
     */
    automation_level?: Monite.AutomationLevel;
    body_text?: string;
    day_of_month?: Monite.DayOfMonth;
    end_month?: number;
    end_year?: number;
    recipients?: Monite.Recipients;
    subject_text?: string;
}
