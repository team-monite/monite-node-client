/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Monite from "../../../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index";

export declare namespace Persons {
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

export class Persons {
    constructor(protected readonly _options: Persons.Options) {}

    /**
     * @param {Persons.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.entities.persons.get()
     */
    public get(requestOptions?: Persons.RequestOptions): core.HttpResponsePromise<Monite.PersonsResponse> {
        return core.HttpResponsePromise.fromPromise(this.__get(requestOptions));
    }

    private async __get(
        requestOptions?: Persons.RequestOptions,
    ): Promise<core.WithRawResponse<Monite.PersonsResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MoniteEnvironment.Sandbox,
                "persons",
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
            return { data: _response.body as Monite.PersonsResponse, rawResponse: _response.rawResponse };
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
                throw new errors.MoniteTimeoutError("Timeout exceeded when calling GET /persons.");
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {Monite.entities.PersonRequest} request
     * @param {Persons.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.ConflictError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.entities.persons.create({
     *         email: "email",
     *         first_name: "first_name",
     *         last_name: "last_name",
     *         relationship: {}
     *     })
     */
    public create(
        request: Monite.entities.PersonRequest,
        requestOptions?: Persons.RequestOptions,
    ): core.HttpResponsePromise<Monite.PersonResponse> {
        return core.HttpResponsePromise.fromPromise(this.__create(request, requestOptions));
    }

    private async __create(
        request: Monite.entities.PersonRequest,
        requestOptions?: Persons.RequestOptions,
    ): Promise<core.WithRawResponse<Monite.PersonResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MoniteEnvironment.Sandbox,
                "persons",
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
            return { data: _response.body as Monite.PersonResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
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
                throw new errors.MoniteTimeoutError("Timeout exceeded when calling POST /persons.");
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {string} personId
     * @param {Persons.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.entities.persons.getById("person_id")
     */
    public getById(
        personId: string,
        requestOptions?: Persons.RequestOptions,
    ): core.HttpResponsePromise<Monite.PersonResponse> {
        return core.HttpResponsePromise.fromPromise(this.__getById(personId, requestOptions));
    }

    private async __getById(
        personId: string,
        requestOptions?: Persons.RequestOptions,
    ): Promise<core.WithRawResponse<Monite.PersonResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MoniteEnvironment.Sandbox,
                `persons/${encodeURIComponent(personId)}`,
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
            return { data: _response.body as Monite.PersonResponse, rawResponse: _response.rawResponse };
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
                throw new errors.MoniteTimeoutError("Timeout exceeded when calling GET /persons/{person_id}.");
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {string} personId
     * @param {Persons.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.ConflictError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.entities.persons.deleteById("person_id")
     */
    public deleteById(personId: string, requestOptions?: Persons.RequestOptions): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__deleteById(personId, requestOptions));
    }

    private async __deleteById(
        personId: string,
        requestOptions?: Persons.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MoniteEnvironment.Sandbox,
                `persons/${encodeURIComponent(personId)}`,
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
                throw new errors.MoniteTimeoutError("Timeout exceeded when calling DELETE /persons/{person_id}.");
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {string} personId
     * @param {Monite.entities.OptionalPersonRequest} request
     * @param {Persons.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.ConflictError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.entities.persons.updateById("person_id")
     */
    public updateById(
        personId: string,
        request: Monite.entities.OptionalPersonRequest = {},
        requestOptions?: Persons.RequestOptions,
    ): core.HttpResponsePromise<Monite.PersonResponse> {
        return core.HttpResponsePromise.fromPromise(this.__updateById(personId, request, requestOptions));
    }

    private async __updateById(
        personId: string,
        request: Monite.entities.OptionalPersonRequest = {},
        requestOptions?: Persons.RequestOptions,
    ): Promise<core.WithRawResponse<Monite.PersonResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MoniteEnvironment.Sandbox,
                `persons/${encodeURIComponent(personId)}`,
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
            return { data: _response.body as Monite.PersonResponse, rawResponse: _response.rawResponse };
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
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
                throw new errors.MoniteTimeoutError("Timeout exceeded when calling PATCH /persons/{person_id}.");
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * Provide files for person onboarding verification
     *
     * @param {string} personId
     * @param {Monite.entities.PersonOnboardingDocumentsPayload} request
     * @param {Persons.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.entities.persons.uploadOnboardingDocuments("person_id")
     */
    public uploadOnboardingDocuments(
        personId: string,
        request: Monite.entities.PersonOnboardingDocumentsPayload = {},
        requestOptions?: Persons.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(
            this.__uploadOnboardingDocuments(personId, request, requestOptions),
        );
    }

    private async __uploadOnboardingDocuments(
        personId: string,
        request: Monite.entities.PersonOnboardingDocumentsPayload = {},
        requestOptions?: Persons.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MoniteEnvironment.Sandbox,
                `persons/${encodeURIComponent(personId)}/onboarding_documents`,
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
            return { data: undefined, rawResponse: _response.rawResponse };
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
                    "Timeout exceeded when calling POST /persons/{person_id}/onboarding_documents.",
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
