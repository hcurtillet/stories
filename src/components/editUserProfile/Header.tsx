import { GoBackButton, HeaderTitle } from '@components/shared';
import { useNavigation } from '@react-navigation/native';
import { FC, useEffect } from 'react';

export const Header: FC = () => {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: GoBackButton,
            headerTitle: () => <HeaderTitle titleKey={'profile.editProfile'} />,
        });
    }, [navigation]);
    return null;
};
