/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Monite from "../../../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index";

export declare namespace LineItems {
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
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

export class LineItems {
    constructor(protected readonly _options: LineItems.Options) {}

    /**
     * Get a list of all line items related to a specific payable.
     * Related guide: [List all payable line items](https://docs.monite.com/docs/manage-line-items#list-all-line-items-of-a-payable)
     *
     * See also:
     *
     * [Manage line items](https://docs.monite.com/docs/manage-line-items)
     *
     * [Collect payables](https://docs.monite.com/docs/collect-payables)
     *
     * @param {string} payableId
     * @param {Monite.payables.LineItemsGetRequest} request
     * @param {LineItems.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.BadRequestError}
     * @throws {@link Monite.UnauthorizedError}
     * @throws {@link Monite.ForbiddenError}
     * @throws {@link Monite.NotAcceptableError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.payables.lineItems.get("payable_id")
     */
    public async get(
        payableId: string,
        request: Monite.payables.LineItemsGetRequest = {},
        requestOptions?: LineItems.RequestOptions
    ): Promise<Monite.LineItemPaginationResponse> {
        const {
            order,
            limit,
            pagination_token: paginationToken,
            sort,
            was_created_by_user_id: wasCreatedByUserId,
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

        if (wasCreatedByUserId != null) {
            _queryParams["was_created_by_user_id"] = wasCreatedByUserId;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                `payables/${encodeURIComponent(payableId)}/line_items`
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
                "X-Fern-SDK-Name": "@monite/node-client",
                "X-Fern-SDK-Version": "0.1.0",
                "User-Agent": "@monite/node-client/0.1.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Monite.LineItemPaginationResponse;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Monite.BadRequestError(_response.error.body as Monite.ErrorSchemaResponse);
                case 401:
                    throw new Monite.UnauthorizedError(_response.error.body as Monite.ErrorSchemaResponse);
                case 403:
                    throw new Monite.ForbiddenError(_response.error.body as Monite.ErrorSchemaResponse);
                case 406:
                    throw new Monite.NotAcceptableError(_response.error.body as Monite.ErrorSchemaResponse);
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
                throw new errors.MoniteTimeoutError(
                    "Timeout exceeded when calling GET /payables/{payable_id}/line_items."
                );
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Add a new line item to a specific payable.
     *
     * The `subtotal` and `total` fields of line items are automatically calculated based on the `unit_price`,
     *  `quantity`, and `tax` fields, therefore, are read-only and appear only in the response schema. The field
     *   `ledger_account_id` is required **only** for account integration, otherwise, it is optional.
     *
     * Related guide: [Add line items to a payable](https://docs.monite.com/docs/manage-line-items#add-line-items-to-a-payable)
     *
     * See also:
     *
     * [Manage line items](https://docs.monite.com/docs/manage-line-items)
     *
     * [Collect payables](https://docs.monite.com/docs/collect-payables)
     *
     * @param {string} payableId
     * @param {Monite.LineItemRequest} request
     * @param {LineItems.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.BadRequestError}
     * @throws {@link Monite.UnauthorizedError}
     * @throws {@link Monite.ForbiddenError}
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.NotAcceptableError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.payables.lineItems.create("payable_id", {})
     */
    public async create(
        payableId: string,
        request: Monite.LineItemRequest,
        requestOptions?: LineItems.RequestOptions
    ): Promise<Monite.LineItemResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                `payables/${encodeURIComponent(payableId)}/line_items`
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
                "X-Fern-SDK-Name": "@monite/node-client",
                "X-Fern-SDK-Version": "0.1.0",
                "User-Agent": "@monite/node-client/0.1.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Monite.LineItemResponse;
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
                throw new errors.MoniteTimeoutError(
                    "Timeout exceeded when calling POST /payables/{payable_id}/line_items."
                );
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Replaces the information of all line items of a specific payable.
     *
     * Related guide: [Replace all line items](https://docs.monite.com/docs/manage-line-items#replace-all-line-items)
     *
     * See also:
     *
     * [Manage line items](https://docs.monite.com/docs/manage-line-items)
     *
     * [Collect payables](https://docs.monite.com/docs/collect-payables)
     *
     * @param {string} payableId
     * @param {Monite.payables.LineItemsReplaceRequest} request
     * @param {LineItems.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.BadRequestError}
     * @throws {@link Monite.UnauthorizedError}
     * @throws {@link Monite.ForbiddenError}
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.NotAcceptableError}
     * @throws {@link Monite.ConflictError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.payables.lineItems.replace("payable_id", {
     *         data: [{}]
     *     })
     */
    public async replace(
        payableId: string,
        request: Monite.payables.LineItemsReplaceRequest,
        requestOptions?: LineItems.RequestOptions
    ): Promise<Monite.LineItemsReplaceResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                `payables/${encodeURIComponent(payableId)}/line_items`
            ),
            method: "PUT",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "x-monite-version": await core.Supplier.get(this._options.moniteVersion),
                "x-monite-entity-id":
                    (await core.Supplier.get(this._options.moniteEntityId)) != null
                        ? await core.Supplier.get(this._options.moniteEntityId)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@monite/node-client",
                "X-Fern-SDK-Version": "0.1.0",
                "User-Agent": "@monite/node-client/0.1.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Monite.LineItemsReplaceResponse;
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
                throw new errors.MoniteTimeoutError(
                    "Timeout exceeded when calling PUT /payables/{payable_id}/line_items."
                );
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get information about a specific line item with a given ID.
     *
     * Related guide: [Retrieve a line item](https://docs.monite.com/docs/manage-line-items#retrieve-a-line-item)
     *
     * See also:
     *
     * [Manage line items](https://docs.monite.com/docs/manage-line-items)
     *
     * [Collect payables](https://docs.monite.com/docs/collect-payables)
     *
     * @param {string} lineItemId
     * @param {string} payableId
     * @param {LineItems.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.BadRequestError}
     * @throws {@link Monite.UnauthorizedError}
     * @throws {@link Monite.ForbiddenError}
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.NotAcceptableError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.payables.lineItems.getById("line_item_id", "payable_id")
     */
    public async getById(
        lineItemId: string,
        payableId: string,
        requestOptions?: LineItems.RequestOptions
    ): Promise<Monite.LineItemResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                `payables/${encodeURIComponent(payableId)}/line_items/${encodeURIComponent(lineItemId)}`
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
                "X-Fern-SDK-Name": "@monite/node-client",
                "X-Fern-SDK-Version": "0.1.0",
                "User-Agent": "@monite/node-client/0.1.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Monite.LineItemResponse;
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
                throw new errors.MoniteTimeoutError(
                    "Timeout exceeded when calling GET /payables/{payable_id}/line_items/{line_item_id}."
                );
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Delete the line item with the given ID.
     *
     * Related guide: [Remove a line item](https://docs.monite.com/docs/manage-line-items#remove-a-line-item)
     *
     * See also:
     *
     * [Manage line items](https://docs.monite.com/docs/manage-line-items)
     *
     * [Collect payables](https://docs.monite.com/docs/collect-payables)
     *
     * @param {string} lineItemId
     * @param {string} payableId
     * @param {LineItems.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.BadRequestError}
     * @throws {@link Monite.ForbiddenError}
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.NotAcceptableError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.payables.lineItems.deleteById("line_item_id", "payable_id")
     */
    public async deleteById(
        lineItemId: string,
        payableId: string,
        requestOptions?: LineItems.RequestOptions
    ): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                `payables/${encodeURIComponent(payableId)}/line_items/${encodeURIComponent(lineItemId)}`
            ),
            method: "DELETE",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "x-monite-version": await core.Supplier.get(this._options.moniteVersion),
                "x-monite-entity-id":
                    (await core.Supplier.get(this._options.moniteEntityId)) != null
                        ? await core.Supplier.get(this._options.moniteEntityId)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@monite/node-client",
                "X-Fern-SDK-Version": "0.1.0",
                "User-Agent": "@monite/node-client/0.1.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Monite.BadRequestError(_response.error.body as Monite.ErrorSchemaResponse);
                case 403:
                    throw new Monite.ForbiddenError(_response.error.body as Monite.ErrorSchemaResponse);
                case 404:
                    throw new Monite.NotFoundError(_response.error.body as Monite.ErrorSchemaResponse);
                case 406:
                    throw new Monite.NotAcceptableError(_response.error.body as Monite.ErrorSchemaResponse);
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
                throw new errors.MoniteTimeoutError(
                    "Timeout exceeded when calling DELETE /payables/{payable_id}/line_items/{line_item_id}."
                );
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Edits the information of a specific line item.
     *
     * Related guide: [Update a line item](https://docs.monite.com/docs/manage-line-items#update-a-line-item)
     *
     * See also:
     *
     * [Manage line items](https://docs.monite.com/docs/manage-line-items)
     *
     * [Collect payables](https://docs.monite.com/docs/collect-payables)
     *
     * @param {string} lineItemId
     * @param {string} payableId
     * @param {Monite.LineItemRequest} request
     * @param {LineItems.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.BadRequestError}
     * @throws {@link Monite.UnauthorizedError}
     * @throws {@link Monite.ForbiddenError}
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.NotAcceptableError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.payables.lineItems.updateById("line_item_id", "payable_id", {})
     */
    public async updateById(
        lineItemId: string,
        payableId: string,
        request: Monite.LineItemRequest,
        requestOptions?: LineItems.RequestOptions
    ): Promise<Monite.LineItemResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                `payables/${encodeURIComponent(payableId)}/line_items/${encodeURIComponent(lineItemId)}`
            ),
            method: "PATCH",
            headers: {
                Authorization: await this._getAuthorizationHeader(),
                "x-monite-version": await core.Supplier.get(this._options.moniteVersion),
                "x-monite-entity-id":
                    (await core.Supplier.get(this._options.moniteEntityId)) != null
                        ? await core.Supplier.get(this._options.moniteEntityId)
                        : undefined,
                "X-Fern-Language": "JavaScript",
                "X-Fern-SDK-Name": "@monite/node-client",
                "X-Fern-SDK-Version": "0.1.0",
                "User-Agent": "@monite/node-client/0.1.0",
                "X-Fern-Runtime": core.RUNTIME.type,
                "X-Fern-Runtime-Version": core.RUNTIME.version,
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            body: request,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Monite.LineItemResponse;
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
                throw new errors.MoniteTimeoutError(
                    "Timeout exceeded when calling PATCH /payables/{payable_id}/line_items/{line_item_id}."
                );
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
