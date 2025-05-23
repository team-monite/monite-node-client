/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

export interface OcrTaskResponseSchema {
    id: string;
    created_at: string;
    updated_at: string;
    status: Monite.OcrTaskStatus;
    document_type?: Monite.OcrDocumentTypeEnum;
    recognized_data?: Monite.OcrTaskResponseSchemaRecognizedData;
}
