/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as Monite from "../index";

export interface AccountingConnectionResponse {
    id: string;
    created_at: string;
    updated_at: string;
    connection_url: string;
    errors?: Monite.ErrorSchema[];
    last_pull?: string;
    platform?: string;
    status?: Monite.ConnectionStatus;
}