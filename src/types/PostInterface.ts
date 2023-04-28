import { UserType } from './UserType';

export interface PostInterface {
    id: string;
    content: string;
    medias: string[];
    comments: CommentInterface[];
    author: UserType;
    createdAt: string;
}

export interface CommentInterface {
    id: string;
    content: string;
    author: UserType;
    createdAt: string;
}
