/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

export interface SyncRecordResource {
    id: string;
    created_at: string;
    updated_at: string;
    errors?: Record<string, unknown>;
    last_pulled_at: string;
    object_id?: string;
    object_type: Monite.ObjectMatchTypes;
    object_updated_at?: string;
    platform?: Monite.Platform;
    platform_object_id?: string;
    platform_updated_at?: string;
    provider?: Monite.ServiceProvidersEnum;
    provider_object_id?: string;
    provider_updated_at?: string;
    sync_status: Monite.SyncStatus;
}
