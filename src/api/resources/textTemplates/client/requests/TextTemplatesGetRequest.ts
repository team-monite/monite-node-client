/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../../../../index";

/**
 * @example
 *     {}
 */
export interface TextTemplatesGetRequest {
    type?: Monite.TextTemplateType;
    document_type?: Monite.TextTemplateDocumentTypeEnum;
    is_default?: boolean;
}
