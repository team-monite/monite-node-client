/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../../../../index";

/**
 * @example
 *     {}
 */
export interface OverdueReminderUpdateRequest {
    name?: string;
    recipients?: Monite.Recipients;
    /** Overdue reminder terms to send for payment */
    terms?: Monite.OverdueReminderTerm[];
}
