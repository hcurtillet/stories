import { StoryInterface } from '@types';
import { userMock } from './userMock';

export const storiesMock: StoryInterface[] = [
    {
        id: '1',
        title: 'Story 1',
        description: 'This is the first storyFeed',
        userIds: ['1'],
        users: [userMock],
        thumbnails: ['1'],
    },
    {
        id: '2',
        title: 'Story 2',
        description: 'This is the second storyFeed',
        userIds: ['1'],
        users: [userMock],
        thumbnails: ['1', '2'],
    },
    {
        id: '3',
        title: 'Story 3',
        description: 'This is the third storyFeed',
        userIds: ['1'],
        users: [userMock],
        thumbnails: ['1', '2', '3'],
    },
    {
        id: '4',
        title: 'Story 4',
        description: 'This is the fourth storyFeed',
        userIds: ['1'],
        users: [userMock],
        thumbnails: ['1', '2', '3', '4'],
    },
];
