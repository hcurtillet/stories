import { FC, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { AddUserButton } from './AddUserButton';
import { GoBackButton, HeaderTitle } from '@components/shared';

export const Header: FC = () => {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => <HeaderTitle titleKey={'storyMembers.header'} />,
            headerLeft: GoBackButton,
            headerRight: AddUserButton,
        });
    }, [navigation]);
    return null;
};
