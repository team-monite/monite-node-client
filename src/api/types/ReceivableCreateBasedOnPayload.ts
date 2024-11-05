/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

export interface ReceivableCreateBasedOnPayload {
    /** The unique ID of a previous document related to the receivable if applicable. */
    based_on: string;
    /** A list of IDs of user-defined tags (labels) assigned to this receivable. */
    tag_ids?: string[];
    /** The type of a created receivable. Currently supported transitions:quote -> invoice; invoice -> credit_note */
    type: Monite.BasedOnTransitionType;
}