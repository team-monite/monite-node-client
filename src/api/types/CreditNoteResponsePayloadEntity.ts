/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

export type CreditNoteResponsePayloadEntity =
    | Monite.CreditNoteResponsePayloadEntity.Organization
    | Monite.CreditNoteResponsePayloadEntity.Individual;

export namespace CreditNoteResponsePayloadEntity {
    export interface Organization extends Monite.ReceivableEntityOrganization {
        type: "organization";
    }

    export interface Individual extends Monite.ReceivableEntityIndividual {
        type: "individual";
    }
}
