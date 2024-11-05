/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Monite from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Comments {
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
    public async get(
        request: Monite.CommentsGetRequest,
        requestOptions?: Comments.RequestOptions
    ): Promise<Monite.CommentResourceList> {
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
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
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
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                "comments"
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
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.1.0",
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
            return _response.body as Monite.CommentResourceList;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Monite.BadRequestError(_response.error.body as Monite.ErrorSchemaResponse);
                case 403:
                    throw new Monite.ForbiddenError(_response.error.body as Monite.ErrorSchemaResponse);
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
                throw new errors.MoniteTimeoutError();
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
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
    public async create(
        request: Monite.CommentCreateRequest,
        requestOptions?: Comments.RequestOptions
    ): Promise<Monite.CommentResource> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                "comments"
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
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.1.0",
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
            return _response.body as Monite.CommentResource;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Monite.BadRequestError(_response.error.body as Monite.ErrorSchemaResponse);
                case 403:
                    throw new Monite.ForbiddenError(_response.error.body as Monite.ErrorSchemaResponse);
                case 404:
                    throw new Monite.NotFoundError(_response.error.body as Monite.ErrorSchemaResponse);
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
                throw new errors.MoniteTimeoutError();
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
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
    public async getById(commentId: string, requestOptions?: Comments.RequestOptions): Promise<Monite.CommentResource> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                `comments/${encodeURIComponent(commentId)}`
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
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.1.0",
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
            return _response.body as Monite.CommentResource;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Monite.BadRequestError(_response.error.body as Monite.ErrorSchemaResponse);
                case 403:
                    throw new Monite.ForbiddenError(_response.error.body as Monite.ErrorSchemaResponse);
                case 404:
                    throw new Monite.NotFoundError(_response.error.body as Monite.ErrorSchemaResponse);
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
                throw new errors.MoniteTimeoutError();
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
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
    public async deleteById(commentId: string, requestOptions?: Comments.RequestOptions): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                `comments/${encodeURIComponent(commentId)}`
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
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.1.0",
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
                throw new errors.MoniteTimeoutError();
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
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
    public async updateById(
        commentId: string,
        request: Monite.CommentUpdateRequest = {},
        requestOptions?: Comments.RequestOptions
    ): Promise<Monite.CommentResource> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                `comments/${encodeURIComponent(commentId)}`
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
                "X-Fern-SDK-Name": "",
                "X-Fern-SDK-Version": "0.1.0",
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
            return _response.body as Monite.CommentResource;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Monite.BadRequestError(_response.error.body as Monite.ErrorSchemaResponse);
                case 403:
                    throw new Monite.ForbiddenError(_response.error.body as Monite.ErrorSchemaResponse);
                case 404:
                    throw new Monite.NotFoundError(_response.error.body as Monite.ErrorSchemaResponse);
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
