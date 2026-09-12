import { useState } from 'react';

import { assetSchema } from '../../schemas/assetSchema';
import { EnumSelect } from '../EnumSelect';
import { AssetBrandsEnum } from '../../types/assetBrandsEnum';
import { AssetTypeEnum } from '../../types/assetTypeEnum';
import { AssetResellerEnum } from '../../types/AssetResellerEnum';
import { AssetStatusEnum } from '../../types/assetStatusEnum';
import type { Asset, AssetFormErrors } from '../../types/asset';

import ErrorMessage from '../ErrorMessage';

type Props = {
    data: Asset;
    onSubmitSuccess: (asset: Asset) => void;
};

export default function AssetForm({ data, onSubmitSuccess }: Props) {
    const [formData, setFormData] = useState<Asset>(data);
    const [formErrors, setFormErrors] = useState<AssetFormErrors>({});

    const handleSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();

        const result = assetSchema.safeParse(formData);

        if (!result.success) {
            const fieldErrors = result.error.flatten().fieldErrors;

            setFormErrors({
                brand: fieldErrors.brand?.[0],
                type: fieldErrors.type?.[0],
                reseller: fieldErrors.reseller?.[0],
                purchased_at: fieldErrors.purchased_at?.[0],
                model: fieldErrors.model?.[0],
                serial: fieldErrors.serial?.[0],
                warranty_months: fieldErrors.warranty_months?.[0],
                price: fieldErrors.price?.[0],
                status: fieldErrors.status?.[0],
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
                <label htmlFor="brand" className="block">
                    Brand*:
                </label>

                <EnumSelect
                    id="brand"
                    name="brand"
                    options={AssetBrandsEnum}
                    value={formData?.brand ?? ''}
                    onChange={handleChange}
                />

                {formErrors?.brand && (
                    <div className="pt-1">
                        <ErrorMessage>
                            <p>{formErrors.brand}</p>
                        </ErrorMessage>
                    </div>
                )}
            </div>

            <div className="space-y-2">
                <label htmlFor="type" className="block">
                    Type*:
                </label>

                <EnumSelect
                    id="type"
                    name="type"
                    options={AssetTypeEnum}
                    value={formData?.type ?? ''}
                    onChange={handleChange}
                />

                {formErrors?.type && (
                    <div className="pt-1">
                        <ErrorMessage>
                            <p>{formErrors.type}</p>
                        </ErrorMessage>
                    </div>
                )}
            </div>

            <div className="space-y-2">
                <label htmlFor="reseller" className="block">
                    Reseller*:
                </label>

                <EnumSelect
                    id="reseller"
                    name="reseller"
                    options={AssetResellerEnum}
                    value={formData?.reseller ?? ''}
                    onChange={handleChange}
                />

                {formErrors?.reseller && (
                    <div className="pt-1">
                        <ErrorMessage>
                            <p>{formErrors.reseller}</p>
                        </ErrorMessage>
                    </div>
                )}
            </div>

            <div className="space-y-2">
                <label htmlFor="purchased_at" className="block">
                    Purchased at*:
                </label>

                <input
                    id="purchased_at"
                    name="purchased_at"
                    type="date"
                    className="input"
                    value={formData?.purchased_at}
                    onChange={handleChange}
                />

                {formErrors?.purchased_at && (
                    <div className="pt-1">
                        <ErrorMessage>
                            <p>{formErrors.purchased_at}</p>
                        </ErrorMessage>
                    </div>
                )}
            </div>

            <div className="space-y-2">
                <label htmlFor="model" className="block">
                    Model*:
                </label>

                <input
                    id="model"
                    name="model"
                    className="input"
                    value={formData?.model}
                    onChange={handleChange}
                />

                {formErrors?.model && (
                    <div className="pt-1">
                        <ErrorMessage>
                            <p>{formErrors.model}</p>
                        </ErrorMessage>
                    </div>
                )}
            </div>

            <div className="space-y-2">
                <label htmlFor="serial" className="block">
                    Serial*:
                </label>

                <input
                    id="serial"
                    name="serial"
                    className="input"
                    value={formData?.serial}
                    onChange={handleChange}
                />

                {formErrors?.serial && (
                    <div className="pt-1">
                        <ErrorMessage>
                            <p>{formErrors.serial}</p>
                        </ErrorMessage>
                    </div>
                )}
            </div>

            <div className="space-y-2">
                <label htmlFor="warranty_months" className="block">
                    Warranty months*:
                </label>

                <input
                    id="warranty_months"
                    name="warranty_months"
                    type="number"
                    className="input"
                    value={formData?.warranty_months}
                    onChange={handleChange}
                />

                {formErrors?.warranty_months && (
                    <div className="pt-1">
                        <ErrorMessage>
                            <p>{formErrors.warranty_months}</p>
                        </ErrorMessage>
                    </div>
                )}
            </div>

            <div className="space-y-2">
                <label htmlFor="price" className="block">
                    Price*:
                </label>

                <input
                    id="price"
                    name="price"
                    type="number"
                    className="input"
                    value={formData?.price}
                    onChange={handleChange}
                />

                {formErrors?.price && (
                    <div className="pt-1">
                        <ErrorMessage>
                            <p>{formErrors.price}</p>
                        </ErrorMessage>
                    </div>
                )}
            </div>

            <div className="space-y-2">
                <label htmlFor="status" className="block">
                    Status*:
                </label>

                <EnumSelect
                    id="status"
                    name="status"
                    options={AssetStatusEnum}
                    value={formData?.status ?? ''}
                    onChange={handleChange}
                />

                {formErrors?.status && (
                    <div className="pt-1">
                        <ErrorMessage>
                            <p>{formErrors.status}</p>
                        </ErrorMessage>
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
