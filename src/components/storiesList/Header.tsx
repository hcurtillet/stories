import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { StoryTabNavigationProp } from '@types';
import React, { FC, useCallback, useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '@UI';
import { routes } from '@components/stackNavigator';

export const Header: FC = () => {
    const { t } = useTranslation();
    const navigation = useNavigation<StoryTabNavigationProp>();

    const addStory = useCallback(
        () => (
            <TouchableOpacity>
                <Icon
                    name={'plus-square'}
                    size={30}
                    color={colors.blue}
                    onPress={() => navigation.navigate(routes.newStory)}
                />
            </TouchableOpacity>
        ),
        [navigation],
    );

    useEffect(() => {
        const title = t('stories.header');
        navigation.setOptions({
            headerRight: addStory,
            title,
        });
    }, [t, navigation, addStory]);

    return null;
};
