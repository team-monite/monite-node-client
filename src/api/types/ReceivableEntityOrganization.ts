/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * A Response schema for an entity of organization type
 */
export interface ReceivableEntityOrganization {
    /** An email of the entity */
    email?: string;
    /** A link to the entity logo */
    logo?: string;
    /** The name of the entity issuing the receivable, when it is an organization. */
    name: string;
    /** A phone number of the entity */
    phone?: string;
    /** The registration authority of the entity */
    registration_authority?: string;
    /** The registration number of the entity */
    registration_number?: string;
    /** The Tax ID of the entity issuing the receivable */
    tax_id?: string;
    /** The VAT ID of the entity issuing the receivable, when it is an organization. */
    vat_id?: string;
    /** A website of the entity */
    website?: string;
}
