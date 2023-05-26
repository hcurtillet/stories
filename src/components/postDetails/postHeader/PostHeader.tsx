import { FC } from 'react';
import { PostInterface, StoryTabNavigationProp } from '@types';
import styled from 'styled-components/native';
import { BaseText } from '@UI';
import { Image } from '@UI/image';
import { useDateFormat } from '@components/shared';
import { ActionButton } from './ActionButton';
import { useNavigation } from '@react-navigation/native';
import { routes } from '@components';

export const PostHeader: FC<
    Pick<PostInterface, 'author' | 'createdAt' | 'storyId' | 'id'>
> = ({ author, createdAt, storyId, id }) => {
    const navigation = useNavigation<StoryTabNavigationProp>();
    const { firstName, lastName, profilePicture } = author || {};

    const onPress = () => {
        id && navigation.navigate(routes.userProfile, { id });
    };
    return (
        <Container>
            <UserContainer onPress={onPress}>
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
            <RightContainer>
                <ActionButton id={id} storyId={storyId} />
                <BaseText>{useDateFormat(createdAt, false)}</BaseText>
            </RightContainer>
        </Container>
    );
};

const Container = styled.View({
    width: '90%',
    flexDirection: 'row',
    margin: '5%',
    height: 50,
    alignItems: 'space-between',
});

const UserContainer = styled.TouchableOpacity({
    flex: 1,
    flexDirection: 'row',
});

const UserInfos = styled.View({
    flex: 1,
    marginLeft: '5%',
    justifyContent: 'center',
    alignItems: 'flex-start',
});

const RightContainer = styled.View({
    alignItems: 'flex-end',
});
