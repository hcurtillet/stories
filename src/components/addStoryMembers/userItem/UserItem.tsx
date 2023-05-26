import React, { FC } from 'react';
import styled from 'styled-components/native';
import { StoryTabParamList, UserInterface } from '@types';
import { Image } from '@UI/image';
import { BaseText, colors } from '@UI';
import { Separator } from '@UI/separators';
import { RouteProp, useRoute } from '@react-navigation/native';
import { routes } from '@components';
import { useStoryQuery, useStoryUpdateMutation } from '@api/story';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const UserItem: FC<UserInterface> = ({
    id,
    firstName,
    lastName,
    username,
    profilePicture,
}) => {
    const route =
        useRoute<RouteProp<StoryTabParamList, routes.addStoryMembers>>();
    const { storyId } = route.params;
    const { data: story } = useStoryQuery(storyId);
    const { mutate: updateStory } = useStoryUpdateMutation(storyId);
    const onPress = () => {
        if (!story) {
            return;
        }
        if (story.userIds.includes(id)) {
            story.userIds = story.userIds.filter(userId => userId !== id);
        } else {
            story.userIds.push(id);
        }
        updateStory(story);
    };

    const isInStory = story?.userIds.includes(id);
    return (
        <>
            <Container onPress={onPress}>
                <UserProfilePictureContainer>
                    <Image
                        uri={profilePicture}
                        style={{ height: '100%', width: '100%' }}
                    />
                </UserProfilePictureContainer>
                <UserInfoContainer>
                    <BaseText>{username}</BaseText>
                    <BaseText>{`${firstName} ${lastName}`}</BaseText>
                </UserInfoContainer>
                {isInStory && (
                    <Icon name={'check'} size={20} color={colors.blue} />
                )}
            </Container>
            <Separator color={colors.lightBlue} width="80%" />
        </>
    );
};

const Container = styled.TouchableOpacity({
    flex: 1,
    width: '90%',
    flexDirection: 'row',
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    alignItems: 'center',
});

const UserProfilePictureContainer = styled.View({
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
});

const UserInfoContainer = styled.View({
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
});
