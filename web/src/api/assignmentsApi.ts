import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Assignment } from '../types/assignment';

export const assignmentsApi = createApi({
    reducerPath: 'assignmentsApi',

    baseQuery: fetchBaseQuery({ baseUrl: '/api/v1/' }),

    tagTypes: ['Assignments'],

    endpoints: (builder) => ({
        getAllAssignment: builder.query<Assignment[], void>({
            query: () => 'asset-assignments',
            providesTags: ['Assignments'],
        }),
    }),
});

export const { useGetAllAssignmentQuery } = assignmentsApi;
