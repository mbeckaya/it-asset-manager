import { Link } from 'react-router';
import {
    UserPlusIcon,
    EyeIcon,
    PencilIcon,
    TrashIcon,
} from '@heroicons/react/24/outline';

import {
    useDestroyByIdMutation,
    useGetAllAssetsQuery,
} from '../../api/assetsApi';

import LoadingSpinner from '../LoadingSpinner';
import ErrorMessage from '../ErrorMessage';
import AssetStatusBadge from './AssetStatusBadge';

export default function AssetList() {
    const {
        data: assets = [],
        isLoading,
        error,
    } = useGetAllAssetsQuery(undefined, {
        refetchOnMountOrArgChange: true,
    });

    const [destroyById] = useDestroyByIdMutation();

    const handleRemove = async (id: number) => {
        await destroyById(id).unwrap();
    };

    const getDisabledClass = (status: string) =>
        status.toLowerCase() !== 'available' ? 'btn-disabled' : '';

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return (
            <ErrorMessage>
                <span>Loading Assets</span>
            </ErrorMessage>
        );
    }

    if (assets.length === 0) {
        return <p>No assets</p>;
    }

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Type</th>
                        <th>Model</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {assets.map((asset) => (
                        <tr key={asset.id}>
                            <td>{asset.id}</td>
                            <td>{asset.type}</td>
                            <td>{asset.model}</td>
                            <td>
                                <AssetStatusBadge status={asset.status}>
                                    {asset.status}
                                </AssetStatusBadge>
                            </td>
                            <td className="flex gap-2">
                                <Link
                                    to={`/assignments/${asset.id}/new`}
                                    className={`btn btn-soft btn-primary ${getDisabledClass(asset.status)}`}
                                >
                                    <UserPlusIcon className="size-5" />
                                </Link>

                                <Link
                                    to={`/assets/${asset.id}`}
                                    className="btn btn-soft btn-info"
                                >
                                    <EyeIcon className="size-5" />
                                </Link>

                                <Link
                                    to={`/assets/${asset.id}/edit`}
                                    className="btn btn-soft btn-warning"
                                >
                                    <PencilIcon className="size-5" />
                                </Link>

                                <button
                                    onClick={() => handleRemove(asset.id)}
                                    className={`btn btn-soft btn-error ${getDisabledClass(asset.status)}`}
                                >
                                    <TrashIcon className="size-5" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
