/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors/index";
import * as core from "../../core";

export class ContentTooLargeError extends errors.MoniteError {
    constructor(body?: unknown, rawResponse?: core.RawResponse) {
        super({
            message: "ContentTooLargeError",
            statusCode: 413,
            body: body,
            rawResponse: rawResponse,
        });
        Object.setPrototypeOf(this, ContentTooLargeError.prototype);
    }
}
