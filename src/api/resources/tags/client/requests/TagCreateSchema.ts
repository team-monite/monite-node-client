/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../../../../index";

/**
 * @example
 *     {
 *         name: "Marketing"
 *     }
 */
export interface TagCreateSchema {
    /** The tag category. */
    category?: Monite.TagCategory;
    /** The tag description. */
    description?: string;
    /** The tag name. Must be unique. */
    name: string;
}