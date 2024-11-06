/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface UpdateProductForCreditNote {
    /** The old price of the line item. Used to choose for which line item new price should be applied */
    old_price?: number;
    /** The price diff of the line item, i.e. applied discount */
    price_diff?: number;
    /** The quantity of each of the goods, materials, or services listed in the receivable. */
    quantity: number;
}
