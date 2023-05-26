import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '@store';
import { Asset } from 'react-native-image-picker';

interface State {
    content: string;
    medias: Asset[];
    isUploading: boolean;
}

const initialState: State = {
    content: '',
    medias: [{ id: '' }],
    isUploading: false,
};

export const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        setMedias: (state, action) => {
            state.medias = action.payload;
        },
        setContent: (state, action) => {
            state.content = action.payload;
        },
        setIsUploading: (state, action) => {
            state.isUploading = action.payload;
        },
        resetPost: state => {
            state.content = '';
            state.medias = [{ id: '' }];
            state.isUploading = false;
        },
    },
});

export const { setMedias, setContent, setIsUploading, resetPost } =
    postSlice.actions;

export const selectPost = (state: RootState) => state.post;

export default postSlice.reducer;
