/**
 * This file was auto-generated by Fern from our API Definition.
 */

export interface TermsOfServiceAcceptanceOutput {
    /** The date and time (in the ISO 8601 format) when the entity representative accepted the service agreement. */
    date?: string;
    /** The IP address from which the entity representative accepted the service agreement. If omitted or set to `null` in the request, the IP address is inferred from the request origin or the `X-Forwarded-For` request header. */
    ip?: string;
}
