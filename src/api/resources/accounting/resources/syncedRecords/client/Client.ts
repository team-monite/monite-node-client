/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Monite from "../../../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index";

export declare namespace SyncedRecords {
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

export class SyncedRecords {
    constructor(protected readonly _options: SyncedRecords.Options) {}

    /**
     * Get synchronized records
     *
     * @param {Monite.accounting.SyncedRecordsGetRequest} request
     * @param {SyncedRecords.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.accounting.syncedRecords.get({
     *         object_type: "product"
     *     })
     */
    public async get(
        request: Monite.accounting.SyncedRecordsGetRequest,
        requestOptions?: SyncedRecords.RequestOptions
    ): Promise<Monite.SyncRecordResourceList> {
        const {
            object_type: objectType,
            order,
            limit,
            pagination_token: paginationToken,
            sort,
            object_id: objectId,
            object_id__in: objectIdIn,
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
        _queryParams["object_type"] = objectType;
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

        if (objectId != null) {
            _queryParams["object_id"] = objectId;
        }

        if (objectIdIn != null) {
            if (Array.isArray(objectIdIn)) {
                _queryParams["object_id__in"] = objectIdIn.map((item) => item);
            } else {
                _queryParams["object_id__in"] = objectIdIn;
            }
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
                "accounting_synced_records"
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
            return _response.body as Monite.SyncRecordResourceList;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
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
                throw new errors.MoniteTimeoutError("Timeout exceeded when calling GET /accounting_synced_records.");
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Get synchronized record by id
     *
     * @param {string} syncedRecordId
     * @param {SyncedRecords.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.accounting.syncedRecords.getById("synced_record_id")
     */
    public async getById(
        syncedRecordId: string,
        requestOptions?: SyncedRecords.RequestOptions
    ): Promise<Monite.SyncRecordResource> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                `accounting_synced_records/${encodeURIComponent(syncedRecordId)}`
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
            return _response.body as Monite.SyncRecordResource;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
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
                    "Timeout exceeded when calling GET /accounting_synced_records/{synced_record_id}."
                );
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Push object to the accounting system manually
     *
     * @param {string} syncedRecordId
     * @param {SyncedRecords.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.accounting.syncedRecords.pushById("synced_record_id")
     */
    public async pushById(
        syncedRecordId: string,
        requestOptions?: SyncedRecords.RequestOptions
    ): Promise<Monite.SyncRecordResource> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                `accounting_synced_records/${encodeURIComponent(syncedRecordId)}/push`
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
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Monite.SyncRecordResource;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
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
                    "Timeout exceeded when calling POST /accounting_synced_records/{synced_record_id}/push."
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
