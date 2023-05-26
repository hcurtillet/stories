import React, { FC } from 'react';
import { StoryInterface } from '@types';
import { MemoryList } from './Momories/MemoryList';
import { StoryInfo } from '@components/storyFeed/feedListHeader/Story/StoryInfo';

export const FeedListHeader: FC<StoryInterface> = ({ memories, ...story }) => (
    <>
        <StoryInfo {...story} />
        <MemoryList memories={memories} />
    </>
);
