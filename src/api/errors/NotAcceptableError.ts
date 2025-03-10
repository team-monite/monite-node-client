/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors/index";

export class NotAcceptableError extends errors.MoniteError {
    constructor(body?: unknown) {
        super({
            message: "NotAcceptableError",
            statusCode: 406,
            body: body,
        });
        Object.setPrototypeOf(this, NotAcceptableError.prototype);
    }
}
