import { useState } from 'react';
import { assignmentSchema } from '../../schemas/assignmentSchema';
import type { Assignment, AssignmentFormErrors } from '../../types/assignment';

import { EnumSelect } from '../EnumSelect';
import { UserEnum } from '../../types/enums/userEnum';
import AlertMessage from '../AlertMessage';

type Props = {
    data: Assignment;
    onSubmitSuccess: (assignment: Assignment) => void;
};

export default function AssignmentForm({ data, onSubmitSuccess }: Props) {
    const [formData, setFormData] = useState<Assignment>(() => ({
        ...data,
        assigned_at: data.assigned_at ?? '',
        returned_at: data.returned_at ?? '',
        notes: data.notes ?? '',
    }));
    const [formErrors, setFormErrors] = useState<AssignmentFormErrors>({});

    const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();

        const result = assignmentSchema.safeParse(formData);

        if (!result.success) {
            const fieldErrors = result.error.flatten().fieldErrors;

            setFormErrors({
                asset_id: fieldErrors.asset_id?.[0],
                user_id: fieldErrors.user_id?.[0],
                assigned_at: fieldErrors.assigned_at?.[0],
                returned_at: fieldErrors.returned_at?.[0],
                notes: fieldErrors.notes?.[0],
            });

            return;
        }

        setFormErrors({});

        onSubmitSuccess(formData);
    };

    const handleChange = (
        ev: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >,
    ) => {
        const { name, value } = ev.target;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 p-6">
            <div className="space-y-2">
                <label htmlFor="asset_id" className="block">
                    Asset ID*:
                </label>

                <input
                    id="asset_id"
                    name="asset_id"
                    type="text"
                    className="input"
                    value={formData?.asset_id}
                    disabled={true}
                />

                {formErrors?.asset_id && (
                    <div className="pt-1">
                        <AlertMessage type="error">
                            <p>{formErrors.asset_id}</p>
                        </AlertMessage>
                    </div>
                )}
            </div>

            <div className="space-y-2">
                <label htmlFor="user_id" className="block">
                    User ID*:
                </label>

                <EnumSelect
                    id="user_id"
                    name="user_id"
                    options={UserEnum}
                    value={String(formData.user_id) ?? ''}
                    onChange={handleChange}
                    useKeyAsValue={true}
                />

                {formErrors?.user_id && (
                    <div className="pt-1">
                        <AlertMessage type="error">
                            <p>{formErrors.user_id}</p>
                        </AlertMessage>
                    </div>
                )}
            </div>

            <div className="space-y-2">
                <label htmlFor="assigned_at" className="block">
                    Assigned At*:
                </label>

                <input
                    id="assigned_at"
                    name="assigned_at"
                    type="date"
                    className="input"
                    value={formData?.assigned_at}
                    onChange={handleChange}
                />

                {formErrors?.assigned_at && (
                    <div className="pt-1">
                        <AlertMessage type="error">
                            <p>{formErrors.assigned_at}</p>
                        </AlertMessage>
                    </div>
                )}
            </div>

            <div className="space-y-2">
                <label htmlFor="returned_at" className="block">
                    Returned At:
                </label>

                <input
                    id="returned_at"
                    name="returned_at"
                    type="date"
                    className="input"
                    value={formData?.returned_at}
                    onChange={handleChange}
                />

                {formErrors?.returned_at && (
                    <div className="pt-1">
                        <AlertMessage type="error">
                            <p>{formErrors.returned_at}</p>
                        </AlertMessage>
                    </div>
                )}
            </div>

            <div className="space-y-2">
                <label htmlFor="notes" className="block">
                    Notes:
                </label>

                <input
                    id="notes"
                    name="notes"
                    type="text"
                    className="input"
                    value={formData?.notes}
                    onChange={handleChange}
                />

                {formErrors?.notes && (
                    <div className="pt-1">
                        <AlertMessage type="error">
                            <p>{formErrors.notes}</p>
                        </AlertMessage>
                    </div>
                )}
            </div>

            <div className="pt-2">
                <button type="submit" className="btn btn-soft btn-primary">
                    Save
                </button>
            </div>
        </form>
    );
}
