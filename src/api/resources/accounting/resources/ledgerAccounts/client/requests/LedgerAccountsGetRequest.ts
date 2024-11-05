/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../../../../../../index";

/**
 * @example
 *     {}
 */
export interface LedgerAccountsGetRequest {
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
    sort?: Monite.LedgerAccountCursorFields;
}