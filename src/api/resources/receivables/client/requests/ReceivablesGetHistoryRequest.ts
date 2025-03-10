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
    /**
     * Return only the specified [event types](https://docs.monite.com/accounts-receivable/document-history#event-types). To include multiple types, repeat this parameter for each value:
     * `event_type__in=receivable_updated&event_type__in=status_changed`
     */
    event_type__in?: Monite.ReceivableHistoryEventTypeEnum | Monite.ReceivableHistoryEventTypeEnum[];
    /**
     * Return only events caused by the entity users with the specified IDs. To specify multiple user IDs, repeat this parameter for each ID:
     * `entity_user_id__in=<user1>&entity_user_id__in=<user2>`
     */
    entity_user_id__in?: string | string[];
    /**
     * Return only events that occurred after the specified date and time. The value must be in the ISO 8601 format `YYYY-MM-DDThh:mm[:ss[.ffffff]][Z|±hh:mm]`.
     */
    timestamp__gt?: string;
    /**
     * Return only events that occurred before the specified date and time.
     */
    timestamp__lt?: string;
    /**
     * Return only events that occurred on or after the specified date and time.
     */
    timestamp__gte?: string;
    /**
     * Return only events that occurred before or on the specified date and time.
     */
    timestamp__lte?: string;
}
