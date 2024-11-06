/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

export interface AirwallexMandate {
    /** PDF copy of mandate will be sent to the email by Airwallex */
    email: string;
    /** Name of the person signed the mandate, must be a bank account owner */
    signatory: string;
    type: Monite.AirwallexMandateType;
    version: Monite.AirwallexMandateVersion;
}
