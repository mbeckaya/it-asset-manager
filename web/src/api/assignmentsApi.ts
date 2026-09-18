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

        getAssignmentById: builder.query<Assignment, string>({
            query: (id) => `asset-assignments/${id}`,
        }),

        updateAssignment: builder.mutation<
            Assignment,
            { id: number; assignment: Partial<Assignment> }
        >({
            query: ({ id, assignment }) => ({
                url: `asset-assignments/${id}`,
                method: 'PUT',
                body: assignment,
            }),
            invalidatesTags: ['Assignments'],
        }),

        createAssignments: builder.mutation<Assignment, Partial<Assignment>>({
            query: (assignments) => ({
                url: 'asset-assignments',
                method: 'POST',
                body: assignments,
            }),
            invalidatesTags: ['Assignments'],
        }),
    }),
});

export const {
    useGetAllAssignmentQuery,
    useGetAssignmentByIdQuery,
    useUpdateAssignmentMutation,
    useCreateAssignmentsMutation,
} = assignmentsApi;
