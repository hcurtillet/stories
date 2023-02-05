import React from 'react';
import { StoryDetailType } from '@types';
import { Text, View } from 'react-native';

type Props = {
    story?: StoryDetailType;
};
export const StoryDetails = (props: Props) => {
    const { story } = props;
    if (!story) {
        return null;
    }
    return (
        <View>
            <Text>{story.title}</Text>
            <Text>{story.description}</Text>
        </View>
    );
};
