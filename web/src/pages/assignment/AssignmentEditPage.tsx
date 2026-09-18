import { useParams } from 'react-router';

import PageHeadline from '../../components/PageHeadline';
import AssignmentEdit from '../../components/assignment/AssignmentEdit';

export default function AssignmentEditPage() {
    const { id } = useParams();

    if (!id) return;

    return (
        <>
            <PageHeadline>Assignment Edit</PageHeadline>

            <AssignmentEdit id={id} />
        </>
    );
}
