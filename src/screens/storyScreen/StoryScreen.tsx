import React, { useEffect } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { colors, ScreenContainer } from '@styles';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { Header } from '@components';
import Icon from 'react-native-vector-icons/Feather';

export const StoryScreen = () => {
    const { t } = useTranslation();
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <Header
                    leftComponent={stories}
                    title={t('story.header')}
                    rightComponent={addPost}
                />
            ),
        });
    }, [navigation, t]);

    const stories = () => {
        return (
            <TouchableOpacity>
                <Icon name={'book'} size={30} color={colors.blue} />
            </TouchableOpacity>
        );
    };
    const addPost = () => {
        return (
            <TouchableOpacity>
                <Icon name={'plus-square'} size={30} color={colors.blue} />
            </TouchableOpacity>
        );
    };

    return (
        <ScreenContainer>
            <Text>Home Screen</Text>
        </ScreenContainer>
    );
};
