/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

export interface PaymentsSettingsResponse {
    payment_page_domain?: string;
    payment_page_theme?: Monite.PaymentPageThemeResponse;
    /** The support email address */
    support_email?: string;
}