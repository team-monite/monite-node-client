/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

/**
 * A base for an entity response schema
 */
export interface EntityOrganizationResponse {
    /** UUID entity ID */
    id: string;
    /** UTC datetime */
    created_at: string;
    /** UTC datetime */
    updated_at: string;
    /** An address description of the entity */
    address: Monite.EntityAddressResponseSchema;
    /** An official email address of the entity */
    email?: string;
    /** A logo image of the entity */
    logo?: Monite.FileSchema4;
    /** A set of metadata describing an organization */
    organization: Monite.OrganizationResponseSchema;
    /** A phone number of the entity */
    phone?: string;
    /** record status, 'active' by default */
    status: Monite.StatusEnum;
    /** The entity's taxpayer identification number or tax ID. This field is required for entities that are non-VAT registered. */
    tax_id?: string;
    /** A website of the entity */
    website?: string;
}
