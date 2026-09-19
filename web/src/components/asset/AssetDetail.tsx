import { useGetAssetByIdQuery } from '../../api/assetsApi';

import ErrorMessage from '../ErrorMessage';
import LoadingSpinner from '../LoadingSpinner';
import AssetStatusBadge from './AssetStatusBadge';

type Props = {
    id: string;
};

export default function AssetDetail({ id }: Props) {
    const {
        data: asset,
        isLoading,
        error,
    } = useGetAssetByIdQuery(id, {
        refetchOnMountOrArgChange: true,
    });

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return (
            <ErrorMessage>
                <span>Loading Asset</span>
            </ErrorMessage>
        );
    }

    if (!asset) {
        return <p>No asset</p>;
    }

    return (
        <div className="card bg-base-100 w-full max-w-4xl shadow-xl mb-4">
            <div className="card-body gap-6">
                <div className="flex flex-wrap justify-between items-center gap-2">
                    <div>
                        <p className="text-xs text-base-content/60 uppercase tracking-wider">
                            {asset.brand}
                        </p>
                        <h1 className="text-3xl font-bold">{asset.model}</h1>
                    </div>

                    <AssetStatusBadge status={asset.status}>
                        {asset.status}
                    </AssetStatusBadge>
                </div>

                <div className="stats stats-vertical lg:stats-horizontal shadow bg-base-200 w-full">
                    <div className="stat">
                        <div className="stat-title">Value</div>
                        <div className="stat-value text-primary">
                            {asset.price} €
                        </div>
                        <div className="stat-desc">
                            Bought at: {asset.purchased_at}
                        </div>
                    </div>

                    {asset.warranty_months > 0 && (
                        <div className="stat">
                            <div className="stat-title">Warranty</div>
                            <div className="stat-value text-secondary">
                                {asset.warranty_months} Months
                            </div>
                            <div className="stat-desc">Remaining coverage</div>
                        </div>
                    )}

                    <div className="stat">
                        <div className="stat-title">System Specs</div>
                        <div className="stat-desc text-base-content mt-1 space-y-1">
                            <div>
                                <span className="font-semibold">Type:</span>{' '}
                                {asset.type}
                            </div>
                            <div>
                                <span className="font-semibold">Reseller:</span>{' '}
                                {asset.reseller}
                            </div>
                            <div>
                                <span className="font-semibold">Serial:</span>
                                <code className="text-xs bg-base-300 px-1 rounded">
                                    {asset.serial}
                                </code>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
