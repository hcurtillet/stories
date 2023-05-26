export interface BaseDto {
    id: string;
}

export interface CommentDto extends BaseDto {
    postId: string;
    content: string;
    author: UserDto;
    createdAt: string;
}

export interface MediaDto extends BaseDto {
    url: string;
    type: MediaTypeDto;
}

export enum MediaTypeDto {
    IMAGE = 'IMAGE',
    VIDEO = 'VIDEO',
    AUDIO = 'AUDIO',
    DOCUMENT = 'DOCUMENT',
    OTHER = 'OTHER',
}

export interface PostDto extends BaseDto {
    storyId: string;
    content: string;
    medias: string[];
    comments: CommentDto[];
    author: UserDto;
    createdAt: string;
}

export interface StoryDto extends BaseDto {
    title: string;
    numberOfPosts: number;
    description: string;
    cover: string;
    userIds: string[];
    users?: UserDto[];
    createdAt: string;
    createdBy: string;
    memories: MemoryDto[];
}

export interface UserDto extends BaseDto {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    profilePicture: string | null;
    storyIds: string[];
}
export interface MemoryDto extends BaseDto {
    medias: string[];
    postId: string;
    content: string;
    postDate: string;
}
