import type { AssetStatusEnum } from './enums/assetStatusEnum';

export type Status = {
    created_at: string;
    id: number;
    asset_id: number;
    status: AssetStatusEnum;
};
