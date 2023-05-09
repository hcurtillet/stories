import React from 'react';
import { PostInterface, StoryTabParamList } from '@types';
import { FlatList } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { colors } from '@UI';
import { FeedListHeader } from '@components/storyFeed/FeedListHeader';
import { PostItem } from '@components/storyFeed/PostItem';
import { Separator } from '@UI/separators';
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
                    ItemSeparatorComponent={() => (
                        <Separator color={colors.blue} width="60%" />
                    )}
                    ListHeaderComponent={<FeedListHeader {...story} />}
                />
            )}
        </>
    );
};
