import React from 'react';
import { StoryInterface } from '@types';
import { StoryForm } from '@components/storyFeed/StoryForm';

const initialValues: StoryInterface = {
    id: '',
    thumbnail: null,
    userIds: [],
    title: '',
    description: '',
};
export const StoryCreate = () => <StoryForm {...initialValues} />;
