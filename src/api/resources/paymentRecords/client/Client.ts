/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Monite from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace PaymentRecords {
    interface Options {
        environment?: core.Supplier<environments.MoniteEnvironment | string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        /** Override the x-monite-version header */
        moniteVersion: core.Supplier<string>;
        /** Override the x-monite-entity-id header */
        moniteEntityId?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the x-monite-version header */
        moniteVersion?: string;
        /** Override the x-monite-entity-id header */
        moniteEntityId?: string | undefined;
    }
}

export class PaymentRecords {
    constructor(protected readonly _options: PaymentRecords.Options) {}

    /**
     * @param {Monite.PaymentRecordsGetRequest} request
     * @param {PaymentRecords.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.BadRequestError}
     * @throws {@link Monite.UnauthorizedError}
     * @throws {@link Monite.ForbiddenError}
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.NotAcceptableError}
     * @throws {@link Monite.ConflictError}
     * @throws {@link Monite.RangeNotSatisfiableError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.paymentRecords.get()
     */
    public async get(
        request: Monite.PaymentRecordsGetRequest = {},
        requestOptions?: PaymentRecords.RequestOptions
    ): Promise<Monite.PaymentRecordResponseList> {
        const {
            order,
            limit,
            pagination_token: paginationToken,
            sort,
            is_external: isExternal,
            object_id: objectId,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (order != null) {
            _queryParams["order"] = order;
        }

        if (limit != null) {
            _queryParams["limit"] = limit.toString();
        }

        if (paginationToken != null) {
            _queryParams["pagination_token"] = paginationToken;
        }

        if (sort != null) {
            _queryParams["sort"] = sort;
        }

        if (isExternal != null) {
            _queryParams["is_external"] = isExternal.toString();
        }

        if (objectId != null) {
            _queryParams["object_id"] = objectId;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                "payment_records"
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "x-monite-version": await core.Supplier.get(this._options.moniteVersion),
                "x-monite-entity-id":
                    (await core.Supplier.get(this._options.moniteEntityId)) != null
                        ? await core.Supplier.get(this._options.moniteEntityId)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "monite",
                "X-Fern-SDK-Version": "0.1.0",
                "User-Agent": "monite/0.1.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Monite.PaymentRecordResponseList;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Monite.BadRequestError(_response.error.body as Monite.ErrorSchemaResponse);
                case 401:
                    throw new Monite.UnauthorizedError(_response.error.body as Monite.ErrorSchemaResponse);
                case 403:
                    throw new Monite.ForbiddenError(_response.error.body as Monite.ErrorSchemaResponse);
                case 404:
                    throw new Monite.NotFoundError(_response.error.body as Monite.ErrorSchemaResponse);
                case 406:
                    throw new Monite.NotAcceptableError(_response.error.body as Monite.ErrorSchemaResponse);
                case 409:
                    throw new Monite.ConflictError(_response.error.body as Monite.ErrorSchemaResponse);
                case 416:
                    throw new Monite.RangeNotSatisfiableError(_response.error.body as Monite.ErrorSchemaResponse);
                case 422:
                    throw new Monite.UnprocessableEntityError(_response.error.body as Monite.HttpValidationError);
                case 500:
                    throw new Monite.InternalServerError(_response.error.body as Monite.ErrorSchemaResponse);
                default:
                    throw new errors.MoniteError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MoniteError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.MoniteTimeoutError();
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {Monite.PaymentRecordRequest} request
     * @param {PaymentRecords.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.BadRequestError}
     * @throws {@link Monite.UnauthorizedError}
     * @throws {@link Monite.ForbiddenError}
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.NotAcceptableError}
     * @throws {@link Monite.ConflictError}
     * @throws {@link Monite.RangeNotSatisfiableError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.paymentRecords.create({
     *         amount: 1,
     *         currency: "AED",
     *         object: {
     *             id: "id",
     *             type: "receivable"
     *         },
     *         paid_at: "2024-01-15T09:30:00Z",
     *         payment_intent_id: "payment_intent_id"
     *     })
     */
    public async create(
        request: Monite.PaymentRecordRequest,
        requestOptions?: PaymentRecords.RequestOptions
    ): Promise<Monite.PaymentRecordResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                "payment_records"
            ),
            method: "POST",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "x-monite-version": await core.Supplier.get(this._options.moniteVersion),
                "x-monite-entity-id":
                    (await core.Supplier.get(this._options.moniteEntityId)) != null
                        ? await core.Supplier.get(this._options.moniteEntityId)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "monite",
                "X-Fern-SDK-Version": "0.1.0",
                "User-Agent": "monite/0.1.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Monite.PaymentRecordResponse;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Monite.BadRequestError(_response.error.body as Monite.ErrorSchemaResponse);
                case 401:
                    throw new Monite.UnauthorizedError(_response.error.body as Monite.ErrorSchemaResponse);
                case 403:
                    throw new Monite.ForbiddenError(_response.error.body as Monite.ErrorSchemaResponse);
                case 404:
                    throw new Monite.NotFoundError(_response.error.body as Monite.ErrorSchemaResponse);
                case 406:
                    throw new Monite.NotAcceptableError(_response.error.body as Monite.ErrorSchemaResponse);
                case 409:
                    throw new Monite.ConflictError(_response.error.body as Monite.ErrorSchemaResponse);
                case 416:
                    throw new Monite.RangeNotSatisfiableError(_response.error.body as Monite.ErrorSchemaResponse);
                case 422:
                    throw new Monite.UnprocessableEntityError(_response.error.body as Monite.HttpValidationError);
                case 500:
                    throw new Monite.InternalServerError(_response.error.body as Monite.ErrorSchemaResponse);
                default:
                    throw new errors.MoniteError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MoniteError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.MoniteTimeoutError();
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} paymentRecordId
     * @param {PaymentRecords.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.BadRequestError}
     * @throws {@link Monite.UnauthorizedError}
     * @throws {@link Monite.ForbiddenError}
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.NotAcceptableError}
     * @throws {@link Monite.ConflictError}
     * @throws {@link Monite.RangeNotSatisfiableError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.paymentRecords.getById("payment_record_id")
     */
    public async getById(
        paymentRecordId: string,
        requestOptions?: PaymentRecords.RequestOptions
    ): Promise<Monite.PaymentRecordResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                `payment_records/${encodeURIComponent(paymentRecordId)}`
            ),
            method: "GET",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "x-monite-version": await core.Supplier.get(this._options.moniteVersion),
                "x-monite-entity-id":
                    (await core.Supplier.get(this._options.moniteEntityId)) != null
                        ? await core.Supplier.get(this._options.moniteEntityId)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "monite",
                "X-Fern-SDK-Version": "0.1.0",
                "User-Agent": "monite/0.1.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Monite.PaymentRecordResponse;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Monite.BadRequestError(_response.error.body as Monite.ErrorSchemaResponse);
                case 401:
                    throw new Monite.UnauthorizedError(_response.error.body as Monite.ErrorSchemaResponse);
                case 403:
                    throw new Monite.ForbiddenError(_response.error.body as Monite.ErrorSchemaResponse);
                case 404:
                    throw new Monite.NotFoundError(_response.error.body as Monite.ErrorSchemaResponse);
                case 406:
                    throw new Monite.NotAcceptableError(_response.error.body as Monite.ErrorSchemaResponse);
                case 409:
                    throw new Monite.ConflictError(_response.error.body as Monite.ErrorSchemaResponse);
                case 416:
                    throw new Monite.RangeNotSatisfiableError(_response.error.body as Monite.ErrorSchemaResponse);
                case 422:
                    throw new Monite.UnprocessableEntityError(_response.error.body as Monite.HttpValidationError);
                case 500:
                    throw new Monite.InternalServerError(_response.error.body as Monite.ErrorSchemaResponse);
                default:
                    throw new errors.MoniteError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MoniteError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                });
            case "timeout":
                throw new errors.MoniteTimeoutError();
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
