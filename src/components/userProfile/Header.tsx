import { FC, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { StoryTabNavigationProp } from '@types';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '@UI';
import { logout as apiLogOut } from '@api/authentication';

export const Header: FC = () => {
    const { t } = useTranslation();
    const navigation = useNavigation<StoryTabNavigationProp>();

    const handleLogout = useCallback(async () => {
        try {
            await apiLogOut();
            while (navigation.canGoBack()) {
                navigation.goBack();
            }
        } catch (e) {
            throw new Error(e as string);
        }
    }, [navigation]);

    const logout = useCallback(
        () => (
            <TouchableOpacity onPress={handleLogout}>
                <Icon name={'sign-out-alt'} size={30} color={colors.blue} />
            </TouchableOpacity>
        ),
        [handleLogout],
    );

    useEffect(() => {
        const title = t('profile.header');
        navigation.setOptions({
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
            },
            title,
            headerRight: logout,
        });
    }, [t, navigation]);
    return null;
};
