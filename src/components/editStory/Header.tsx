import { FC, useEffect } from 'react';
import { StoryTabNavigationProp, StoryTabParamList } from '@types';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { routes } from '@components';
import { GoBackButton, HeaderTitle } from '@components/shared';

export const Header: FC = () => {
    const navigation = useNavigation<StoryTabNavigationProp>();
    const { params } =
        useRoute<RouteProp<StoryTabParamList, routes.editStory>>();
    useEffect(() => {
        navigation.setOptions({
            headerLeft: GoBackButton,
            headerTitle: () => (
                <HeaderTitle
                    titleKey={params ? 'story.editStory' : 'story.newStory'}
                />
            ),
        });
    }, [navigation, params]);
    return null;
};
