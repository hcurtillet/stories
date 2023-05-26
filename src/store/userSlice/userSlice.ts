import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { UserInterface } from '@types';

const initialState: UserInterface = {
    username: '',
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
        setUser: (state, action: PayloadAction<UserInterface>) => {
            state = action.payload;
        },
    },
});

export const selectUser = (state: RootState) => state.user;

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
