import { useNavigation } from '@react-navigation/native';
import { FC, useEffect } from 'react';
import { LogOutButton } from '@components/userProfile/header/LogOutButton';
import { GoBackButton, HeaderTitle } from '@components/shared';

export const Header: FC = () => {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => <HeaderTitle titleKey={'profile.header'} />,
            headerRight: LogOutButton,
            headerLeft: GoBackButton,
        });
    }, [navigation]);
    return null;
};
