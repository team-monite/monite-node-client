/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Monite from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Comments {
    export interface Options {
        environment?: core.Supplier<environments.MoniteEnvironment | string>;
        /** Specify a custom URL to connect the client to. */
        baseUrl?: core.Supplier<string>;
        token?: core.Supplier<core.BearerToken | undefined>;
        /** Override the x-monite-version header */
        moniteVersion: core.Supplier<string>;
        /** Override the x-monite-entity-id header */
        moniteEntityId?: core.Supplier<string | undefined>;
        fetcher?: core.FetchFunction;
    }

    export interface RequestOptions {
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

export class Comments {
    constructor(protected readonly _options: Comments.Options) {}

    /**
     * Get comments
     *
     * @param {Monite.CommentsGetRequest} request
     * @param {Comments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.BadRequestError}
     * @throws {@link Monite.ForbiddenError}
     * @throws {@link Monite.ConflictError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.comments.get({
     *         object_type: "payable",
     *         object_id: "object_id"
     *     })
     */
    public get(
        request: Monite.CommentsGetRequest,
        requestOptions?: Comments.RequestOptions,
    ): core.HttpResponsePromise<Monite.CommentResourceList> {
        return core.HttpResponsePromise.fromPromise(this.__get(request, requestOptions));
    }

    private async __get(
        request: Monite.CommentsGetRequest,
        requestOptions?: Comments.RequestOptions,
    ): Promise<core.WithRawResponse<Monite.CommentResourceList>> {
        const {
            object_type: objectType,
            object_id: objectId,
            order,
            limit,
            pagination_token: paginationToken,
            sort,
            created_at__gt: createdAtGt,
            created_at__lt: createdAtLt,
            created_at__gte: createdAtGte,
            created_at__lte: createdAtLte,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[] | null> = {};
        _queryParams["object_type"] = objectType;
        _queryParams["object_id"] = objectId;
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

        if (createdAtGt != null) {
            _queryParams["created_at__gt"] = createdAtGt;
        }

        if (createdAtLt != null) {
            _queryParams["created_at__lt"] = createdAtLt;
        }

        if (createdAtGte != null) {
            _queryParams["created_at__gte"] = createdAtGte;
        }

        if (createdAtLte != null) {
            _queryParams["created_at__lte"] = createdAtLte;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MoniteEnvironment.Sandbox,
                "comments",
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
                "X-Fern-SDK-Version": "0.3.3",
                "User-Agent": "@monite/node-client/0.3.3",
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
            return { data: _response.body as Monite.CommentResourceList, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Monite.BadRequestError(_response.error.body as unknown, _response.rawResponse);
                case 403:
                    throw new Monite.ForbiddenError(_response.error.body as unknown, _response.rawResponse);
                case 409:
                    throw new Monite.ConflictError(_response.error.body as unknown, _response.rawResponse);
                case 422:
                    throw new Monite.UnprocessableEntityError(_response.error.body as unknown, _response.rawResponse);
                case 500:
                    throw new Monite.InternalServerError(_response.error.body as unknown, _response.rawResponse);
                default:
                    throw new errors.MoniteError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MoniteError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.MoniteTimeoutError("Timeout exceeded when calling GET /comments.");
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Create new comment
     *
     * @param {Monite.CommentCreateRequest} request
     * @param {Comments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.BadRequestError}
     * @throws {@link Monite.ForbiddenError}
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.ConflictError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.comments.create({
     *         object_id: "object_id",
     *         object_type: "object_type",
     *         text: "text"
     *     })
     */
    public create(
        request: Monite.CommentCreateRequest,
        requestOptions?: Comments.RequestOptions,
    ): core.HttpResponsePromise<Monite.CommentResource> {
        return core.HttpResponsePromise.fromPromise(this.__create(request, requestOptions));
    }

    private async __create(
        request: Monite.CommentCreateRequest,
        requestOptions?: Comments.RequestOptions,
    ): Promise<core.WithRawResponse<Monite.CommentResource>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MoniteEnvironment.Sandbox,
                "comments",
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
                "X-Fern-SDK-Version": "0.3.3",
                "User-Agent": "@monite/node-client/0.3.3",
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
            return { data: _response.body as Monite.CommentResource, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Monite.BadRequestError(_response.error.body as unknown, _response.rawResponse);
                case 403:
                    throw new Monite.ForbiddenError(_response.error.body as unknown, _response.rawResponse);
                case 404:
                    throw new Monite.NotFoundError(_response.error.body as unknown, _response.rawResponse);
                case 409:
                    throw new Monite.ConflictError(_response.error.body as unknown, _response.rawResponse);
                case 422:
                    throw new Monite.UnprocessableEntityError(_response.error.body as unknown, _response.rawResponse);
                case 500:
                    throw new Monite.InternalServerError(_response.error.body as unknown, _response.rawResponse);
                default:
                    throw new errors.MoniteError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MoniteError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.MoniteTimeoutError("Timeout exceeded when calling POST /comments.");
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Get comment
     *
     * @param {string} commentId
     * @param {Comments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.BadRequestError}
     * @throws {@link Monite.ForbiddenError}
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.ConflictError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.comments.getById("comment_id")
     */
    public getById(
        commentId: string,
        requestOptions?: Comments.RequestOptions,
    ): core.HttpResponsePromise<Monite.CommentResource> {
        return core.HttpResponsePromise.fromPromise(this.__getById(commentId, requestOptions));
    }

    private async __getById(
        commentId: string,
        requestOptions?: Comments.RequestOptions,
    ): Promise<core.WithRawResponse<Monite.CommentResource>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MoniteEnvironment.Sandbox,
                `comments/${encodeURIComponent(commentId)}`,
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
                "X-Fern-SDK-Version": "0.3.3",
                "User-Agent": "@monite/node-client/0.3.3",
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
            return { data: _response.body as Monite.CommentResource, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Monite.BadRequestError(_response.error.body as unknown, _response.rawResponse);
                case 403:
                    throw new Monite.ForbiddenError(_response.error.body as unknown, _response.rawResponse);
                case 404:
                    throw new Monite.NotFoundError(_response.error.body as unknown, _response.rawResponse);
                case 409:
                    throw new Monite.ConflictError(_response.error.body as unknown, _response.rawResponse);
                case 422:
                    throw new Monite.UnprocessableEntityError(_response.error.body as unknown, _response.rawResponse);
                case 500:
                    throw new Monite.InternalServerError(_response.error.body as unknown, _response.rawResponse);
                default:
                    throw new errors.MoniteError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MoniteError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.MoniteTimeoutError("Timeout exceeded when calling GET /comments/{comment_id}.");
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Delete comment
     *
     * @param {string} commentId
     * @param {Comments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.BadRequestError}
     * @throws {@link Monite.ForbiddenError}
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.ConflictError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.comments.deleteById("comment_id")
     */
    public deleteById(commentId: string, requestOptions?: Comments.RequestOptions): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__deleteById(commentId, requestOptions));
    }

    private async __deleteById(
        commentId: string,
        requestOptions?: Comments.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MoniteEnvironment.Sandbox,
                `comments/${encodeURIComponent(commentId)}`,
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
                "X-Fern-SDK-Version": "0.3.3",
                "User-Agent": "@monite/node-client/0.3.3",
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
            return { data: undefined, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Monite.BadRequestError(_response.error.body as unknown, _response.rawResponse);
                case 403:
                    throw new Monite.ForbiddenError(_response.error.body as unknown, _response.rawResponse);
                case 404:
                    throw new Monite.NotFoundError(_response.error.body as unknown, _response.rawResponse);
                case 409:
                    throw new Monite.ConflictError(_response.error.body as unknown, _response.rawResponse);
                case 422:
                    throw new Monite.UnprocessableEntityError(_response.error.body as unknown, _response.rawResponse);
                case 500:
                    throw new Monite.InternalServerError(_response.error.body as unknown, _response.rawResponse);
                default:
                    throw new errors.MoniteError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MoniteError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.MoniteTimeoutError("Timeout exceeded when calling DELETE /comments/{comment_id}.");
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Update comment
     *
     * @param {string} commentId
     * @param {Monite.CommentUpdateRequest} request
     * @param {Comments.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.BadRequestError}
     * @throws {@link Monite.ForbiddenError}
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.ConflictError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.comments.updateById("comment_id")
     */
    public updateById(
        commentId: string,
        request: Monite.CommentUpdateRequest = {},
        requestOptions?: Comments.RequestOptions,
    ): core.HttpResponsePromise<Monite.CommentResource> {
        return core.HttpResponsePromise.fromPromise(this.__updateById(commentId, request, requestOptions));
    }

    private async __updateById(
        commentId: string,
        request: Monite.CommentUpdateRequest = {},
        requestOptions?: Comments.RequestOptions,
    ): Promise<core.WithRawResponse<Monite.CommentResource>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MoniteEnvironment.Sandbox,
                `comments/${encodeURIComponent(commentId)}`,
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
                "X-Fern-SDK-Version": "0.3.3",
                "User-Agent": "@monite/node-client/0.3.3",
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
            return { data: _response.body as Monite.CommentResource, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Monite.BadRequestError(_response.error.body as unknown, _response.rawResponse);
                case 403:
                    throw new Monite.ForbiddenError(_response.error.body as unknown, _response.rawResponse);
                case 404:
                    throw new Monite.NotFoundError(_response.error.body as unknown, _response.rawResponse);
                case 409:
                    throw new Monite.ConflictError(_response.error.body as unknown, _response.rawResponse);
                case 422:
                    throw new Monite.UnprocessableEntityError(_response.error.body as unknown, _response.rawResponse);
                case 500:
                    throw new Monite.InternalServerError(_response.error.body as unknown, _response.rawResponse);
                default:
                    throw new errors.MoniteError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                        rawResponse: _response.rawResponse,
                    });
            }
        }

        switch (_response.error.reason) {
            case "non-json":
                throw new errors.MoniteError({
                    statusCode: _response.error.statusCode,
                    body: _response.error.rawBody,
                    rawResponse: _response.rawResponse,
                });
            case "timeout":
                throw new errors.MoniteTimeoutError("Timeout exceeded when calling PATCH /comments/{comment_id}.");
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
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
