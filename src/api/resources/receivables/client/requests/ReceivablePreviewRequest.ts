/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../../../../index";

/**
 * @example
 *     {
 *         body_text: "body_text",
 *         subject_text: "subject_text"
 *     }
 */
export interface ReceivablePreviewRequest {
    /** Body text of the content */
    body_text: string;
    /** Language code for localization purposes */
    language?: Monite.LanguageCodeEnum;
    /** Subject text of the content */
    subject_text: string;
    /** The type of the preview document. */
    type?: Monite.ReceivablesPreviewTypeEnum;
}
