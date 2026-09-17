import { useParams } from 'react-router';

import PageHeadline from '../../components/PageHeadline';
import AssignmentCreate from '../../components/assignment/AssignmentCreate';

export default function AssignmentCreatePage() {
    const { id } = useParams();

    if (!id) return;
    
    return (
        <>
            <PageHeadline>Assignment Create</PageHeadline>

            <AssignmentCreate id={id} />
        </>
    );
}
