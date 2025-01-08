/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../../../../index";

/**
 * @example
 *     {
 *         metric: "id",
 *         aggregation_function: "count"
 *     }
 */
export interface GetAnalyticsPayablesRequest {
    dimension?: Monite.PayableDimensionEnum;
    metric: Monite.PayableMetricEnum;
    aggregation_function: Monite.AggregationFunctionEnum;
    date_dimension_breakdown?: Monite.DateDimensionBreakdownEnum;
    /**
     * Return only payables created in Monite after the specified date and time. The value must be in the ISO 8601 format YYYY-MM-DDThh:mm[:ss[.ffffff]][Z|±hh:mm].
     */
    created_at__gt?: string;
    /**
     * Return only payables created in Monite before the specified date and time.
     */
    created_at__lt?: string;
    /**
     * Return only payables created in Monite on or after the specified date and time.
     */
    created_at__gte?: string;
    /**
     * Return only payables created in Monite before or on the specified date and time.
     */
    created_at__lte?: string;
    /**
     * Return only payables that have the specified [status](https://docs.monite.com/accounts-payable/payables/index).
     *
     * To query multiple statuses at once, use the `status__in` parameter instead.
     */
    status?: Monite.PayableStateEnum;
    /**
     * Return only payables that have the specified [statuses](https://docs.monite.com/accounts-payable/payables/index).
     *
     * To specify multiple statuses, repeat this parameter for each value: `status__in=draft&status__in=new`
     */
    status__in?: Monite.PayableStateEnum | Monite.PayableStateEnum[];
    /**
     * Return only payables with specified IDs. Valid but nonexistent IDs do not raise errors but produce no results.
     *
     * To specify multiple IDs, repeat this parameter for each value: `id__in=<id1>&id__in=<id2>`
     */
    id__in?: string | string[];
    /**
     * Return only payables with the exact specified total amount. The amount must be specified in the minor units of currency. For example, $12.5 is represented as 1250.
     */
    total_amount?: number;
    /**
     * Return only payables whose total amount (in minor units) exceeds the specified value.
     */
    total_amount__gt?: number;
    /**
     * Return only payables whose total amount (in minor units) is less than the specified value.
     */
    total_amount__lt?: number;
    /**
     * Return only payables whose total amount (in minor units) is greater than or equal to the specified value.
     */
    total_amount__gte?: number;
    /**
     * Return only payables whose total amount (in minor units) is less than or equal to the specified value.
     */
    total_amount__lte?: number;
    /**
     * Return only payables with the specified amount.
     */
    amount?: number;
    /**
     * Return only payables whose amount (in minor units) exceeds the specified value.
     */
    amount__gt?: number;
    /**
     * Return only payables whose amount (in minor units) is less than the specified value.
     */
    amount__lt?: number;
    /**
     * Return only payables whose amount (in minor units) is greater than or equal to the specified value.
     */
    amount__gte?: number;
    /**
     * Return only payables whose amount (in minor units) is less than or equal to the specified value.
     */
    amount__lte?: number;
    /**
     * Return only payables that use the specified currency.
     */
    currency?: Monite.CurrencyEnum;
    /**
     * Return only payables received from counterparts with the specified name (exact match, case-sensitive).
     *
     * For counterparts of `type = individual`, the full name is formatted as `first_name last_name`.
     */
    counterpart_name?: string;
    /**
     * Return only payables received from counterparts whose name contains the specified string (case-sensitive).
     */
    counterpart_name__contains?: string;
    /**
     * Return only payables received from counterparts whose name contains the specified string (case-insensitive).
     */
    counterpart_name__icontains?: string;
    /**
     * Apply the `icontains` condition to search for the specified text in the `document_id` and `counterpart_name` fields in the payables.
     */
    search_text?: string;
    /**
     * Return payables that are due on the specified date (YYYY-MM-DD)
     */
    due_date?: string;
    /**
     * Return payables that are due after the specified date (exclusive, YYYY-MM-DD).
     */
    due_date__gt?: string;
    /**
     * Return payables that are due before the specified date (exclusive, YYYY-MM-DD).
     */
    due_date__lt?: string;
    /**
     * Return payables that are due on or after the specified date (YYYY-MM-DD).
     */
    due_date__gte?: string;
    /**
     * Return payables that are due before or on the specified date (YYYY-MM-DD).
     */
    due_date__lte?: string;
    /**
     * Return a payable with the exact specified document number (case-sensitive).
     *
     * The `document_id` is the user-facing document number such as INV-00042, not to be confused with Monite resource IDs (`id`).
     */
    document_id?: string;
    /**
     * Return only payables whose document number (`document_id`) contains the specified string (case-sensitive).
     */
    document_id__contains?: string;
    /**
     * Return only payables whose document number (`document_id`) contains the specified string (case-insensitive).
     */
    document_id__icontains?: string;
    /**
     * Return only payables created in Monite by the entity user with the specified ID.
     */
    was_created_by_user_id?: string;
    /**
     * Return only payables received from the counterpart with the specified ID.
     *
     * Counterparts that have been deleted but have associated payables will still return results here because the payables contain a frozen copy of the counterpart data.
     *
     * If the specified counterpart ID does not exist and never existed, no results are returned.
     */
    counterpart_id?: string;
    /**
     * Return only payables coming from the specified source.
     */
    source_of_payable_data?: Monite.SourceOfPayableDataEnum;
    /**
     * Return only payables with specific OCR statuses.
     */
    ocr_status?: Monite.OcrStatusEnum;
    /**
     * Search for a payable by the identifier of the line item associated with it.
     */
    line_item_id?: string;
    /**
     * Search for a payable by the identifier of the purchase order associated with it.
     */
    purchase_order_id?: string;
    /**
     * Return only payables assigned to the project with the specified ID.
     *
     * Valid but nonexistent project IDs do not raise errors but return no results.
     */
    project_id?: string;
    /**
     * Return only payables whose `tags` include at least one of the tags with the specified IDs. Valid but nonexistent tag IDs do not raise errors but produce no results.
     */
    tag_ids?: string | string[];
}
