import React from 'react';
import { Text } from 'react-native';
import { ScreenContainer } from '@styles';
import { useTranslation } from 'react-i18next';

export const HomeScreen = () => {
    const { t } = useTranslation();

    return (
        <ScreenContainer>
            <Text>Home Screen</Text>
        </ScreenContainer>
    );
};
