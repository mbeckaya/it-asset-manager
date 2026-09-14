import { useParams } from 'react-router';

import PageHeadline from '../../components/PageHeadline';
import AssetDetail from '../../components/asset/AssetDetail';

export default function AssetDetailPage() {
    const { id } = useParams();

    if (!id) return;

    return (
        <>
            <PageHeadline>Asset Detail</PageHeadline>

            <AssetDetail id={id} />
        </>
    );
}
