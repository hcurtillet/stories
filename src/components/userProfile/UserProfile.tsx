import React, { FC, useCallback } from 'react';
import styled from 'styled-components/native';
import { BaseText, LabeledText } from '@UI';
import { useUserInfoQuery } from '@api/authentication';
import { ProfilePicture } from '@components/userProfile/ProfilePicture';
import { useNavigation } from '@react-navigation/native';
import { ProfileTabNavigationProp } from '@types';
import { routes } from '@components';
import { Button } from '@UI/button';
import { useTranslation } from 'react-i18next';
import { VerticalSpace } from '@UI/space';

export const UserProfile: FC = () => {
    const { t } = useTranslation();
    const { data: user } = useUserInfoQuery();

    const navigation = useNavigation<ProfileTabNavigationProp>();

    const handleEditProfilePress = useCallback(async () => {
        navigation.navigate(routes.editProfile);
    }, [navigation]);

    return (
        <Container>
            <ProfilePicture uri={user?.profilePicture} />
            <VerticalSpace size={30} />
            <LabeledText>{t('profile.username')}</LabeledText>
            <BaseText>{'@' + user?.username}</BaseText>
            <VerticalSpace size={10} />
            <LabeledText>{t('profile.firstName')}</LabeledText>
            <BaseText>{user?.firstName}</BaseText>
            <VerticalSpace size={10} />
            <LabeledText>{t('profile.lastName')}</LabeledText>
            <BaseText>{user?.lastName}</BaseText>
            <VerticalSpace size={10} />
            <LabeledText>{t('profile.email')}</LabeledText>
            <BaseText>{user?.email}</BaseText>
            <VerticalSpace size={40} />
            <Button
                onPress={handleEditProfilePress}
                title={t('profile.editProfile')}
                icon={'pencil-alt'}
            />
        </Container>
    );
};

const Container = styled.View({});
