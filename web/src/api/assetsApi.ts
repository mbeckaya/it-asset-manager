import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Asset } from '../types/asset';

export const assetsApi = createApi({
    reducerPath: 'assetsApi',

    baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/' }),

    tagTypes: ['Assets'],

    endpoints: (builder) => ({
        getAllAssets: builder.query<Asset[], void>({
            query: () => 'assets',
            providesTags: ['Assets'],
        }),

        getAssetById: builder.query<Asset, string>({
            query: (id) => `assets/${id}`,
        }),

        updateAsset: builder.mutation<
            Asset,
            { id: number; asset: Partial<Asset> }
        >({
            query: ({ id, asset }) => ({
                url: `assets/${id}`,
                method: 'PUT',
                body: asset,
            }),
            invalidatesTags: ['Assets'],
        }),

        createAsset: builder.mutation<Asset, Partial<Asset>>({
            query: (asset) => ({
                url: 'assets',
                method: 'POST',
                body: asset,
            }),
            invalidatesTags: ['Assets'],
        }),

        destroyById: builder.mutation<void, number>({
            query: (id) => ({
                url: `assets/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Assets'],
        }),
    }),
});

export const {
    useGetAllAssetsQuery,
    useGetAssetByIdQuery,
    useCreateAssetMutation,
    useUpdateAssetMutation,
    useDestroyByIdMutation,
} = assetsApi;
