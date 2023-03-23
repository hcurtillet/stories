import React from 'react';
import { StoryTabParamList } from '@types';
import { Text, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { useStoryQuery } from '@api/story';

export const StoryDetails = () => {
    const route = useRoute<RouteProp<StoryTabParamList, 'StoryDetails'>>();
    const { id } = route.params;
    const { data: story, isFetching } = useStoryQuery(id);
    return (
        <>
            {isFetching && <Text>Loading...</Text>}
            {story && (
                <View>
                    <Text>{story.title}</Text>
                    <Text>{story.description}</Text>
                </View>
            )}
        </>
    );
};
