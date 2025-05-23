/**
 * This file was auto-generated by Fern from our API Definition.
 */

export type ConnectionStatus = "connected" | "disconnected" | "deauthorized" | "pending_auth";
export const ConnectionStatus = {
    Connected: "connected",
    Disconnected: "disconnected",
    Deauthorized: "deauthorized",
    PendingAuth: "pending_auth",
} as const;
