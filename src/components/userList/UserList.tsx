import React, { FC } from 'react';
import { useStoryQuery } from '@api/story';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StoryTabParamList, UserInterface } from '@types';
import { routes } from '@components';
import styled from 'styled-components/native';
import { Loader } from '@UI/loader';
import { UserItem } from './UserItem';
import { FlatList } from 'react-native';

export const UserList: FC = () => {
    const route = useRoute<RouteProp<StoryTabParamList, routes.userList>>();
    const { storyId } = route.params;
    const { data: story, isFetching } = useStoryQuery(storyId);
    const { users } = story || {};

    const renderItem = ({ item }: { item: UserInterface }) => (
        <UserItem {...item} />
    );

    return (
        <Container>
            {isFetching && <Loader />}
            {users && <FlatList data={users} renderItem={renderItem} />}
        </Container>
    );
};

const Container = styled.View({
    flex: 1,
    width: '100%',
});
