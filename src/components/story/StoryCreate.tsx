import React from 'react';
import { StoryType } from '@types';
import { StoryForm } from '@components/story/StoryForm';

const initialValues: StoryType = {
    id: '',
    thumbnail: null,
    userIds: [],
    title: '',
    description: '',
};
export const StoryCreate = () => {
    return <StoryForm {...initialValues} />;
};
