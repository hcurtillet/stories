import React, { FC } from 'react';
import styled from 'styled-components/native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { StoryTabParamList } from '@types';
import { routes } from '@components';
import { usePostQuery } from '@api/posts';
import { Loader } from '@UI/loader';
import { Comments, CommentInput } from './comments';
import { ImageCarousel } from '@components/shared';
import { Content } from './Content';
import { PostHeader } from './postHeader';

export const PostDetails: FC = () => {
    const route = useRoute<RouteProp<StoryTabParamList, routes.postDetails>>();
    const { id } = route.params;

    const { data: post, isFetching } = usePostQuery(id);

    const { comments, content, createdAt, medias, author, storyId } =
        post || {};
    return (
        <Container>
            {isFetching && <Loader />}
            {post && (
                <>
                    <ScrollContainer
                        contentContainerStyle={{ alignItems: 'center' }}>
                        <PostHeader
                            author={author}
                            createdAt={createdAt}
                            storyId={storyId as string}
                            id={id || ''}
                        />
                        {medias && medias.length > 0 && (
                            <ImageContainer>
                                <ImageCarousel
                                    images={medias}
                                    isPreview={false}
                                />
                            </ImageContainer>
                        )}
                        {content && <Content content={content} />}
                        {comments && <Comments comments={comments} />}
                    </ScrollContainer>
                    <CommentInput postId={id} />
                </>
            )}
        </Container>
    );
};

const Container = styled.View({
    flex: 1,
    width: '100%',
});

const ScrollContainer = styled.ScrollView({
    flex: 1,
    width: '100%',
});

const ImageContainer = styled.View({
    width: '100%',
    aspectRatio: '1',
    justifyContent: 'center',
    alignSelf: 'center',
});
