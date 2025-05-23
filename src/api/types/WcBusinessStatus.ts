/**
 * This file was auto-generated by Fern from our API Definition.
 */

/**
 * - NEW: A business has been created within Kanmon
 * - ONBOARDED: A business has completed all of the onboarding steps within Kanmon and is now awaiting underwriting.
 * - INPUT_REQUIRED: A business will be asked to provide required data
 */
export type WcBusinessStatus = "NEW" | "INPUT_REQUIRED" | "ONBOARDED";
export const WcBusinessStatus = {
    New: "NEW",
    InputRequired: "INPUT_REQUIRED",
    Onboarded: "ONBOARDED",
} as const;
