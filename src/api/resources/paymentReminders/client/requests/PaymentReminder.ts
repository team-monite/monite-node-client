/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../../../../index";

/**
 * @example
 *     {
 *         name: "name"
 *     }
 */
export interface PaymentReminder {
    name: string;
    recipients?: Monite.Recipients;
    /** Reminder to send for first payment term */
    term_1_reminder?: Monite.Reminder;
    /** Reminder to send for second payment term */
    term_2_reminder?: Monite.Reminder;
    /** Reminder to send for final payment term */
    term_final_reminder?: Monite.Reminder;
}
