import { UserType } from '@types';

export type StoryInterface = {
    id: string;
    title: string;
    description: string;
    userIds: string[];
    users: UserType[];
    thumbnails: string[];
};
