/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

export interface ApprovalPolicyResource {
    /** The date and time (in the ISO 8601 format) when the approval policy becomes active. Only payables submitted for approval during the policy's active period will trigger this policy. If omitted or `null`, the policy is effective immediately. The value will be converted to UTC. */
    starts_at?: string;
    /** The date and time (in the ISO 8601 format) when the approval policy stops being active and stops triggering approval workflows.If `ends_at` is provided in the request, then `starts_at` must also be provided and `ends_at` must be later than `starts_at`. The value will be converted to UTC. */
    ends_at?: string;
    /** The name of the approval policy. */
    name: string;
    /** A brief description of the approval policy. */
    description: string;
    /** A list of JSON objects that represents the approval policy script. The script contains the logic that determines whether an action should be sent to approval. This field is required, and it should contain at least one script object. */
    script: Monite.ApprovalPolicyResourceScriptItem[];
    /** A JSON object that represents the trigger for the approval policy. The trigger specifies the event that will trigger the policy to be evaluated. */
    trigger?: Monite.ApprovalPolicyResourceTrigger;
    id: string;
    /** The current status of the approval policy. */
    status: Monite.ApprovalPolicyResourceStatus;
    created_at: string;
    updated_at: string;
    created_by: string;
    updated_by?: string;
}
