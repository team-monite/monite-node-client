/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as errors from "../../errors/index";

export class UnauthorizedError extends errors.MoniteError {
    constructor(body?: unknown) {
        super({
            message: "UnauthorizedError",
            statusCode: 401,
            body: body,
        });
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
}
