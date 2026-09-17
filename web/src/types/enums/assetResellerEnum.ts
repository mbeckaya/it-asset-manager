export const AssetResellerEnum = {
    APPLE: 'Apple Store',
    LENOVO: 'Lenovo Store',
    MEDIAMARKT: 'MediaMarkt',
} as const;

export type AssetResellerEnum =
    (typeof AssetResellerEnum)[keyof typeof AssetResellerEnum];