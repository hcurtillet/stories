import React, { useEffect } from 'react';
import { colors, ScreenContainer } from '@styles';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StoryTabNavigationProp, StoryTabParamList } from '@types';
import { useQuery } from 'react-query';
import api from '@api';
import { routes, StoryDetails } from '@components';
import Icon from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native';
export const StoryDetailsScreen = () => {
    const navigation = useNavigation<StoryTabNavigationProp>();
    const route = useRoute<RouteProp<StoryTabParamList, routes.storyDetails>>();
    const { id } = route.params;

    const { data } = useQuery(`storyDetails_${id}`, () => api.story.get(id));

    useEffect(() => {
        navigation.setOptions({
            title: data?.title,
            headerRight: editStory,
        });
    }, []);

    const editStory = () => {
        return (
            <TouchableOpacity>
                <Icon
                    name={'edit'}
                    size={30}
                    color={colors.blue}
                    onPress={() =>
                        navigation.navigate(
                            routes.editStory,
                            data
                                ? {
                                      id: data.id,
                                  }
                                : undefined,
                        )
                    }
                />
            </TouchableOpacity>
        );
    };

    return (
        <ScreenContainer>
            <StoryDetails story={data} />
        </ScreenContainer>
    );
};
