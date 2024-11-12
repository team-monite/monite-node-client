/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../../../../../../index";

/**
 * @example
 *     {}
 */
export interface ExtraDataGetRequest {
    /**
     * Order by
     */
    order?: Monite.OrderEnum;
    /**
     * Max is 100
     */
    limit?: number;
    /**
     * A token, obtained from previous page. Prior over other filters
     */
    pagination_token?: string;
    /**
     * Allowed sort fields
     */
    sort?: Monite.ExportSettingCursorFields;
    created_at__gt?: string;
    created_at__lt?: string;
    created_at__gte?: string;
    created_at__lte?: string;
    updated_at__gt?: string;
    updated_at__lt?: string;
    updated_at__gte?: string;
    updated_at__lte?: string;
    object_id?: string;
    field_name?: string;
    field_value?: string;
}
