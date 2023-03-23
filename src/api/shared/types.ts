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
    medias: MediaDto[];
    comments: CommentDto[];
    author: UserDto;
    createdAt: string;
}

export interface StoryDto extends BaseDto {
    title: string;
    numberOfPosts: number;
    description: string;
    thumbnail: MediaDto;
    userIds: string[];
}

export interface UserDto extends BaseDto {
    firstName: string;
    lastName: string;
    email: string;
    profilePicture: MediaDto;
    storyIds: string[];
}
