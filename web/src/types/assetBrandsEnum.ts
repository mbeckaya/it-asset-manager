export const AssetBrandsEnum = {
    APPLE: 'Apple',
    DELL: 'Dell',
    SAMSUNG: 'Samsung',
    LENOVO: 'Lenovo',
    LOGITECH: 'Logitech',
    LG: 'LG',
} as const;

export type AssetBrandsEnum =
    (typeof AssetBrandsEnum)[keyof typeof AssetBrandsEnum];
