/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../../../../../../index";

/**
 * @example
 *     {}
 */
export interface UpdateCounterpartContactPayload {
    /** The address of a contact person. */
    address?: Monite.CounterpartAddress;
    /** The email address of a contact person. */
    email?: string;
    /** The first name of a contact person. */
    first_name?: string;
    /** The last name of a contact person. */
    last_name?: string;
    /** The phone number of a contact person */
    phone?: string;
    /** The title or honorific of a contact person. Examples: Mr., Ms., Dr., Prof. */
    title?: string;
}
