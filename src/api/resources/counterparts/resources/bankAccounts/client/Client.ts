/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Monite from "../../../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index";

export declare namespace BankAccounts {
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

export class BankAccounts {
    constructor(protected readonly _options: BankAccounts.Options) {}

    /**
     * @param {string} counterpartId
     * @param {BankAccounts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.counterparts.bankAccounts.get("counterpart_id")
     */
    public get(
        counterpartId: string,
        requestOptions?: BankAccounts.RequestOptions,
    ): core.HttpResponsePromise<Monite.CounterpartBankAccountResourceList> {
        return core.HttpResponsePromise.fromPromise(this.__get(counterpartId, requestOptions));
    }

    private async __get(
        counterpartId: string,
        requestOptions?: BankAccounts.RequestOptions,
    ): Promise<core.WithRawResponse<Monite.CounterpartBankAccountResourceList>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MoniteEnvironment.Sandbox,
                `counterparts/${encodeURIComponent(counterpartId)}/bank_accounts`,
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
                data: _response.body as Monite.CounterpartBankAccountResourceList,
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
                    "Timeout exceeded when calling GET /counterparts/{counterpart_id}/bank_accounts.",
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
     * @param {Monite.counterparts.CreateCounterpartBankAccount} request
     * @param {BankAccounts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.counterparts.bankAccounts.create("counterpart_id", {
     *         country: "AF",
     *         currency: "AED"
     *     })
     */
    public create(
        counterpartId: string,
        request: Monite.counterparts.CreateCounterpartBankAccount,
        requestOptions?: BankAccounts.RequestOptions,
    ): core.HttpResponsePromise<Monite.CounterpartBankAccountResponse> {
        return core.HttpResponsePromise.fromPromise(this.__create(counterpartId, request, requestOptions));
    }

    private async __create(
        counterpartId: string,
        request: Monite.counterparts.CreateCounterpartBankAccount,
        requestOptions?: BankAccounts.RequestOptions,
    ): Promise<core.WithRawResponse<Monite.CounterpartBankAccountResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MoniteEnvironment.Sandbox,
                `counterparts/${encodeURIComponent(counterpartId)}/bank_accounts`,
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
            return {
                data: _response.body as Monite.CounterpartBankAccountResponse,
                rawResponse: _response.rawResponse,
            };
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
                    "Timeout exceeded when calling POST /counterparts/{counterpart_id}/bank_accounts.",
                );
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {string} bankAccountId
     * @param {string} counterpartId
     * @param {BankAccounts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.counterparts.bankAccounts.getById("bank_account_id", "counterpart_id")
     */
    public getById(
        bankAccountId: string,
        counterpartId: string,
        requestOptions?: BankAccounts.RequestOptions,
    ): core.HttpResponsePromise<Monite.CounterpartBankAccountResponse> {
        return core.HttpResponsePromise.fromPromise(this.__getById(bankAccountId, counterpartId, requestOptions));
    }

    private async __getById(
        bankAccountId: string,
        counterpartId: string,
        requestOptions?: BankAccounts.RequestOptions,
    ): Promise<core.WithRawResponse<Monite.CounterpartBankAccountResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MoniteEnvironment.Sandbox,
                `counterparts/${encodeURIComponent(counterpartId)}/bank_accounts/${encodeURIComponent(bankAccountId)}`,
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
                data: _response.body as Monite.CounterpartBankAccountResponse,
                rawResponse: _response.rawResponse,
            };
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
                    "Timeout exceeded when calling GET /counterparts/{counterpart_id}/bank_accounts/{bank_account_id}.",
                );
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {string} bankAccountId
     * @param {string} counterpartId
     * @param {BankAccounts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.counterparts.bankAccounts.deleteById("bank_account_id", "counterpart_id")
     */
    public deleteById(
        bankAccountId: string,
        counterpartId: string,
        requestOptions?: BankAccounts.RequestOptions,
    ): core.HttpResponsePromise<void> {
        return core.HttpResponsePromise.fromPromise(this.__deleteById(bankAccountId, counterpartId, requestOptions));
    }

    private async __deleteById(
        bankAccountId: string,
        counterpartId: string,
        requestOptions?: BankAccounts.RequestOptions,
    ): Promise<core.WithRawResponse<void>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MoniteEnvironment.Sandbox,
                `counterparts/${encodeURIComponent(counterpartId)}/bank_accounts/${encodeURIComponent(bankAccountId)}`,
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
                    "Timeout exceeded when calling DELETE /counterparts/{counterpart_id}/bank_accounts/{bank_account_id}.",
                );
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {string} bankAccountId
     * @param {string} counterpartId
     * @param {Monite.counterparts.UpdateCounterpartBankAccount} request
     * @param {BankAccounts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.counterparts.bankAccounts.updateById("bank_account_id", "counterpart_id")
     */
    public updateById(
        bankAccountId: string,
        counterpartId: string,
        request: Monite.counterparts.UpdateCounterpartBankAccount = {},
        requestOptions?: BankAccounts.RequestOptions,
    ): core.HttpResponsePromise<Monite.CounterpartBankAccountResponse> {
        return core.HttpResponsePromise.fromPromise(
            this.__updateById(bankAccountId, counterpartId, request, requestOptions),
        );
    }

    private async __updateById(
        bankAccountId: string,
        counterpartId: string,
        request: Monite.counterparts.UpdateCounterpartBankAccount = {},
        requestOptions?: BankAccounts.RequestOptions,
    ): Promise<core.WithRawResponse<Monite.CounterpartBankAccountResponse>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MoniteEnvironment.Sandbox,
                `counterparts/${encodeURIComponent(counterpartId)}/bank_accounts/${encodeURIComponent(bankAccountId)}`,
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
            return {
                data: _response.body as Monite.CounterpartBankAccountResponse,
                rawResponse: _response.rawResponse,
            };
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
                    "Timeout exceeded when calling PATCH /counterparts/{counterpart_id}/bank_accounts/{bank_account_id}.",
                );
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                    rawResponse: _response.rawResponse,
                });
        }
    }

    /**
     * @param {string} bankAccountId
     * @param {string} counterpartId
     * @param {BankAccounts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.counterparts.bankAccounts.makeDefaultById("bank_account_id", "counterpart_id")
     */
    public makeDefaultById(
        bankAccountId: string,
        counterpartId: string,
        requestOptions?: BankAccounts.RequestOptions,
    ): core.HttpResponsePromise<unknown> {
        return core.HttpResponsePromise.fromPromise(
            this.__makeDefaultById(bankAccountId, counterpartId, requestOptions),
        );
    }

    private async __makeDefaultById(
        bankAccountId: string,
        counterpartId: string,
        requestOptions?: BankAccounts.RequestOptions,
    ): Promise<core.WithRawResponse<unknown>> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.baseUrl)) ??
                    (await core.Supplier.get(this._options.environment)) ??
                    environments.MoniteEnvironment.Sandbox,
                `counterparts/${encodeURIComponent(counterpartId)}/bank_accounts/${encodeURIComponent(bankAccountId)}/make_default`,
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
            return { data: _response.body, rawResponse: _response.rawResponse };
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
                    "Timeout exceeded when calling POST /counterparts/{counterpart_id}/bank_accounts/{bank_account_id}/make_default.",
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
