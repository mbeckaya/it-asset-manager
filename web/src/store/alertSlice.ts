import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Alert } from '../types/alert';

const initialState: Alert = {
    type: 'success',
    message: '',
};

export const alertSlice = createSlice({
    name: 'alert',

    initialState,

    reducers: {
        setAlert: (_state, action: PayloadAction<Alert>) => {
            return action.payload;
        },
    },
});

export const { setAlert } = alertSlice.actions;

export default alertSlice.reducer;
