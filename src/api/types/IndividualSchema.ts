/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A schema contains metadata for an individual
 */
export interface IndividualSchema {
    date_of_birth?: string;
    /** A first name of an individual */
    first_name: string;
    id_number?: string;
    /** A last name of an individual */
    last_name: string;
    /** The last four digits of the individual's Social Security number */
    ssn_last_4?: string;
    /** A title of an individual */
    title?: string;
}
