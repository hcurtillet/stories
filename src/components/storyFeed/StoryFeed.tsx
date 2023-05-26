import React from 'react';
import { PostInterface, StoryTabParamList } from '@types';
import { FlatList } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { FeedListHeader } from './feedListHeader';
import { NoPost, PostItem } from './postItem';
import { useStoryQuery } from '@api/story';
import { usePostsQuery } from '@api/posts';
import { Loader } from '@UI/loader';
import { routes } from '@components';
export const StoryFeed = () => {
    const route = useRoute<RouteProp<StoryTabParamList, routes.storyDetails>>();
    const { id } = route.params;
    const { data: story, isFetching: isFetchingStory } = useStoryQuery(id);
    const { data: posts, isFetching: isFetchingPosts } = usePostsQuery(id);
    const renderItem = ({ item }: { item: PostInterface }) => (
        <PostItem {...item} />
    );

    return (
        <>
            {(isFetchingStory || isFetchingPosts) && <Loader />}
            {story && posts && (
                <FlatList
                    style={{ flex: 1, width: '100%' }}
                    data={posts}
                    renderItem={renderItem}
                    ListHeaderComponent={<FeedListHeader {...story} />}
                    ListEmptyComponent={<NoPost />}
                />
            )}
        </>
    );
};
