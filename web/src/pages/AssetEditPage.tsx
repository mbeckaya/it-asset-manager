import { useParams } from 'react-router';

import PageHeadline from '../components/PageHeadline';
import AssetEdit from '../components/asset/AssetEdit';

export default function AssetEditPage() {
    const { id } = useParams();

    if (!id) return;

    return (
        <>
            <PageHeadline>Asset Edit</PageHeadline>

            <AssetEdit id={id} />
        </>
    );
}
