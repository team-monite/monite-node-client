/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import { Payables } from "../resources/payables/client/Client";
import { Receivables } from "../resources/receivables/client/Client";
import { Connections } from "../resources/connections/client/Client";
import { SyncedRecords } from "../resources/syncedRecords/client/Client";
import { TaxRates } from "../resources/taxRates/client/Client";
import { LedgerAccounts } from "../resources/ledgerAccounts/client/Client";

export declare namespace Accounting {
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

export class Accounting {
    constructor(protected readonly _options: Accounting.Options) {}

    protected _payables: Payables | undefined;

    public get payables(): Payables {
        return (this._payables ??= new Payables(this._options));
    }

    protected _receivables: Receivables | undefined;

    public get receivables(): Receivables {
        return (this._receivables ??= new Receivables(this._options));
    }

    protected _connections: Connections | undefined;

    public get connections(): Connections {
        return (this._connections ??= new Connections(this._options));
    }

    protected _syncedRecords: SyncedRecords | undefined;

    public get syncedRecords(): SyncedRecords {
        return (this._syncedRecords ??= new SyncedRecords(this._options));
    }

    protected _taxRates: TaxRates | undefined;

    public get taxRates(): TaxRates {
        return (this._taxRates ??= new TaxRates(this._options));
    }

    protected _ledgerAccounts: LedgerAccounts | undefined;

    public get ledgerAccounts(): LedgerAccounts {
        return (this._ledgerAccounts ??= new LedgerAccounts(this._options));
    }
}
