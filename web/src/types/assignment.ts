export type Assignment = {
    id: number;
    asset_id: number;
    user_id: number;
    assigned_at: string;
    notes?: string;
};

export type AssignmentFormErrors = {
    asset_id?: string;
    user_id?: string;
    assigned_at?: string;
    notes?: string;
};
