/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

export interface PaymentReminderResponse {
    id: string;
    /** Time at which the PaymentReminder was created. Timestamps follow the ISO 8601 standard. */
    created_at: string;
    /** Time at which the PaymentReminder was last updated. Timestamps follow the ISO 8601 standard. */
    updated_at: string;
    entity_id: string;
    name: string;
    recipients?: Monite.Recipients;
    status: Monite.StatusEnum;
    /** Reminder to send for first payment term */
    term_1_reminder?: Monite.Reminder;
    /** Reminder to send for second payment term */
    term_2_reminder?: Monite.Reminder;
    /** Reminder to send for final payment term */
    term_final_reminder?: Monite.Reminder;
}
