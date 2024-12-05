/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../../../../index";

/**
 * @example
 *     {}
 */
export interface PurchaseOrdersGetRequest {
    /**
     * Sort order (ascending by default). Typically used together with the `sort` parameter.
     */
    order?: Monite.OrderEnum;
    /**
     * The number of items (0 .. 100) to return in a single page of the response. The response may contain fewer items if it is the last or only page.
     */
    limit?: number;
    /**
     * A pagination token obtained from a previous call to this endpoint. Use it to get the next or previous page of results for your initial query. If `pagination_token` is specified, all other query parameters are ignored and inferred from the initial query.
     *
     * If not specified, the first page of results will be returned.
     */
    pagination_token?: string;
    /**
     * The field to sort the results by. Typically used together with the `order` parameter.
     */
    sort?: Monite.PurchaseOrderCursorFields;
    created_at__gt?: string;
    created_at__lt?: string;
    created_at__gte?: string;
    created_at__lte?: string;
    updated_at__gt?: string;
    updated_at__lt?: string;
    updated_at__gte?: string;
    updated_at__lte?: string;
    issued_at__gt?: string;
    issued_at__lt?: string;
    issued_at__gte?: string;
    issued_at__lte?: string;
    status?: Monite.PurchaseOrderStatusEnum;
    document_id?: string;
    document_id__in?: string | string[];
    created_by?: string;
    counterpart_id?: string;
    counterpart_id__in?: string | string[];
    "counterpart.name"?: string;
    currency?: Monite.CurrencyEnum;
    currency__in?: Monite.CurrencyEnum | Monite.CurrencyEnum[];
}
