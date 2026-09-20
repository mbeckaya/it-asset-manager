import { Link } from 'react-router';
import { PencilIcon } from '@heroicons/react/24/outline';

import { useGetAllAssignmentQuery } from '../../api/assignmentsApi';

import AlertMessage from '../AlertMessage';
import LoadingSpinner from '../LoadingSpinner';

export default function AssignmentList() {
    const {
        data: assignments = [],
        isLoading,
        error,
    } = useGetAllAssignmentQuery();

    if (isLoading) {
        return <LoadingSpinner />;
    }

    if (error) {
        return (
            <AlertMessage type="error">
                <span>Loading Assignments</span>
            </AlertMessage>
        );
    }

    if (assignments.length === 0) {
        return <p>No assignments</p>;
    }

    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Asset ID</th>
                        <th>User ID</th>
                        <th>Assigned</th>
                        <th>Returned</th>
                        <th>Notes</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {assignments.map((assignment) => (
                        <tr key={assignment.id}>
                            <td>{assignment.id}</td>
                            <td>{assignment.asset_id}</td>
                            <td>{assignment.user_id}</td>
                            <td>{assignment.assigned_at}</td>
                            <td>{assignment.returned_at}</td>
                            <td>{assignment.notes}</td>
                            <td className="flex gap-2">
                                <Link
                                    to={`/assignments/${assignment.id}/edit`}
                                    className="btn btn-soft btn-warning"
                                >
                                    <PencilIcon className="size-5" />
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
