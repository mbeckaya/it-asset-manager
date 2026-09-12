import { useState } from 'react';

import {
    useGetAssetByIdQuery,
    useUpdateAssetMutation,
} from '../../api/assetsApi';
import { getApiErrorMessage } from '../../api/apiError';
import type { Asset } from '../../types/asset';

import LoadingSpinner from '../LoadingSpinner';
import ErrorMessage from '../ErrorMessage';
import AssetForm from './AssetForm';

type Props = {
    id: string;
};

export default function AssetEdit({ id }: Props) {
    const { data: asset, isLoading, error } = useGetAssetByIdQuery(id);
    const [updateError, setUpdateError] = useState<string | null>(null);
    const [updateAsset] = useUpdateAssetMutation();

    const onSubmitSuccess = async (asset: Asset) => {
        try {
            setUpdateError(null);

            await updateAsset({
                id: Number(id),
                asset,
            }).unwrap();
        } catch (error) {
            setUpdateError(
                getApiErrorMessage(error, 'The asset could not be created.'),
            );
        }
    };

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (error || updateError) {
        return (
            <ErrorMessage>
                {error && <>Loading Asset</>}
                {updateError && <>{updateError}</>}
            </ErrorMessage>
        );
    }

    if (!asset) {
        return <p>No asset</p>;
    }

    return <AssetForm data={asset} onSubmitSuccess={onSubmitSuccess} />;
}
