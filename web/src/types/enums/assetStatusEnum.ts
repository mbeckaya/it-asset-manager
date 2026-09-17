export const AssetStatusEnum = {
    AVAILABLE: 'available',
    RESERVED: 'reserved',
    ASSIGNED: 'assigned',
    DEFECTIVE: 'defective',
    UNDER_REPAIR: 'under_repair',
    UNDER_MAINTENANCE: 'under_maintenance',
    QUARANTINED: 'quarantined',
    STOLEN: 'stolen',
    RETIRED: 'retired',
} as const;

export type AssetStatusEnum =
    (typeof AssetStatusEnum)[keyof typeof AssetStatusEnum];