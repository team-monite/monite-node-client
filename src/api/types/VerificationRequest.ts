/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

export interface VerificationRequest {
    airwallex_plaid: Monite.VerificationAirwallexPlaidRequest;
    type: Monite.BankAccountVerificationType;
}