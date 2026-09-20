import { useGetAssetStatusByIdQuery } from '../../api/assetsApi';

import AlertMessage from '../AlertMessage';
import LoadingSpinner from '../LoadingSpinner';
import AssetStatusBadge from './AssetStatusBadge';

type Props = {
    id: string;
};

export default function AssetStatusList({ id }: Props) {
    const {
        data: statuses,
        isLoading,
        error,
    } = useGetAssetStatusByIdQuery(id, {
        refetchOnMountOrArgChange: true,
    });

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return (
            <AlertMessage type="error">
                <span>Loading Asset Status</span>
            </AlertMessage>
        );
    }

    if (!statuses) {
        return <p>No statuses</p>;
    }

    return (
        <div className="card bg-base-100 w-full max-w-4xl shadow-xl">
            <div className="card-body p-0">
                <table className="table w-full font-mono text-sm">
                    <colgroup>
                        <col className="w-20" />
                        <col className="w-auto" />
                        <col className="w-full" />
                    </colgroup>

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Status</th>
                            <th className="text-right">Created at</th>
                        </tr>
                    </thead>

                    <tbody>
                        {statuses.map((status) => (
                            <tr key={status.id} className="hover">
                                <td className="text-base-content/40">
                                    #{status.id}
                                </td>

                                <td className="whitespace-nowrap">
                                    <AssetStatusBadge status={status.status}>
                                        {status.status}
                                    </AssetStatusBadge>
                                </td>

                                <td className="whitespace-nowrap text-right text-base-content/50">
                                    {status.created_at}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
