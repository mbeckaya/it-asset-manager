import * as z from 'zod';

export const assignmentSchema = z.object({
    asset_id: z.coerce.number().int().positive('Asset is required'),
    user_id: z.coerce.number().int().positive('User is required'),
    assigned_at: z.string().trim().min(1, 'Assigned date is required'),
    returned_at: z.string().trim().optional(),
    notes: z.string().trim().optional(),
});
