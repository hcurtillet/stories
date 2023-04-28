import React from 'react';
import { FlatList, View } from 'react-native';
import { StoryInterface } from '@types';
import styled from 'styled-components';
import { StoryItem } from '@components/storiesList/StoryItem';
import { useStoriesQuery } from '@api/story';

export const StoriesList = () => {
    const { data: stories } = useStoriesQuery();
    // const stories = storiesMock;
    const renderStory = ({ item }: { item: StoryInterface }) => (
        <StoryItem {...item} />
    );

    return (
        <Container>
            <FlatList
                style={{ width: '100%' }}
                data={stories}
                numColumns={2}
                columnWrapperStyle={{ flex: 1, justifyContent: 'flex-start' }}
                renderItem={renderStory}
            />
        </Container>
    );
};

const Container = styled(View)`
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
`;
