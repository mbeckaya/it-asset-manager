import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

import { useCreateAssetMutation } from '../../api/assetsApi';
import { AssetBrandsEnum } from '../../types/enums/assetBrandsEnum';
import { AssetTypeEnum } from '../../types/enums/assetTypeEnum';
import { AssetResellerEnum } from '../../types/enums/assetResellerEnum';
import { AssetStatusEnum } from '../../types/enums/assetStatusEnum';
import { getApiErrorMessage } from '../../api/apiError';
import { setAlert } from '../../store/alertSlice';
import type { Asset } from '../../types/asset';

import AlertMessage from '../AlertMessage';
import AssetForm from './AssetForm';

export default function AssetCreate() {
    const [createError, setCreatError] = useState<string | null>(null);
    const [createAsset] = useCreateAssetMutation();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const asset: Asset = {
        id: -1,
        brand: AssetBrandsEnum.APPLE,
        type: AssetTypeEnum.LAPTOP,
        reseller: AssetResellerEnum.APPLE,
        purchased_at: '',
        model: '',
        serial: '',
        warranty_months: 6,
        price: 0,
        status: AssetStatusEnum.AVAILABLE,
    };

    const onSubmitSuccess = async (asset: Asset) => {
        try {
            setCreatError(null);

            await createAsset(asset).unwrap();
        } catch (error) {
            setCreatError(
                getApiErrorMessage(error, 'The asset could not be created.'),
            );
        }

        navigate('/');

        dispatch(
            setAlert({
                type: 'success',
                message: 'The asset was successful created.',
            }),
        );
    };

    if (createError) {
        return <AlertMessage type="error">{createError}</AlertMessage>;
    }

    return <AssetForm data={asset} onSubmitSuccess={onSubmitSuccess} />;
}
