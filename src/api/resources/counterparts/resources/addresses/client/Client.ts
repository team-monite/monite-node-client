/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Monite from "../../../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index";

export declare namespace Addresses {
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

export class Addresses {
    constructor(protected readonly _options: Addresses.Options) {}

    /**
     * @param {string} counterpartId
     * @param {Addresses.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.counterparts.addresses.get("counterpart_id")
     */
    public async get(
        counterpartId: string,
        requestOptions?: Addresses.RequestOptions
    ): Promise<Monite.CounterpartAddressResourceList> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                `counterparts/${encodeURIComponent(counterpartId)}/addresses`
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
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Monite.CounterpartAddressResourceList;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new Monite.NotFoundError(_response.error.body as Monite.ErrorSchemaResponse);
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
                    "Timeout exceeded when calling GET /counterparts/{counterpart_id}/addresses."
                );
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} counterpartId
     * @param {Monite.CounterpartAddress} request
     * @param {Addresses.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.counterparts.addresses.create("counterpart_id", {
     *         city: "Berlin",
     *         country: "AF",
     *         line1: "Flughafenstrasse 52",
     *         postal_code: "10115"
     *     })
     */
    public async create(
        counterpartId: string,
        request: Monite.CounterpartAddress,
        requestOptions?: Addresses.RequestOptions
    ): Promise<Monite.CounterpartAddressResponseWithCounterpartId> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                `counterparts/${encodeURIComponent(counterpartId)}/addresses`
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
            return _response.body as Monite.CounterpartAddressResponseWithCounterpartId;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new Monite.NotFoundError(_response.error.body as Monite.ErrorSchemaResponse);
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
                    "Timeout exceeded when calling POST /counterparts/{counterpart_id}/addresses."
                );
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} addressId
     * @param {string} counterpartId
     * @param {Addresses.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.counterparts.addresses.getById("address_id", "counterpart_id")
     */
    public async getById(
        addressId: string,
        counterpartId: string,
        requestOptions?: Addresses.RequestOptions
    ): Promise<Monite.CounterpartAddressResponseWithCounterpartId> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                `counterparts/${encodeURIComponent(counterpartId)}/addresses/${encodeURIComponent(addressId)}`
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
                ...requestOptions?.headers,
            },
            contentType: "application/json",
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Monite.CounterpartAddressResponseWithCounterpartId;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new Monite.NotFoundError(_response.error.body as Monite.ErrorSchemaResponse);
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
                    "Timeout exceeded when calling GET /counterparts/{counterpart_id}/addresses/{address_id}."
                );
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} addressId
     * @param {string} counterpartId
     * @param {Addresses.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.counterparts.addresses.deleteById("address_id", "counterpart_id")
     */
    public async deleteById(
        addressId: string,
        counterpartId: string,
        requestOptions?: Addresses.RequestOptions
    ): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                `counterparts/${encodeURIComponent(counterpartId)}/addresses/${encodeURIComponent(addressId)}`
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
                "X-Fern-SDK-Name": "monite",
                "X-Fern-SDK-Version": "0.1.0",
                "User-Agent": "monite/0.1.0",
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
                case 404:
                    throw new Monite.NotFoundError(_response.error.body as Monite.ErrorSchemaResponse);
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
                    "Timeout exceeded when calling DELETE /counterparts/{counterpart_id}/addresses/{address_id}."
                );
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} addressId
     * @param {string} counterpartId
     * @param {Monite.counterparts.CounterpartUpdateAddress} request
     * @param {Addresses.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.counterparts.addresses.updateById("address_id", "counterpart_id")
     */
    public async updateById(
        addressId: string,
        counterpartId: string,
        request: Monite.counterparts.CounterpartUpdateAddress = {},
        requestOptions?: Addresses.RequestOptions
    ): Promise<Monite.CounterpartAddressResponseWithCounterpartId> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                `counterparts/${encodeURIComponent(counterpartId)}/addresses/${encodeURIComponent(addressId)}`
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
                "X-Fern-SDK-Name": "monite",
                "X-Fern-SDK-Version": "0.1.0",
                "User-Agent": "monite/0.1.0",
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
            return _response.body as Monite.CounterpartAddressResponseWithCounterpartId;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new Monite.NotFoundError(_response.error.body as Monite.ErrorSchemaResponse);
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
                    "Timeout exceeded when calling PATCH /counterparts/{counterpart_id}/addresses/{address_id}."
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
