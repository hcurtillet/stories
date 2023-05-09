import { StoryInterface } from '@types';
import { userMock } from './userMock';

export const storyMock: StoryInterface = {
    id: '1',
    description:
        "This is a story mock. The objective of this mock us to simulate datas when I'm in the plan and whithout any connection",
    title: 'Story mock',
    userIds: ['1'],
    users: [userMock],
    thumbnails: ['1'],
};
