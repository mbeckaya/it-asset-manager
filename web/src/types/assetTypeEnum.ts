export const AssetTypeEnum = {
    LAPTOP: 'Laptop',
    SMARTPHONE: 'Smartphone',
    MONITOR: 'Monitor',
    TABLET: 'Tablet',
    KEYBOARD: 'Keyboard',
    MOUSE: 'Mouse',
} as const;

export type AssetTypeEnum = (typeof AssetTypeEnum)[keyof typeof AssetTypeEnum];
