/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

/**
 * This schema is used to create new counterparts (either organizations or individuals).
 * The counterpart type is specified by the `type` property. Depending on the `type`,
 * you need to provide the data for either the `individual` or `organization` property.
 */
export type CounterpartCreatePayload =
    | Monite.CounterpartCreatePayload.Organization
    | Monite.CounterpartCreatePayload.Individual;

export declare namespace CounterpartCreatePayload {
    interface Organization extends Monite.CounterpartOrganizationRootCreatePayload {
        type: "organization";
    }

    interface Individual extends Monite.CounterpartIndividualRootCreatePayload {
        type: "individual";
    }
}