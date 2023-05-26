import { UserInterface } from '@types';

export type StoryInterface = {
    id: string;
    title: string;
    description: string;
    userIds: string[];
    users: UserInterface[];
    cover: string;
    createdAt: string;
    createdBy: string;
    memories: MemoryInterface[];
};

export interface MemoryInterface {
    id: string;
    medias: string[];
    postId: string;
    content: string;
    postDate: string;
}
