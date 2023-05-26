import React, { FC } from 'react';
import { PostInterface, StoryTabNavigationProp } from '@types';
import styled from 'styled-components/native';
import { PostInfo } from '@components/storyFeed/postItem/PostInfo';
import { PostFooter } from '@components/storyFeed/postItem/PostFooter';
import { ImageCarousel } from '@components/shared';
import { PostContent } from '@components/storyFeed/postItem/PostContent';
import { VerticalSpace } from '@UI/space';
import { useNavigation } from '@react-navigation/native';
import { routes } from '@components';
import { Separator } from '@UI/separators';
import { colors } from '@UI';

export const PostItem: FC<PostInterface> = ({
    id,
    author,
    content,
    createdAt,
    medias,
    comments,
}) => {
    const navigation = useNavigation<StoryTabNavigationProp>();

    const onPress = () => {
        if (id) {
            navigation.navigate(routes.postDetails, { id });
        }
    };
    return (
        <>
            <Container>
                <InfoContainer onPress={onPress}>
                    <PostInfo author={author} createdAt={createdAt} />
                    <VerticalSpace size={10} />
                    <ImageCarousel images={medias} isPreview={true} />
                    <VerticalSpace size={5} />
                    <PostContent content={content} />
                    <VerticalSpace size={10} />
                    <PostFooter comments={comments} />
                </InfoContainer>
            </Container>
            <Separator color={colors.lightBlue} />
        </>
    );
};

const Container = styled.View({
    width: '100%',
    flex: 1,
    padding: '2.5%',
    marginTop: 10,
    marginBottom: 10,
    overflow: 'hidden',
    borderRadius: 10,
});

const InfoContainer = styled.TouchableOpacity({
    width: '100%',
    padding: 10,
});
