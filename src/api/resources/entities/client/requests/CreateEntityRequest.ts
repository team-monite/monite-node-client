/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../../../../index";

/**
 * @example
 *     {
 *         address: {
 *             city: "city",
 *             country: "AF",
 *             line1: "line1",
 *             postal_code: "postal_code"
 *         },
 *         email: "email",
 *         type: "individual"
 *     }
 */
export interface CreateEntityRequest {
    /** An address description of the entity */
    address: Monite.EntityAddressSchema;
    /** An official email address of the entity */
    email: string;
    /** The contact phone number of the entity. Required for US organizations to use payments. */
    phone?: string;
    /** A website of the entity */
    website?: string;
    /** A set of meta data describing the organization */
    organization?: Monite.OrganizationSchema;
    /** A set of meta data describing the individual */
    individual?: Monite.IndividualSchema;
    /** The entity's taxpayer identification number or tax ID. This field is required for entities that are non-VAT registered. */
    tax_id?: string;
    /** (Germany only) The entity's commercial register number (_Handelsregisternummer_) in the German Commercial Register, if available. */
    registration_number?: string;
    /** (Germany only) The name of the local district court (_Amtsgericht_) where the entity is registered. Required if `registration_number` is provided. */
    registration_authority?: string;
    /** A type for an entity */
    type: Monite.EntityTypeEnum;
}
