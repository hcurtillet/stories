import React, { FC, useMemo } from 'react';
import styled from 'styled-components/native';
import { colors } from '@UI';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useStoryQuery } from '@api/story';
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
    const onPressAdd = () => {
        console.log('pressed');
    };

    const onPressRemove = () => {
        console.log('pressed');
    };

    const isInStory = useMemo(
        () => story?.userIds.includes(userId),
        [story, userId],
    );

    const isStoryOwner = useMemo(() => story?.crea === userId, [story, userId]);

    return (
        <Container>
            {isInStory ? (
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
