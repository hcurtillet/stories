import { FC } from 'react';
import { PostInterface } from '@types';
import styled from 'styled-components/native';
import { BaseText } from '@UI';
import { Image } from '@UI/image';

export const PostHeader: FC<Pick<PostInterface, 'author' | 'createdAt'>> = ({
    author: { firstName, lastName, profilePicture },
    createdAt,
}) => (
    <Container>
        <UserContainer>
            <Image
                uri={profilePicture}
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                }}
            />
            <UserInfos>
                <BaseText>{firstName}</BaseText>
                <BaseText>{lastName}</BaseText>
            </UserInfos>
        </UserContainer>
        <BaseText>{createdAt}</BaseText>
    </Container>
);

const Container = styled.View({
    width: '100%',
    flexDirection: 'row',
    height: 50,
    alignItems: 'space-between',
});

const UserContainer = styled.View({
    flex: 1,
    flexDirection: 'row',
});

const UserInfos = styled.View({
    flex: 1,
    marginLeft: '5%',
    justifyContent: 'center',
    alignItems: 'flex-start',
});
