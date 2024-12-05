/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as Monite from "../../../index";
import urlJoin from "url-join";
import * as errors from "../../../../errors/index";

export declare namespace Analytics {
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
    }
}

export class Analytics {
    constructor(protected readonly _options: Analytics.Options) {}

    /**
     * Retrieve aggregated statistics for payables with different breakdowns.
     *
     * @param {Monite.GetAnalyticsPayablesRequest} request
     * @param {Analytics.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @throws {@link Monite.UnauthorizedError}
     * @throws {@link Monite.ForbiddenError}
     * @throws {@link Monite.UnprocessableEntityError}
     * @throws {@link Monite.InternalServerError}
     *
     * @example
     *     await client.analytics.getAnalyticsPayables({
     *         metric: "id",
     *         aggregation_function: "count"
     *     })
     */
    public async getAnalyticsPayables(
        request: Monite.GetAnalyticsPayablesRequest,
        requestOptions?: Analytics.RequestOptions
    ): Promise<Monite.PayableAnalyticsResponse> {
        const {
            dimension,
            metric,
            aggregation_function: aggregationFunction,
            date_dimension_breakdown: dateDimensionBreakdown,
            created_at__gt: createdAtGt,
            created_at__lt: createdAtLt,
            created_at__gte: createdAtGte,
            created_at__lte: createdAtLte,
            status,
            status__in: statusIn,
            id__in: idIn,
            total_amount: totalAmount,
            total_amount__gt: totalAmountGt,
            total_amount__lt: totalAmountLt,
            total_amount__gte: totalAmountGte,
            total_amount__lte: totalAmountLte,
            amount,
            amount__gt: amountGt,
            amount__lt: amountLt,
            amount__gte: amountGte,
            amount__lte: amountLte,
            currency,
            counterpart_name: counterpartName,
            counterpart_name__contains: counterpartNameContains,
            counterpart_name__icontains: counterpartNameIcontains,
            search_text: searchText,
            due_date: dueDate,
            due_date__gt: dueDateGt,
            due_date__lt: dueDateLt,
            due_date__gte: dueDateGte,
            due_date__lte: dueDateLte,
            document_id: documentId,
            document_id__contains: documentIdContains,
            document_id__icontains: documentIdIcontains,
            was_created_by_user_id: wasCreatedByUserId,
            counterpart_id: counterpartId,
            source_of_payable_data: sourceOfPayableData,
            ocr_status: ocrStatus,
            line_item_id: lineItemId,
            purchase_order_id: purchaseOrderId,
            project_id: projectId,
            tag_ids: tagIds,
        } = request;
        const _queryParams: Record<string, string | string[] | object | object[]> = {};
        if (dimension != null) {
            _queryParams["dimension"] = dimension;
        }

        _queryParams["metric"] = metric;
        _queryParams["aggregation_function"] = aggregationFunction;
        if (dateDimensionBreakdown != null) {
            _queryParams["date_dimension_breakdown"] = dateDimensionBreakdown;
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

        if (idIn != null) {
            if (Array.isArray(idIn)) {
                _queryParams["id__in"] = idIn.map((item) => item);
            } else {
                _queryParams["id__in"] = idIn;
            }
        }

        if (totalAmount != null) {
            _queryParams["total_amount"] = totalAmount.toString();
        }

        if (totalAmountGt != null) {
            _queryParams["total_amount__gt"] = totalAmountGt.toString();
        }

        if (totalAmountLt != null) {
            _queryParams["total_amount__lt"] = totalAmountLt.toString();
        }

        if (totalAmountGte != null) {
            _queryParams["total_amount__gte"] = totalAmountGte.toString();
        }

        if (totalAmountLte != null) {
            _queryParams["total_amount__lte"] = totalAmountLte.toString();
        }

        if (amount != null) {
            _queryParams["amount"] = amount.toString();
        }

        if (amountGt != null) {
            _queryParams["amount__gt"] = amountGt.toString();
        }

        if (amountLt != null) {
            _queryParams["amount__lt"] = amountLt.toString();
        }

        if (amountGte != null) {
            _queryParams["amount__gte"] = amountGte.toString();
        }

        if (amountLte != null) {
            _queryParams["amount__lte"] = amountLte.toString();
        }

        if (currency != null) {
            _queryParams["currency"] = currency;
        }

        if (counterpartName != null) {
            _queryParams["counterpart_name"] = counterpartName;
        }

        if (counterpartNameContains != null) {
            _queryParams["counterpart_name__contains"] = counterpartNameContains;
        }

        if (counterpartNameIcontains != null) {
            _queryParams["counterpart_name__icontains"] = counterpartNameIcontains;
        }

        if (searchText != null) {
            _queryParams["search_text"] = searchText;
        }

        if (dueDate != null) {
            _queryParams["due_date"] = dueDate;
        }

        if (dueDateGt != null) {
            _queryParams["due_date__gt"] = dueDateGt;
        }

        if (dueDateLt != null) {
            _queryParams["due_date__lt"] = dueDateLt;
        }

        if (dueDateGte != null) {
            _queryParams["due_date__gte"] = dueDateGte;
        }

        if (dueDateLte != null) {
            _queryParams["due_date__lte"] = dueDateLte;
        }

        if (documentId != null) {
            _queryParams["document_id"] = documentId;
        }

        if (documentIdContains != null) {
            _queryParams["document_id__contains"] = documentIdContains;
        }

        if (documentIdIcontains != null) {
            _queryParams["document_id__icontains"] = documentIdIcontains;
        }

        if (wasCreatedByUserId != null) {
            _queryParams["was_created_by_user_id"] = wasCreatedByUserId;
        }

        if (counterpartId != null) {
            _queryParams["counterpart_id"] = counterpartId;
        }

        if (sourceOfPayableData != null) {
            _queryParams["source_of_payable_data"] = sourceOfPayableData;
        }

        if (ocrStatus != null) {
            _queryParams["ocr_status"] = ocrStatus;
        }

        if (lineItemId != null) {
            _queryParams["line_item_id"] = lineItemId;
        }

        if (purchaseOrderId != null) {
            _queryParams["purchase_order_id"] = purchaseOrderId;
        }

        if (projectId != null) {
            _queryParams["project_id"] = projectId;
        }

        if (tagIds != null) {
            if (Array.isArray(tagIds)) {
                _queryParams["tag_ids"] = tagIds.map((item) => item);
            } else {
                _queryParams["tag_ids"] = tagIds;
            }
        }

        const _response = await (this._options.fetcher ?? core.fetcher)({
            url: urlJoin(
                (await core.Supplier.get(this._options.environment)) ?? environments.MoniteEnvironment.Sandbox,
                "analytics/payables"
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
            },
            contentType: "application/json",
            queryParameters: _queryParams,
            requestType: "json",
            timeoutMs: requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
            maxRetries: requestOptions?.maxRetries,
            abortSignal: requestOptions?.abortSignal,
        });
        if (_response.ok) {
            return _response.body as Monite.PayableAnalyticsResponse;
        }

        if (_response.error.reason === "status-code") {
            switch (_response.error.statusCode) {
                case 401:
                    throw new Monite.UnauthorizedError(_response.error.body as Monite.ErrorSchemaResponse);
                case 403:
                    throw new Monite.ForbiddenError(_response.error.body as Monite.ErrorSchemaResponse);
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
                throw new errors.MoniteTimeoutError();
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