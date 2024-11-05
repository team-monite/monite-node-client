/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

export interface TextTemplateResponse {
    id: string;
    created_at: string;
    updated_at: string;
    document_type: Monite.DocumentTypeEnum;
    is_default: boolean;
    name: string;
    template: string;
    type: Monite.TextTemplateType;
}