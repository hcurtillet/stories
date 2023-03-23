import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { UserType } from '@types';

const initialState: UserType = {
    pseudo: '',
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    profilePicture: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserType>) => {
            state = action.payload;
        },
    },
});

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
