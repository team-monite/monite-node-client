/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../../../../index";

/**
 * @example
 *     {}
 */
export interface UpdateRoleRequest {
    /** Role name */
    name?: string;
    /** Access permissions */
    permissions?: Monite.BizObjectsSchema;
}
