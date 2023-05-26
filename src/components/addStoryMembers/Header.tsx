import { FC, useEffect } from 'react';
import { StoryTabNavigationProp, StoryTabParamList } from '@types';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { GoBackButton, HeaderTitle } from '@components/shared';
import { routes } from '@components';
import { View } from 'react-native';

export const Header: FC = () => {
    const navigation = useNavigation<StoryTabNavigationProp>();
    const {
        params: { isNewStory },
    } = useRoute<RouteProp<StoryTabParamList, routes.addStoryMembers>>();
    useEffect(() => {
        navigation.setOptions({
            headerLeft: !isNewStory ? GoBackButton : () => <View />,
            headerTitle: () => <HeaderTitle titleKey={'story.addMembers'} />,
        });
    }, [navigation, isNewStory]);
    return null;
};
