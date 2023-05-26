import React, { FC } from 'react';
import { StoryTabNavigationProp, UserInterface } from '@types';
import styled from 'styled-components/native';
import { Image } from '@UI/image';
import { BaseText } from '@UI';
import { useNavigation } from '@react-navigation/native';
import { routes } from '@components';

export const UserItem: FC<UserInterface> = ({
    firstName,
    lastName,
    username,
    profilePicture,
    id,
}) => {
    const navigation = useNavigation<StoryTabNavigationProp>();

    const onPress = () => {
        navigation.navigate(routes.userProfile, {
            id,
        });
    };

    return (
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
        </Container>
    );
};
const Container = styled.TouchableOpacity({
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    padding: 10,
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
