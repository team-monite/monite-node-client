/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../../../../../../index";

/**
 * @example
 *     {}
 */
export interface EntityOnboardingDataRequest {
    /** Business information about the entity. */
    business_profile?: Monite.BusinessProfileInput;
    /** Used to attest that the beneficial owner information provided is both current and correct. */
    ownership_declaration?: Monite.OwnershipDeclarationInput;
    /** Details on the entity's acceptance of the service agreement. */
    tos_acceptance?: Monite.TermsOfServiceAcceptanceInput;
}
