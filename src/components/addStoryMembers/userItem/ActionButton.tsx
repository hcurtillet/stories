import React, { FC, useMemo } from 'react';
import styled from 'styled-components/native';
import { BaseText, colors } from '@UI';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useStoryQuery, useStoryUpdateMutation } from '@api/story';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StoryTabParamList } from '@types';
import { routes } from '@components';

interface ComponentProps {
    userId: string;
}
export const ActionButton: FC<ComponentProps> = ({ userId }) => {
    const route =
        useRoute<RouteProp<StoryTabParamList, routes.addStoryMembers>>();
    const { storyId } = route.params;
    const { data: story } = useStoryQuery(storyId);
    const { mutate: updateStory } = useStoryUpdateMutation(storyId);
    const onPressAdd = () => {
        if (!story) {
            return;
        }
        story.userIds.push(userId);
        updateStory(story);
    };

    const onPressRemove = () => {
        if (!story) {
            return;
        }
        story.userIds = story.userIds.filter(id => id !== userId);
        updateStory(story);
    };

    const isInStory = useMemo(
        () => story?.userIds.includes(userId),
        [story, userId],
    );

    const isStoryOwner = useMemo(
        () => story?.createdBy === userId,
        [story, userId],
    );

    return (
        <Container>
            {isStoryOwner ? (
                <OwnerContainer>
                    <BaseText>Owner</BaseText>
                </OwnerContainer>
            ) : isInStory ? (
                <RemoveButton onPress={onPressRemove}>
                    <Icon name={'minus'} size={20} color={colors.white} />
                </RemoveButton>
            ) : (
                <AddButton onPress={onPressAdd}>
                    <Icon name={'plus'} size={20} color={colors.white} />
                </AddButton>
            )}
        </Container>
    );
};

const Container = styled.View({
    margin: 10,
});

const OwnerContainer = styled.View({
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: colors.green,
    height: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
});

const AddButton = styled.TouchableOpacity({
    backgroundColor: colors.blue,
    height: 30,
    width: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
});

const RemoveButton = styled.TouchableOpacity({
    backgroundColor: colors.red,
    height: 30,
    width: 30,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
});
