/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Monite from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";
import * as fs from "fs";
import { Blob } from "buffer";

export declare namespace Files {
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

export class Files {
    constructor(protected readonly _options: Files.Options) {}

    /**
     * @param {Monite.FilesGetRequest} request
     * @param {Files.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.files.get()
     */
    public async get(
        request: Monite.FilesGetRequest = {},
        requestOptions?: Files.RequestOptions
    ): Promise<Monite.FilesResponse> {
        const { id__in: idIn } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (idIn != null) {
            if (Array.isArray(idIn)) {
                _queryParams["id__in"] = idIn.map((item) => item);
            } else {
                _queryParams["id__in"] = idIn;
            }
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                "files"
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
            return _response.body as Monite.FilesResponse;
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
                throw new errors.MoniteTimeoutError("Timeout exceeded when calling GET /files.");
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {File | fs.ReadStream | Blob} file
     * @param {Monite.UploadFile} request
     * @param {Files.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.files.upload(fs.createReadStream("/path/to/your/file"), {
     *         file_type: "ocr_results"
     *     })
     */
    public async upload(
        file: File | fs.ReadStream | Blob,
        request: Monite.UploadFile,
        requestOptions?: Files.RequestOptions
    ): Promise<Monite.FileResponse> {
        const _request = await core.newFormData();
        await _request.appendFile("file", file);
        await _request.append("file_type", request.file_type);
        const _maybeEncodedRequest = await _request.getRequest();
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                "files"
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
                ..._maybeEncodedRequest.headers,
                ...requestOptions?.headers,
            },
            requestType: "file",
            duplex: _maybeEncodedRequest.duplex,
            body: _maybeEncodedRequest.body,
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Monite.FileResponse;
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
                throw new errors.MoniteTimeoutError("Timeout exceeded when calling POST /files.");
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} fileId
     * @param {Files.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.files.getById("file_id")
     */
    public async getById(fileId: string, requestOptions?: Files.RequestOptions): Promise<Monite.FileResponse> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                `files/${encodeURIComponent(fileId)}`
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
            return _response.body as Monite.FileResponse;
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
                throw new errors.MoniteTimeoutError("Timeout exceeded when calling GET /files/{file_id}.");
            case "unknown":
                throw new errors.MoniteError({
                    message: _response.error.errorMessage,
                });
        }
    }

    /**
     * @param {string} fileId
     * @param {Files.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.files.delete("file_id")
     */
    public async delete(fileId: string, requestOptions?: Files.RequestOptions): Promise<void> {
        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                `files/${encodeURIComponent(fileId)}`
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
                throw new errors.MoniteTimeoutError("Timeout exceeded when calling DELETE /files/{file_id}.");
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
