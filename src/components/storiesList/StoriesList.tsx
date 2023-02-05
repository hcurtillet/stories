import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { StoryTabNavigationProp, StoryType } from '@types';
import styled from 'styled-components';
import { colors } from '@styles';
import { useNavigation } from '@react-navigation/native';
import { routes } from '@components';

type Props = {
    stories: StoryType[];
};
export const StoriesList = (props: Props) => {
    const { stories } = props;
    const navigation = useNavigation<StoryTabNavigationProp>();
    const renderStory = (story: StoryType, index: number) => {
        const { id, title } = story;
        return (
            <StoryContainer
                key={id}
                index={index}
                onPress={() =>
                    navigation.navigate(routes.storyDetails, { id: id })
                }>
                <Text>{title}</Text>
            </StoryContainer>
        );
    };

    return (
        <Container>
            <FlatList
                style={{ width: '100%' }}
                data={stories}
                renderItem={({ item, index }) => renderStory(item, index)}
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
const StoryContainer = styled(TouchableOpacity)<{ index: number }>`
    width: 100%;
    height: 60px;
    border-top-width: ${props => (props.index === 0 ? '1px' : '0px')};
    border-bottom-width: 1px;
    border-color: ${colors.grey};

    align-items: center;
    justify-content: center;
`;
