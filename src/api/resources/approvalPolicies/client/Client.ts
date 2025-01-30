/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Monite from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";
import { Processes } from "../resources/processes/client/Client";

export declare namespace ApprovalPolicies {
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

export class ApprovalPolicies {
    constructor(protected readonly _options: ApprovalPolicies.Options) {}

    /**
     * Retrieve a list of all approval policies with pagination.
     *
     * @param {Monite.ApprovalPoliciesGetRequest} request
     * @param {ApprovalPolicies.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.UnauthorizedError}
     * @throws {@link Monite.ConflictError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.approvalPolicies.get()
     */
    public async get(
        request: Monite.ApprovalPoliciesGetRequest = {},
        requestOptions?: ApprovalPolicies.RequestOptions
    ): Promise<Monite.ApprovalPolicyResourceList> {
        const {
            process_id: processId,
            order,
            limit,
            pagination_token: paginationToken,
            sort,
            id__in: idIn,
            status,
            status__in: statusIn,
            name,
            name__contains: nameContains,
            name__ncontains: nameNcontains,
            created_by: createdBy,
            created_at__gt: createdAtGt,
            created_at__lt: createdAtLt,
            created_at__gte: createdAtGte,
            created_at__lte: createdAtLte,
            updated_at__gt: updatedAtGt,
            updated_at__lt: updatedAtLt,
            updated_at__gte: updatedAtGte,
            updated_at__lte: updatedAtLte,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (processId != null) {
            _queryParams["process_id"] = processId;
        }

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

        if (idIn != null) {
            if (Array.isArray(idIn)) {
                _queryParams["id__in"] = idIn.map((item) => item);
            } else {
                _queryParams["id__in"] = idIn;
            }
        }

        if (status != null) {
            _queryParams["status"] = status;
        }

        if (statusIn != null) {
            if (Array.isArray(statusIn)) {
                _queryParams["status__in"] = statusIn.map((item) => item);
            } else {
                _queryParams["status__in"] = statusIn;
            }
        }

        if (name != null) {
            _queryParams["name"] = name;
        }

        if (nameContains != null) {
            _queryParams["name__contains"] = nameContains;
        }

        if (nameNcontains != null) {
            _queryParams["name__ncontains"] = nameNcontains;
        }

        if (createdBy != null) {
            _queryParams["created_by"] = createdBy;
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

        if (updatedAtGt != null) {
            _queryParams["updated_at__gt"] = updatedAtGt;
        }

        if (updatedAtLt != null) {
            _queryParams["updated_at__lt"] = updatedAtLt;
        }

        if (updatedAtGte != null) {
            _queryParams["updated_at__gte"] = updatedAtGte;
        }

        if (updatedAtLte != null) {
            _queryParams["updated_at__lte"] = updatedAtLte;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                "approval_policies"
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
                "X-Fern-SDK-Version": "0.2.0",
                "User-Agent": "@monite/node-client/0.2.0",
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
            return _response.body as Monite.ApprovalPolicyResourceList;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Monite.UnauthorizedError(_response.error.body as unknown);
                case 409:
                    throw new Monite.ConflictError(_response.error.body as unknown);
                case 422:
                    throw new Monite.UnprocessableEntityError(_response.error.body as Monite.HttpValidationError);
                case 500:
                    throw new Monite.InternalServerError(_response.error.body as unknown);
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
                throw new errors.MoniteTimeoutError("Timeout exceeded when calling GET /approval_policies.");
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Create a new approval policy.
     *
     * @param {Monite.ApprovalPolicyCreate} request
     * @param {ApprovalPolicies.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.BadRequestError}
     * @throws {@link Monite.UnauthorizedError}
     * @throws {@link Monite.ConflictError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.approvalPolicies.create({
     *         name: "name",
     *         description: "description",
     *         script: [true]
     *     })
     */
    public async create(
        request: Monite.ApprovalPolicyCreate,
        requestOptions?: ApprovalPolicies.RequestOptions
    ): Promise<Monite.ApprovalPolicyResource> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                "approval_policies"
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
                "X-Fern-SDK-Version": "0.2.0",
                "User-Agent": "@monite/node-client/0.2.0",
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
            return _response.body as Monite.ApprovalPolicyResource;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Monite.BadRequestError(_response.error.body as unknown);
                case 401:
                    throw new Monite.UnauthorizedError(_response.error.body as unknown);
                case 409:
                    throw new Monite.ConflictError(_response.error.body as unknown);
                case 422:
                    throw new Monite.UnprocessableEntityError(_response.error.body as Monite.HttpValidationError);
                case 500:
                    throw new Monite.InternalServerError(_response.error.body as unknown);
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
                throw new errors.MoniteTimeoutError("Timeout exceeded when calling POST /approval_policies.");
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Retrieve a specific approval policy.
     *
     * @param {string} approvalPolicyId
     * @param {ApprovalPolicies.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.UnauthorizedError}
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.ConflictError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.approvalPolicies.getById("approval_policy_id")
     */
    public async getById(
        approvalPolicyId: string,
        requestOptions?: ApprovalPolicies.RequestOptions
    ): Promise<Monite.ApprovalPolicyResource> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                `approval_policies/${encodeURIComponent(approvalPolicyId)}`
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
                "X-Fern-SDK-Version": "0.2.0",
                "User-Agent": "@monite/node-client/0.2.0",
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
            return _response.body as Monite.ApprovalPolicyResource;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Monite.UnauthorizedError(_response.error.body as unknown);
                case 404:
                    throw new Monite.NotFoundError(_response.error.body as unknown);
                case 409:
                    throw new Monite.ConflictError(_response.error.body as unknown);
                case 422:
                    throw new Monite.UnprocessableEntityError(_response.error.body as Monite.HttpValidationError);
                case 500:
                    throw new Monite.InternalServerError(_response.error.body as unknown);
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
                    "Timeout exceeded when calling GET /approval_policies/{approval_policy_id}."
                );
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Delete an existing approval policy.
     *
     * @param {string} approvalPolicyId
     * @param {ApprovalPolicies.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.UnauthorizedError}
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.ConflictError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.approvalPolicies.deleteById("approval_policy_id")
     */
    public async deleteById(approvalPolicyId: string, requestOptions?: ApprovalPolicies.RequestOptions): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                `approval_policies/${encodeURIComponent(approvalPolicyId)}`
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
                "X-Fern-SDK-Version": "0.2.0",
                "User-Agent": "@monite/node-client/0.2.0",
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
                case 401:
                    throw new Monite.UnauthorizedError(_response.error.body as unknown);
                case 404:
                    throw new Monite.NotFoundError(_response.error.body as unknown);
                case 409:
                    throw new Monite.ConflictError(_response.error.body as unknown);
                case 422:
                    throw new Monite.UnprocessableEntityError(_response.error.body as Monite.HttpValidationError);
                case 500:
                    throw new Monite.InternalServerError(_response.error.body as unknown);
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
                    "Timeout exceeded when calling DELETE /approval_policies/{approval_policy_id}."
                );
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Update an existing approval policy.
     *
     * @param {string} approvalPolicyId
     * @param {Monite.ApprovalPolicyUpdate} request
     * @param {ApprovalPolicies.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.BadRequestError}
     * @throws {@link Monite.UnauthorizedError}
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.ConflictError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.approvalPolicies.updateById("approval_policy_id")
     */
    public async updateById(
        approvalPolicyId: string,
        request: Monite.ApprovalPolicyUpdate = {},
        requestOptions?: ApprovalPolicies.RequestOptions
    ): Promise<Monite.ApprovalPolicyResource> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                `approval_policies/${encodeURIComponent(approvalPolicyId)}`
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
                "X-Fern-SDK-Version": "0.2.0",
                "User-Agent": "@monite/node-client/0.2.0",
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
            return _response.body as Monite.ApprovalPolicyResource;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Monite.BadRequestError(_response.error.body as unknown);
                case 401:
                    throw new Monite.UnauthorizedError(_response.error.body as unknown);
                case 404:
                    throw new Monite.NotFoundError(_response.error.body as unknown);
                case 409:
                    throw new Monite.ConflictError(_response.error.body as unknown);
                case 422:
                    throw new Monite.UnprocessableEntityError(_response.error.body as Monite.HttpValidationError);
                case 500:
                    throw new Monite.InternalServerError(_response.error.body as unknown);
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
                    "Timeout exceeded when calling PATCH /approval_policies/{approval_policy_id}."
                );
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected _processes: Processes | undefined;

    public get processes(): Processes {
        return (this._processes ??= new Processes(this._options));
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
