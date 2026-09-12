import * as z from 'zod';

export const assetSchema = z.object({
    brand: z.string().trim().min(1, 'Brand is required'),
    type: z.string().trim().min(1, 'Type is required'),
    reseller: z.string().trim().min(1, 'Reseller is required'),
    purchased_at: z.string().trim().min(1, 'Purchased date is required'),
    model: z.string().trim().min(1, 'Model is required'),
    serial: z.string().trim().min(1, 'Serial is required'),
    warranty_months: z.coerce
        .number()
        .int('Warranty must be a whole number')
        .min(0, 'Warranty cannot be negative'),
    price: z.coerce
        .number()
        .min(0, 'Price cannot be negative'),
    status: z.string().trim().min(1, 'Status is required'),
});