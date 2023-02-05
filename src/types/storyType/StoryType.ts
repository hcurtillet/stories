import { UserType } from '@types';

export type StoryType = {
    id: string;
    title: string;
    description: string;
    userIds: string[];
    thumbnail: string | null;
};

export type StoryDetailType = StoryType & {
    users: UserType[];
};
