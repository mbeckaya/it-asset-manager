import { useState } from 'react';

import {
    useGetAssignmentByIdQuery,
    useUpdateAssignmentMutation,
} from '../../api/assignmentsApi';
import { getApiErrorMessage } from '../../api/apiError';
import type { Assignment } from '../../types/assignment';

import LoadingSpinner from '../LoadingSpinner';
import AlertMessage from '../AlertMessage';
import AssignmentForm from './AssignmentForm';

type Props = {
    id: string;
};

export default function AssignmentEdit({ id }: Props) {
    const {
        data: assignment,
        isLoading,
        error,
    } = useGetAssignmentByIdQuery(id, {
        refetchOnMountOrArgChange: true,
    });
    const [updateError, setUpdateError] = useState<string | null>(null);
    const [updateAssignment] = useUpdateAssignmentMutation();

    const onSubmitSuccess = async (assignment: Assignment) => {
        try {
            setUpdateError(null);

            await updateAssignment({
                id: Number(id),
                assignment,
            }).unwrap();
        } catch (error) {
            setUpdateError(
                getApiErrorMessage(
                    error,
                    'The assignment could not be created.',
                ),
            );
        }
    };

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (error || updateError) {
        return (
            <AlertMessage type="error">
                {error && <>Loading Assignment</>}
                {updateError && <>{updateError}</>}
            </AlertMessage>
        );
    }

    if (!assignment) {
        return <p>No assignment</p>;
    }

    return (
        <AssignmentForm data={assignment} onSubmitSuccess={onSubmitSuccess} />
    );
}
