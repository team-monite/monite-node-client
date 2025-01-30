/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../../../../../../index";

/**
 * @example
 *     {
 *         airwallex_plaid: {
 *             account: {
 *                 id: "id",
 *                 mask: "mask",
 *                 name: "name"
 *             },
 *             institution: {
 *                 id: "id",
 *                 name: "name"
 *             },
 *             mandate: {
 *                 email: "email",
 *                 signatory: "signatory",
 *                 type: "us_ach_debit",
 *                 version: "1.0"
 *             },
 *             public_token: "public_token"
 *         },
 *         type: "airwallex_plaid"
 *     }
 */
export interface CompleteVerificationRequest {
    airwallex_plaid: Monite.CompleteVerificationAirwallexPlaidRequest;
    type: Monite.BankAccountVerificationType;
}
