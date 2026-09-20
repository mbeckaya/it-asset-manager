import { useState } from 'react';

import { useCreateAssignmentsMutation } from '../../api/assignmentsApi';
import { getApiErrorMessage } from '../../api/apiError';
import type { Assignment } from '../../types/assignment';

import AssignmentForm from './AssignmentForm';
import AlertMessage from '../AlertMessage';

type Props = {
    id: string;
};

export default function AssignmentCreate({ id }: Props) {
    const [createError, setCreatError] = useState<string | null>(null);
    const [createAssignments] = useCreateAssignmentsMutation();

    const assignment: Assignment = {
        id: -1,
        asset_id: Number(id),
        user_id: -1,
        assigned_at: '',
        returned_at: '',
        notes: '',
    };

    const onSubmitSuccess = async (assignment: Assignment) => {
        try {
            setCreatError(null);

            await createAssignments(assignment).unwrap();
        } catch (error) {
            setCreatError(
                getApiErrorMessage(
                    error,
                    'The assignment could not be created.',
                ),
            );
        }
    };

    if (createError) {
        return <AlertMessage type="error">{createError}</AlertMessage>;
    }

    return (
        <AssignmentForm data={assignment} onSubmitSuccess={onSubmitSuccess} />
    );
}
