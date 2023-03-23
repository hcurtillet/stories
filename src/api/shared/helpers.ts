import { StoryDto } from '@api/shared';
import { StoryType } from '@types';

export const formatToStory = (story: StoryDto): StoryType => ({
    id: story.id,
    title: story.title,
    description: story.description,
    userIds: story.userIds,
    thumbnail: story?.thumbnail?.url,
});
