import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
    amount: 0,
    total: 0,
    isLoading: true,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
});

export default cartSlice.reducer;
