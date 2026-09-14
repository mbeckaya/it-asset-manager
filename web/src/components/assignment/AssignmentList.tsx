import { useGetAllAssignmentQuery } from '../../api/assignmentsApi';
import ErrorMessage from '../ErrorMessage';
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
            <ErrorMessage>
                <span>Loading Assignments</span>
            </ErrorMessage>
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
                        <th>Assigned</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
                    {assignments.map((assignment) => (
                        <tr key={assignment.id}>
                            <td>{assignment.id}</td>
                            <td>{assignment.asset_id}</td>
                            <td>{assignment.assigned_at}</td>
                            <td>{assignment.notes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
