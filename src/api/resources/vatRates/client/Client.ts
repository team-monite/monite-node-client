/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Monite from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace VatRates {
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

export class VatRates {
    constructor(protected readonly _options: VatRates.Options) {}

    /**
     * @param {Monite.VatRatesGetRequest} request
     * @param {VatRates.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.BadRequestError}
     * @throws {@link Monite.UnauthorizedError}
     * @throws {@link Monite.ForbiddenError}
     * @throws {@link Monite.NotFoundError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.vatRates.get()
     */
    public async get(
        request: Monite.VatRatesGetRequest = {},
        requestOptions?: VatRates.RequestOptions
    ): Promise<Monite.VatRateListResponse> {
        const {
            counterpart_address_id: counterpartAddressId,
            counterpart_id: counterpartId,
            counterpart_vat_id_id: counterpartVatIdId,
            entity_vat_id_id: entityVatIdId,
            product_type: productType,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (counterpartAddressId != null) {
            _queryParams["counterpart_address_id"] = counterpartAddressId;
        }

        if (counterpartId != null) {
            _queryParams["counterpart_id"] = counterpartId;
        }

        if (counterpartVatIdId != null) {
            _queryParams["counterpart_vat_id_id"] = counterpartVatIdId;
        }

        if (entityVatIdId != null) {
            _queryParams["entity_vat_id_id"] = entityVatIdId;
        }

        if (productType != null) {
            _queryParams["product_type"] = productType;
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                "vat_rates"
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
            return _response.body as Monite.VatRateListResponse;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 400:
                    throw new Monite.BadRequestError(_response.error.body as Monite.ErrorSchemaResponse);
                case 401:
                    throw new Monite.UnauthorizedError(_response.error.body as Monite.ErrorSchemaResponse);
                case 403:
                    throw new Monite.ForbiddenError(_response.error.body as Monite.ErrorSchemaResponse);
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
                throw new errors.MoniteTimeoutError("Timeout exceeded when calling GET /vat_rates.");
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
