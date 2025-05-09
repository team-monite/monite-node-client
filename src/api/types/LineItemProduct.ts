/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

export interface LineItemProduct {
    /** Unique ID of the product. */
    id: string;
    /** Unique identifier of the accounting tax rate object. */
    accounting_tax_rate_id?: string;
    /** Description of the product. */
    description?: string;
    /** Indicates whether the product is inline */
    is_inline?: boolean;
    ledger_account_id?: string;
    measure_unit?: Monite.LineItemProductMeasureUnit;
    /** Name of the product. */
    name: string;
    price: Monite.Price;
    price_after_vat: Monite.Price;
    /** The smallest amount allowed for this product. */
    smallest_amount?: number;
    /** Specifies whether this offering is a product or service. This may affect the applicable tax rates. */
    type?: Monite.ProductServiceTypeEnum;
    vat_rate: Monite.LineItemProductVatRate;
}
