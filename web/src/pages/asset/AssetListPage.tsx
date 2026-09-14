import { Link } from 'react-router';

import PageHeadline from '../../components/PageHeadline';
import AssetList from '../../components/asset/AssetList';

export default function AssetListPage() {
    return (
        <>
            <PageHeadline>Assets</PageHeadline>

            <Link to="/assets/new" className="btn btn-soft btn-primary">
                New+
            </Link>

            <AssetList />
        </>
    );
}
