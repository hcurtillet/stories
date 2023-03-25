import React from 'react';
import { StoryTabParamList, UserType } from '@types';
import { Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useStoryQuery } from '@api/story';
import { TitleText } from '@UI';
import { UsersSummary } from '@components/story/shared/UsersSummary';

const users: UserType[] = [
    {
        id: '1',
        lastName: 'Doe',
        firstName: 'John',
        email: 'johnDoe@gmail.com',
    },
    {
        id: '2',
        lastName: 'Doe',
        firstName: 'Jane',
        email: 'janedoe@gmail.com',
    },
];
export const StoryDetails = () => {
    const route = useRoute<RouteProp<StoryTabParamList, 'StoryDetails'>>();
    const { id } = route.params;
    const { data: story, isFetching } = useStoryQuery(id);
    return (
        <>
            {isFetching && <Text>Loading...</Text>}
            {story && (
                <>
                    <TitleText>{story.title}</TitleText>
                    <Text>{story.description}</Text>
                    <UsersSummary users={users} />
                </>
            )}
        </>
    );
};
