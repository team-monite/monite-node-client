/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Monite from "../../../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index";

export declare namespace Contacts {
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

export class Contacts {
    constructor(protected readonly _options: Contacts.Options) {}

    /**
     * @param {string} counterpartId
     * @param {Contacts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.counterparts.contacts.get("counterpart_id")
     */
    public get(
        counterpartId: string,
        requestOptions?: Contacts.RequestOptions,
    ): core.HttpResponsePromise<Monite.CounterpartContactsResourceList> {
        return core.HttpResponsePromise.fromPromise(this.__get(counterpartId, requestOptions));
    }

    private async __get(
        counterpartId: string,
        requestOptions?: Contacts.RequestOptions,
    ): Promise<core.WithRawResponse<Monite.CounterpartContactsResourceList>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MoniteEnvironment.Sandbox,
                `counterparts/${encodeURIComponent(counterpartId)}/contacts`,
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
            return {
                data: _response.body as Monite.CounterpartContactsResourceList,
                rawResponse: _response.rawResponse,
            };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
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
                throw new errors.MoniteTimeoutError(
                    "Timeout exceeded when calling GET /counterparts/{counterpart_id}/contacts.",
                );
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {string} counterpartId
     * @param {Monite.counterparts.CreateCounterpartContactPayload} request
     * @param {Contacts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.counterparts.contacts.create("counterpart_id", {
     *         address: {
     *             city: "Berlin",
     *             country: "AF",
     *             line1: "Flughafenstrasse 52",
     *             postal_code: "10115"
     *         },
     *         first_name: "Mary",
     *         last_name: "O'Brien"
     *     })
     */
    public create(
        counterpartId: string,
        request: Monite.counterparts.CreateCounterpartContactPayload,
        requestOptions?: Contacts.RequestOptions,
    ): core.HttpResponsePromise<Monite.CounterpartContactResponse> {
        return core.HttpResponsePromise.fromPromise(this.__create(counterpartId, request, requestOptions));
    }

    private async __create(
        counterpartId: string,
        request: Monite.counterparts.CreateCounterpartContactPayload,
        requestOptions?: Contacts.RequestOptions,
    ): Promise<core.WithRawResponse<Monite.CounterpartContactResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MoniteEnvironment.Sandbox,
                `counterparts/${encodeURIComponent(counterpartId)}/contacts`,
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
            return { data: _response.body as Monite.CounterpartContactResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new Monite.NotFoundError(_response.error.body as unknown, _response.rawResponse);
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
                throw new errors.MoniteTimeoutError(
                    "Timeout exceeded when calling POST /counterparts/{counterpart_id}/contacts.",
                );
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {string} contactId
     * @param {string} counterpartId
     * @param {Contacts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.counterparts.contacts.getById("contact_id", "counterpart_id")
     */
    public getById(
        contactId: string,
        counterpartId: string,
        requestOptions?: Contacts.RequestOptions,
    ): core.HttpResponsePromise<Monite.CounterpartContactResponse> {
        return core.HttpResponsePromise.fromPromise(this.__getById(contactId, counterpartId, requestOptions));
    }

    private async __getById(
        contactId: string,
        counterpartId: string,
        requestOptions?: Contacts.RequestOptions,
    ): Promise<core.WithRawResponse<Monite.CounterpartContactResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MoniteEnvironment.Sandbox,
                `counterparts/${encodeURIComponent(counterpartId)}/contacts/${encodeURIComponent(contactId)}`,
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
            return { data: _response.body as Monite.CounterpartContactResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new Monite.NotFoundError(_response.error.body as unknown, _response.rawResponse);
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
                throw new errors.MoniteTimeoutError(
                    "Timeout exceeded when calling GET /counterparts/{counterpart_id}/contacts/{contact_id}.",
                );
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {string} contactId
     * @param {string} counterpartId
     * @param {Contacts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.counterparts.contacts.deleteById("contact_id", "counterpart_id")
     */
    public deleteById(
        contactId: string,
        counterpartId: string,
        requestOptions?: Contacts.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__deleteById(contactId, counterpartId, requestOptions));
    }

    private async __deleteById(
        contactId: string,
        counterpartId: string,
        requestOptions?: Contacts.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MoniteEnvironment.Sandbox,
                `counterparts/${encodeURIComponent(counterpartId)}/contacts/${encodeURIComponent(contactId)}`,
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
                case 404:
                    throw new Monite.NotFoundError(_response.error.body as unknown, _response.rawResponse);
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
                throw new errors.MoniteTimeoutError(
                    "Timeout exceeded when calling DELETE /counterparts/{counterpart_id}/contacts/{contact_id}.",
                );
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {string} contactId
     * @param {string} counterpartId
     * @param {Monite.counterparts.UpdateCounterpartContactPayload} request
     * @param {Contacts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.counterparts.contacts.updateById("contact_id", "counterpart_id")
     */
    public updateById(
        contactId: string,
        counterpartId: string,
        request: Monite.counterparts.UpdateCounterpartContactPayload = {},
        requestOptions?: Contacts.RequestOptions,
    ): core.HttpResponsePromise<Monite.CounterpartContactResponse> {
        return core.HttpResponsePromise.fromPromise(
            this.__updateById(contactId, counterpartId, request, requestOptions),
        );
    }

    private async __updateById(
        contactId: string,
        counterpartId: string,
        request: Monite.counterparts.UpdateCounterpartContactPayload = {},
        requestOptions?: Contacts.RequestOptions,
    ): Promise<core.WithRawResponse<Monite.CounterpartContactResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MoniteEnvironment.Sandbox,
                `counterparts/${encodeURIComponent(counterpartId)}/contacts/${encodeURIComponent(contactId)}`,
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
            return { data: _response.body as Monite.CounterpartContactResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new Monite.NotFoundError(_response.error.body as unknown, _response.rawResponse);
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
                throw new errors.MoniteTimeoutError(
                    "Timeout exceeded when calling PATCH /counterparts/{counterpart_id}/contacts/{contact_id}.",
                );
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {string} contactId
     * @param {string} counterpartId
     * @param {Contacts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.counterparts.contacts.makeDefaultById("contact_id", "counterpart_id")
     */
    public makeDefaultById(
        contactId: string,
        counterpartId: string,
        requestOptions?: Contacts.RequestOptions,
    ): core.HttpResponsePromise<Monite.CounterpartContactResponse> {
        return core.HttpResponsePromise.fromPromise(this.__makeDefaultById(contactId, counterpartId, requestOptions));
    }

    private async __makeDefaultById(
        contactId: string,
        counterpartId: string,
        requestOptions?: Contacts.RequestOptions,
    ): Promise<core.WithRawResponse<Monite.CounterpartContactResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MoniteEnvironment.Sandbox,
                `counterparts/${encodeURIComponent(counterpartId)}/contacts/${encodeURIComponent(contactId)}/make_default`,
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
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return { data: _response.body as Monite.CounterpartContactResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 404:
                    throw new Monite.NotFoundError(_response.error.body as unknown, _response.rawResponse);
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
                throw new errors.MoniteTimeoutError(
                    "Timeout exceeded when calling POST /counterparts/{counterpart_id}/contacts/{contact_id}/make_default.",
                );
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
