/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Monite from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";
import { Addresses } from "../resources/addresses/client/Client";
import { BankAccounts } from "../resources/bankAccounts/client/Client";
import { Contacts } from "../resources/contacts/client/Client";
import { VatIds } from "../resources/vatIds/client/Client";

export declare namespace Counterparts {
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

export class Counterparts {
    constructor(protected readonly _options: Counterparts.Options) {}

    /**
     * @param {Monite.CounterpartsGetRequest} request
     * @param {Counterparts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.counterparts.get({
     *         sort_code: "123456"
     *     })
     */
    public async get(
        request: Monite.CounterpartsGetRequest = {},
        requestOptions?: Counterparts.RequestOptions
    ): Promise<Monite.CounterpartPaginationResponse> {
        const {
            iban,
            sort_code: sortCode,
            account_number: accountNumber,
            tax_id: taxId,
            vat_id: vatId,
            id__in: idIn,
            order,
            limit,
            pagination_token: paginationToken,
            sort,
            type: type_,
            counterpart_name: counterpartName,
            counterpart_name__iexact: counterpartNameIexact,
            counterpart_name__contains: counterpartNameContains,
            counterpart_name__icontains: counterpartNameIcontains,
            is_vendor: isVendor,
            is_customer: isCustomer,
            email,
            email__contains: emailContains,
            email__icontains: emailIcontains,
            created_at__gt: createdAtGt,
            created_at__lt: createdAtLt,
            created_at__gte: createdAtGte,
            created_at__lte: createdAtLte,
            "address.country": addressCountry,
            "address.city": addressCity,
            "address.postal_code": addressPostalCode,
            "address.state": addressState,
            "address.line1": addressLine1,
            "address.line2": addressLine2,
            tag_ids__in: tagIdsIn,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (iban != null) {
            _queryParams["iban"] = iban;
        }

        if (sortCode != null) {
            _queryParams["sort_code"] = sortCode;
        }

        if (accountNumber != null) {
            _queryParams["account_number"] = accountNumber;
        }

        if (taxId != null) {
            _queryParams["tax_id"] = taxId;
        }

        if (vatId != null) {
            _queryParams["vat_id"] = vatId;
        }

        if (idIn != null) {
            if (Array.isArray(idIn)) {
                _queryParams["id__in"] = idIn.map((item) => item);
            } else {
                _queryParams["id__in"] = idIn;
            }
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

        if (type_ != null) {
            _queryParams["type"] = type_;
        }

        if (counterpartName != null) {
            _queryParams["counterpart_name"] = counterpartName;
        }

        if (counterpartNameIexact != null) {
            _queryParams["counterpart_name__iexact"] = counterpartNameIexact;
        }

        if (counterpartNameContains != null) {
            _queryParams["counterpart_name__contains"] = counterpartNameContains;
        }

        if (counterpartNameIcontains != null) {
            _queryParams["counterpart_name__icontains"] = counterpartNameIcontains;
        }

        if (isVendor != null) {
            _queryParams["is_vendor"] = isVendor.toString();
        }

        if (isCustomer != null) {
            _queryParams["is_customer"] = isCustomer.toString();
        }

        if (email != null) {
            _queryParams["email"] = email;
        }

        if (emailContains != null) {
            _queryParams["email__contains"] = emailContains;
        }

        if (emailIcontains != null) {
            _queryParams["email__icontains"] = emailIcontains;
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

        if (addressCountry != null) {
            _queryParams["address.country"] = addressCountry;
        }

        if (addressCity != null) {
            _queryParams["address.city"] = addressCity;
        }

        if (addressPostalCode != null) {
            _queryParams["address.postal_code"] = addressPostalCode;
        }

        if (addressState != null) {
            _queryParams["address.state"] = addressState;
        }

        if (addressLine1 != null) {
            _queryParams["address.line1"] = addressLine1;
        }

        if (addressLine2 != null) {
            _queryParams["address.line2"] = addressLine2;
        }

        if (tagIdsIn != null) {
            if (Array.isArray(tagIdsIn)) {
                _queryParams["tag_ids__in"] = tagIdsIn.map((item) => item);
            } else {
                _queryParams["tag_ids__in"] = tagIdsIn;
            }
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                "counterparts"
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
            return _response.body as Monite.CounterpartPaginationResponse;
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
                throw new errors.MoniteTimeoutError("Timeout exceeded when calling GET /counterparts.");
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {Monite.CounterpartCreatePayload} request
     * @param {Counterparts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.counterparts.create({
     *         type: "individual",
     *         individual: {
     *             address: {
     *                 city: "Berlin",
     *                 country: "AF",
     *                 line1: "Flughafenstrasse 52",
     *                 postal_code: "10115"
     *             },
     *             first_name: "Adnan",
     *             is_customer: true,
     *             is_vendor: true,
     *             last_name: "Singh"
     *         }
     *     })
     */
    public async create(
        request: Monite.CounterpartCreatePayload,
        requestOptions?: Counterparts.RequestOptions
    ): Promise<Monite.CounterpartResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                "counterparts"
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
            return _response.body as Monite.CounterpartResponse;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
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
                throw new errors.MoniteTimeoutError("Timeout exceeded when calling POST /counterparts.");
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} counterpartId
     * @param {Counterparts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.counterparts.getById("counterpart_id")
     */
    public async getById(
        counterpartId: string,
        requestOptions?: Counterparts.RequestOptions
    ): Promise<Monite.CounterpartResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                `counterparts/${encodeURIComponent(counterpartId)}`
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
            return _response.body as Monite.CounterpartResponse;
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
                    "Timeout exceeded when calling GET /counterparts/{counterpart_id}."
                );
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} counterpartId
     * @param {Counterparts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.counterparts.deleteById("counterpart_id")
     */
    public async deleteById(counterpartId: string, requestOptions?: Counterparts.RequestOptions): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                `counterparts/${encodeURIComponent(counterpartId)}`
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
                    "Timeout exceeded when calling DELETE /counterparts/{counterpart_id}."
                );
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} counterpartId
     * @param {Monite.CounterpartUpdatePayload} request
     * @param {Counterparts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.counterparts.updateById("counterpart_id", {
     *         individual: {}
     *     })
     */
    public async updateById(
        counterpartId: string,
        request: Monite.CounterpartUpdatePayload,
        requestOptions?: Counterparts.RequestOptions
    ): Promise<Monite.CounterpartResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                `counterparts/${encodeURIComponent(counterpartId)}`
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
            return _response.body as Monite.CounterpartResponse;
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
                    "Timeout exceeded when calling PATCH /counterparts/{counterpart_id}."
                );
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} counterpartId
     * @param {Counterparts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.counterparts.getPartnerMetadataById("counterpart_id")
     */
    public async getPartnerMetadataById(
        counterpartId: string,
        requestOptions?: Counterparts.RequestOptions
    ): Promise<Monite.PartnerMetadataResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                `counterparts/${encodeURIComponent(counterpartId)}/partner_metadata`
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
            return _response.body as Monite.PartnerMetadataResponse;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
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
                    "Timeout exceeded when calling GET /counterparts/{counterpart_id}/partner_metadata."
                );
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} counterpartId
     * @param {Monite.PartnerMetadata} request
     * @param {Counterparts.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.counterparts.updatePartnerMetadataById("counterpart_id", {
     *         metadata: {
     *             "key": "value"
     *         }
     *     })
     */
    public async updatePartnerMetadataById(
        counterpartId: string,
        request: Monite.PartnerMetadata,
        requestOptions?: Counterparts.RequestOptions
    ): Promise<Monite.PartnerMetadataResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                `counterparts/${encodeURIComponent(counterpartId)}/partner_metadata`
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
            return _response.body as Monite.PartnerMetadataResponse;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
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
                    "Timeout exceeded when calling PUT /counterparts/{counterpart_id}/partner_metadata."
                );
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    protected _addresses: Addresses | undefined;

    public get addresses(): Addresses {
        return (this._addresses ??= new Addresses(this._options));
    }

    protected _bankAccounts: BankAccounts | undefined;

    public get bankAccounts(): BankAccounts {
        return (this._bankAccounts ??= new BankAccounts(this._options));
    }

    protected _contacts: Contacts | undefined;

    public get contacts(): Contacts {
        return (this._contacts ??= new Contacts(this._options));
    }

    protected _vatIds: VatIds | undefined;

    public get vatIds(): VatIds {
        return (this._vatIds ??= new VatIds(this._options));
    }

    protected async _getAuthorizationHeader(): Promise<string | undefined> {
        const bearer = await core.Supplier.get(this._options.token);
        if (bearer != null) {
            return `Bearer ${bearer}`;
        }

        return undefined;
    }
}
