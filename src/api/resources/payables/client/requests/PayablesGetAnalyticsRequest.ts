/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../../../../index";

/**
 * @example
 *     {}
 */
export interface PayablesGetAnalyticsRequest {
    created_at__gt?: string;
    created_at__lt?: string;
    created_at__gte?: string;
    created_at__lte?: string;
    status?: Monite.PayableStateEnum;
    status__in?: Monite.PayableStateEnum | Monite.PayableStateEnum[];
    id__in?: string | string[];
    total_amount?: number;
    total_amount__gt?: number;
    total_amount__lt?: number;
    total_amount__gte?: number;
    total_amount__lte?: number;
    amount?: number;
    amount__gt?: number;
    amount__lt?: number;
    amount__gte?: number;
    amount__lte?: number;
    currency?: Monite.CurrencyEnum;
    counterpart_name?: string;
    counterpart_name__contains?: string;
    counterpart_name__icontains?: string;
    search_text?: string;
    due_date?: string;
    due_date__gt?: string;
    due_date__lt?: string;
    due_date__gte?: string;
    due_date__lte?: string;
    document_id?: string;
    document_id__contains?: string;
    document_id__icontains?: string;
    was_created_by_user_id?: string;
    counterpart_id?: string;
    source_of_payable_data?: Monite.SourceOfPayableDataEnum;
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
     * Search for a payable by the identifier of the project associated with it.
     */
    project_id?: string;
    /**
     * Search for a payable by the identifiers of the tags associated with it.
     */
    tag_ids?: string | string[];
}
