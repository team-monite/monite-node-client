/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../../../environments";
import * as core from "../../../../../../core";
import * as Monite from "../../../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../../../errors/index";

export declare namespace BankAccounts {
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

export class BankAccounts {
    constructor(protected readonly _options: BankAccounts.Options) {}

    /**
     * Get all bank accounts of this entity.
     *
     * @param {BankAccounts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.ConflictError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.entities.bankAccounts.get()
     */
    public async get(
        requestOptions?: BankAccounts.RequestOptions
    ): Promise<Monite.EntityBankAccountPaginationResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                "bank_accounts"
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
            return _response.body as Monite.EntityBankAccountPaginationResponse;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
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
                throw new errors.MoniteTimeoutError("Timeout exceeded when calling GET /bank_accounts.");
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Add a new bank account for the specified entity.
     *
     * The minimum required fields are `currency` and `country`. Other required fields depend on the currency:
     *
     * * EUR accounts require `iban`.
     * * GBP accounts require `account_holder_name`, `account_number`, and `sort_code`.
     * * USD accounts require `account_holder_name`, `account_number`, and `routing_number`.
     * * Accounts in other currencies require one of:
     *   * `iban`
     *   * `account_number` and `sort_code`
     *   * `account_number` and `routing_number`
     *
     * @param {Monite.entities.CreateEntityBankAccountRequest} request
     * @param {BankAccounts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.ConflictError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.entities.bankAccounts.create({
     *         country: "AF",
     *         currency: "AED"
     *     })
     */
    public async create(
        request: Monite.entities.CreateEntityBankAccountRequest,
        requestOptions?: BankAccounts.RequestOptions
    ): Promise<Monite.EntityBankAccountResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                "bank_accounts"
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
            return _response.body as Monite.EntityBankAccountResponse;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
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
                throw new errors.MoniteTimeoutError("Timeout exceeded when calling POST /bank_accounts.");
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Retrieve a bank account by its ID.
     *
     * @param {string} bankAccountId
     * @param {BankAccounts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.ConflictError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.entities.bankAccounts.getById("bank_account_id")
     */
    public async getById(
        bankAccountId: string,
        requestOptions?: BankAccounts.RequestOptions
    ): Promise<Monite.EntityBankAccountResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                `bank_accounts/${encodeURIComponent(bankAccountId)}`
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
            return _response.body as Monite.EntityBankAccountResponse;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
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
                    "Timeout exceeded when calling GET /bank_accounts/{bank_account_id}."
                );
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Delete the bank account specified by its ID.
     *
     * @param {string} bankAccountId
     * @param {BankAccounts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.ConflictError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.entities.bankAccounts.deleteById("bank_account_id")
     */
    public async deleteById(bankAccountId: string, requestOptions?: BankAccounts.RequestOptions): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                `bank_accounts/${encodeURIComponent(bankAccountId)}`
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
                    "Timeout exceeded when calling DELETE /bank_accounts/{bank_account_id}."
                );
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Change the specified fields with the provided values.
     *
     * @param {string} bankAccountId
     * @param {Monite.entities.UpdateEntityBankAccountRequest} request
     * @param {BankAccounts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.ConflictError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.entities.bankAccounts.updateById("bank_account_id")
     */
    public async updateById(
        bankAccountId: string,
        request: Monite.entities.UpdateEntityBankAccountRequest = {},
        requestOptions?: BankAccounts.RequestOptions
    ): Promise<Monite.EntityBankAccountResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                `bank_accounts/${encodeURIComponent(bankAccountId)}`
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
            return _response.body as Monite.EntityBankAccountResponse;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
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
                    "Timeout exceeded when calling PATCH /bank_accounts/{bank_account_id}."
                );
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * Set a bank account as the default for this entity per currency.
     *
     * @param {string} bankAccountId
     * @param {BankAccounts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.ConflictError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.entities.bankAccounts.makeDefaultById("bank_account_id")
     */
    public async makeDefaultById(
        bankAccountId: string,
        requestOptions?: BankAccounts.RequestOptions
    ): Promise<Monite.EntityBankAccountResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                `bank_accounts/${encodeURIComponent(bankAccountId)}/make_default`
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
            return _response.body as Monite.EntityBankAccountResponse;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
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
                    "Timeout exceeded when calling POST /bank_accounts/{bank_account_id}/make_default."
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
