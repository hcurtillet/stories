import React, { FC } from 'react';
import { CommentInterface } from '@types';
import styled from 'styled-components/native';
import { BaseText } from '@UI';
import { Image } from '@UI/image';
import { useDateFormat } from '@components/shared';

export const CommentItem: FC<CommentInterface> = ({
    content,
    createdAt,
    author,
}) => {
    const { profilePicture, firstName, lastName } = author || {};
    return (
        <Container>
            <UserContainer>
                <Image
                    uri={profilePicture}
                    style={{ width: 30, height: 30, borderRadius: 15 }}
                />
                <UserInfo>
                    <BaseText>{`${firstName} ${lastName}`}</BaseText>
                </UserInfo>
                <DateInfo>
                    <BaseText>{useDateFormat(createdAt, true)}</BaseText>
                </DateInfo>
            </UserContainer>
            <BaseText>{content}</BaseText>
        </Container>
    );
};

const Container = styled.View({
    width: '100%',
    padding: 10,
});

const UserContainer = styled.View({
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
});

const UserInfo = styled.View({
    flex: 1,
    marginLeft: 10,
});

const DateInfo = styled.View({
    justifyContent: 'flex-end',
    alignItems: 'center',
});
