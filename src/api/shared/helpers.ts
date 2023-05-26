import { MemoryDto, PostDto, StoryDto, UserDto } from '@api/shared';
import {
    MemoryInterface,
    PostInterface,
    StoryInterface,
    UserInterface,
} from '@types';

export const formatToStory = (story: StoryDto): StoryInterface => ({
    id: story.id,
    title: story.title,
    description: story.description,
    userIds: story.userIds,
    cover: story.cover,
    users: story.users ?? [],
    createdAt: story.createdAt,
    createdBy: story.createdBy,
    memories: story.memories.map(formatToMemory),
});

export const formatToMemory = (memory: MemoryDto): MemoryInterface => ({
    id: memory.id,
    medias: memory.medias,
    postId: memory.postId,
    content: memory.content,
    postDate: memory.postDate,
});

export const formatToUser = (user: UserDto): UserInterface => ({
    id: user.id,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    profilePicture: user.profilePicture,
});

export const formatToPost = (post: PostDto): PostInterface => ({
    id: post.id,
    storyId: post.storyId,
    content: post.content,
    medias: post.medias,
    comments: post.comments,
    createdAt: post.createdAt,
    author: post.author,
});
