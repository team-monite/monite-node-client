/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../../../../index";

/**
 * @example
 *     {}
 */
export interface GetPayableCreditNotesIdLineItemsRequest {
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
    sort?: Monite.CreditNoteLineItemCursorFields;
    created_at__gt?: string;
    created_at__lt?: string;
    created_at__gte?: string;
    created_at__lte?: string;
    name?: string;
    name__iexact?: string;
    name__contains?: string;
    name__icontains?: string;
    description?: string;
    description__contains?: string;
    description__icontains?: string;
    total__gt?: number;
    total__lt?: number;
    total__gte?: number;
    total__lte?: number;
    subtotal__gt?: number;
    subtotal__lt?: number;
    subtotal__gte?: number;
    subtotal__lte?: number;
    unit_price__gt?: number;
    unit_price__lt?: number;
    unit_price__gte?: number;
    unit_price__lte?: number;
    quantity__gt?: number;
    quantity__lt?: number;
    quantity__gte?: number;
    quantity__lte?: number;
    tax__gt?: number;
    tax__lt?: number;
    tax__gte?: number;
    tax__lte?: number;
    tax_amount__gt?: number;
    tax_amount__lt?: number;
    tax_amount__gte?: number;
    tax_amount__lte?: number;
    created_by_user_id?: string;
    unit?: string;
    unit__iexact?: string;
    source?: string;
    source_id?: string;
}
