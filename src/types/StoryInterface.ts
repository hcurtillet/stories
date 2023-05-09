import { UserInterface } from '@types';

export type StoryInterface = {
    id: string;
    title: string;
    description: string;
    userIds: string[];
    users: UserInterface[];
    thumbnails: string[];
    createdAt: string;
    createdBy: string;
};
