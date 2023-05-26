import { MemoryInterface } from '@types';

export const memoriesMock: MemoryInterface[] = [
    {
        id: '1',
        postId: '1',
        medias: ['1'],
        content: 'Content 1',
        postDate: '2023-01-01T00:00:00.000Z',
    },
    {
        id: '2',
        postId: '1',
        medias: ['1', '2'],
        content: 'Content 2',
        postDate: '2021-01-01T00:00:00.000Z',
    },
    {
        id: '3',
        postId: '1',
        medias: ['1', '2', '3'],
        content: 'Content 3',
        postDate: '2021-01-01T00:00:00.000Z',
    },
];
