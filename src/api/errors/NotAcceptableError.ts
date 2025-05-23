/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors/index";
import * as core from "../../core";

export class NotAcceptableError extends errors.MoniteError {
    constructor(body?: unknown, rawResponse?: core.RawResponse) {
        super({
            message: "NotAcceptableError",
            statusCode: 406,
            body: body,
            rawResponse: rawResponse,
        });
        Object.setPrototypeOf(this, NotAcceptableError.prototype);
    }
}
