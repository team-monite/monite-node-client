/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

export interface ApprovalRequestCreateByUserRequest {
    object_id: string;
    object_type: Monite.ObjectType;
    required_approval_count: number;
    user_ids: string[];
}
