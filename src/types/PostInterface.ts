import { UserInterface } from './UserInterface';

export interface PostInterface {
    id?: string;
    content: string;
    storyId: string;
    medias: string[];
    comments: CommentInterface[];
    author?: UserInterface;
    createdAt?: string;
}

export interface CommentInterface {
    id?: string;
    content: string;
    author?: UserInterface;
    createdAt?: string;
}
