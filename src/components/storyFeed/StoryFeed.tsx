import React from 'react';
import { PostInterface, StoryTabParamList } from '@types';
import { FlatList, Text } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useStoryQuery } from '@api/story';
import { colors } from '@UI';
import { FeedListHeader } from '@components/storyFeed/FeedListHeader';
import { PostItem } from '@components/storyFeed/PostItem';
import { postsMock } from '../../../mocks';
import { Separator } from '@UI/separators';
export const StoryFeed = () => {
    const route = useRoute<RouteProp<StoryTabParamList, 'StoryDetails'>>();
    const { id } = route.params;
    const { data: story, isFetching } = useStoryQuery(id);
    const posts = postsMock;
    const { title, description, users } = story || {
        title: '',
        description: '',
        users: [],
    };

    const renderItem = ({ item }: { item: PostInterface }) => (
        <PostItem {...item} />
    );

    return (
        <>
            {isFetching && <Text>Loading...</Text>}
            {story && (
                <>
                    <FlatList
                        style={{ flex: 1, width: '100%' }}
                        data={posts}
                        renderItem={renderItem}
                        ItemSeparatorComponent={() => (
                            <Separator color={colors.blue} width="60%" />
                        )}
                        ListHeaderComponent={<FeedListHeader {...story} />}
                    />
                </>
            )}
        </>
    );
};
