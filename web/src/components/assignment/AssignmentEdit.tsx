import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

import {
    useGetAssignmentByIdQuery,
    useUpdateAssignmentMutation,
} from '../../api/assignmentsApi';
import { getApiErrorMessage } from '../../api/apiError';
import type { Assignment } from '../../types/assignment';
import { setAlert } from '../../store/alertSlice';

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
    const navigate = useNavigate();
    const dispatch = useDispatch();

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
                    'The assignment could not be updated.',
                ),
            );
        }

        navigate('/assignments');

        dispatch(
            setAlert({
                type: 'success',
                message: 'The assignment was successful updated.',
            }),
        );
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
