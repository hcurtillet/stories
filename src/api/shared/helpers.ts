import { StoryDto, UserDto } from '@api/shared';
import { StoryInterface, UserType } from '@types';

export const formatToStory = (story: StoryDto): StoryInterface => ({
    id: story.id,
    title: story.title,
    description: story.description,
    userIds: story.userIds,
    thumbnails: story.thumbnails ?? [],
    users: story.users ?? [],
});

export const formatToUser = (user: UserDto): UserType => ({
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    profilePicture: user.profilePicture,
});
