/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

/**
 * Represents a user-defined tag that can be assigned to resources to filter them.
 */
export interface CounterpartTagSchema {
    /** A unique ID of this tag. */
    id: string;
    /** Date and time when the tag was created. Timestamps follow the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
    created_at: string;
    /** Date and time when the tag was last updated. Timestamps follow the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) standard. */
    updated_at: string;
    /** The tag category. */
    category?: Monite.CounterpartTagCategory;
    /** ID of the user who created the tag. */
    created_by_entity_user_id?: string;
    /** The tag description. */
    description?: string;
    /** The tag name. */
    name: string;
}
