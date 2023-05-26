import { PostInterface } from '@types';
import { userMock } from './userMock';

export const postsMock: PostInterface[] = [
    {
        id: '1',
        comments: [
            {
                id: '1',
                author: userMock,
                content: 'comments 1',
                createdAt: '2021-01-01',
            },
        ],
        content: 'Post 1',
        medias: [
            'https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg',
            'https://t3.ftcdn.net/jpg/05/48/56/38/360_F_548563894_s5tGFJjPhc7lp5uG4iJkR77QbgvrKr9e.jpg',
        ],
        author: userMock,
        createdAt: '2021-01-01',
    },
    {
        id: '2',
        comments: [
            {
                id: '1',
                author: userMock,
                content: 'comments 1',
                createdAt: '2021-01-01',
            },
        ],
        content: 'Post 2',
        medias: [
            'https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg',
        ],
        author: userMock,
        createdAt: '2021-01-01',
    },
    {
        id: '3',
        comments: [
            {
                id: '1',
                author: userMock,
                content: 'comments 1',
                createdAt: '2021-01-01',
            },
        ],
        content: 'Post 3',
        medias: [
            'https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg',
        ],
        author: userMock,
        createdAt: '2021-01-01',
    },
    {
        id: '4',
        comments: [
            {
                id: '1',
                author: userMock,
                content: 'comments 1',
                createdAt: '2021-01-01',
            },
        ],
        content: 'Post 4',
        medias: [
            'https://t4.ftcdn.net/jpg/05/47/97/81/360_F_547978128_vqEEUYBr1vcAwfRAqReZXTYtyawpgLcC.jpg',
        ],
        author: userMock,
        createdAt: '2021-01-01',
    },
];
