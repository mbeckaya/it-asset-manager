export type Asset = {
    id: number;
    brand: string;
    type: string;
    reseller: string;
    purchased_at: string;
    model: string;
    serial: string;
    warranty_months: number;
    price: number;
    status: string;
};

export type AssetFormErrors = {
    brand?: string;
    type?: string;
    reseller?: string;
    purchased_at?: string;
    model?: string;
    serial?: string;
    warranty_months?: string;
    price?: string;
    status?: string;
};
