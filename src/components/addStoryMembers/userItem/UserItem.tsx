import React, { FC } from 'react';
import styled from 'styled-components/native';
import { UserInterface } from '@types';
import { Image } from '@UI/image';
import { BaseText, colors } from '@UI';
import { Separator } from '@UI/separators';
import { ActionButton } from '@components/addStoryMembers/userItem/ActionButton';

export const UserItem: FC<UserInterface> = ({
    id,
    firstName,
    lastName,
    username,
    profilePicture,
}) => (
    <>
        <Container>
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
            <ActionButton userId={id} />
        </Container>
        <Separator color={colors.blue} width="80%" />
    </>
);

const Container = styled.View({
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
