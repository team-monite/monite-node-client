/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../../../../index";

/**
 * @example
 *     {}
 */
export interface ReceivablesGetHistoryRequest {
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
    sort?: Monite.ReceivableHistoryCursorFields;
    event_type__in?: Monite.ReceivableHistoryEventTypeEnum | Monite.ReceivableHistoryEventTypeEnum[];
    entity_user_id__in?: string | string[];
    timestamp__gt?: string;
    timestamp__lt?: string;
    timestamp__gte?: string;
    timestamp__lte?: string;
}
