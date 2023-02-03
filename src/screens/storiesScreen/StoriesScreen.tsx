import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { StoryTabNavigationProp } from '@types';
import { routes } from '@components';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import { colors } from '@styles';

export const StoriesScreen = () => {
    const { t } = useTranslation();
    const navigation = useNavigation<StoryTabNavigationProp>();

    useEffect(() => {
        const title = t('stories.header');
        navigation.setOptions({
            headerRight: addStory,
            title,
        });
    }, []);

    const addStory = () => {
        return (
            <TouchableOpacity>
                <Icon
                    name={'plus-square'}
                    size={30}
                    color={colors.blue}
                    onPress={() => navigation.navigate(routes.createStory)}
                />
            </TouchableOpacity>
        );
    };
    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    );
};
