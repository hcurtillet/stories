import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@store';

interface State {
    currentStoryId: string;
}

const initialState: State = {
    currentStoryId: '',
};

export const storySlice = createSlice({
    name: 'story',
    initialState,
    reducers: {
        setCurrentStoryId: (state, action: PayloadAction<string>) => {
            state.currentStoryId = action.payload;
        },
    },
});

export const { setCurrentStoryId } = storySlice.actions;

export const selectStory = (state: RootState) => state.story;

export default storySlice.reducer;
