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
export interface GetAnalyticsCreditNotesRequest {
    dimension?: Monite.CreditNoteDimensionEnum;
    metric: Monite.CreditNoteMetricEnum;
    aggregation_function: Monite.AggregationFunctionEnum;
    date_dimension_breakdown?: Monite.DateDimensionBreakdownEnum;
    /**
     * The number of items (0 .. 400) to return in a single page of the response. The response may contain fewer items if it is the last or only page.
     */
    limit?: number;
    created_at__gt?: string;
    created_at__lt?: string;
    created_at__gte?: string;
    created_at__lte?: string;
    issued_at?: string;
    issued_at__gt?: string;
    issued_at__lt?: string;
    issued_at__gte?: string;
    issued_at__lte?: string;
    document_id?: string;
    document_id__iexact?: string;
    document_id__contains?: string;
    document_id__icontains?: string;
    has_file?: boolean;
    total_amount__gt?: number;
    total_amount__lt?: number;
    total_amount__gte?: number;
    total_amount__lte?: number;
    subtotal__gt?: number;
    subtotal__lt?: number;
    subtotal__gte?: number;
    subtotal__lte?: number;
    based_on?: string;
    counterpart_id?: string;
    created_by_entity_user_id?: string;
    status?: Monite.PayableCreditNoteStateEnum;
    status__in?: Monite.PayableCreditNoteStateEnum | Monite.PayableCreditNoteStateEnum[];
    status__not_in?: Monite.PayableCreditNoteStateEnum | Monite.PayableCreditNoteStateEnum[];
    origin?: Monite.OriginEnum;
    currency?: Monite.CurrencyEnum;
    project_id?: string;
    project_id__in?: string | string[];
}
