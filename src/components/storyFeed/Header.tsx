import React, { FC, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { StoryTabNavigationProp } from '@types';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '@UI';

export const Header: FC = () => {
    const { t } = useTranslation();
    const navigation = useNavigation<StoryTabNavigationProp>();

    const goBack = useCallback(
        () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Icon name={'angle-left'} size={30} color={colors.blue} />
            </TouchableOpacity>
        ),
        [navigation],
    );

    const addPost = useCallback(
        () => (
            <TouchableOpacity>
                <Icon name={'camera-retro'} size={30} color={colors.blue} />
            </TouchableOpacity>
        ),
        [],
    );

    useEffect(() => {
        navigation.setOptions({
            headerLeft: goBack,
            headerRight: addPost,
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
            },
            title: t('story.header') ?? '',
        });
    }, [t, navigation, addPost, goBack]);
    return null;
};
