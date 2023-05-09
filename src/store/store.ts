import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice/userSlice';
import storyReducer from './storySlice/storySlice';
import postReducer from './postSlice/postSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import searchUserSlice from './userSlice/searchUserSlice';

export const store = configureStore({
    reducer: {
        user: userReducer,
        post: postReducer,
        story: storyReducer,
        searchUser: searchUserSlice,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
