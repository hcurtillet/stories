import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store';

const initialState = {
    searchUser: '',
};
export const searchUserSlice = createSlice({
    name: 'searchUser',
    initialState,
    reducers: {
        setSearchUser: (state, action: PayloadAction<string>) => {
            state.searchUser = action.payload;
        },
    },
});

export const selectSearchUser = (state: RootState) => state.searchUser;

export const { setSearchUser } = searchUserSlice.actions;

export default searchUserSlice.reducer;
