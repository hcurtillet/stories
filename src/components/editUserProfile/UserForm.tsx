import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useUserInfoMutation, useUserInfoQuery } from '@api/authentication';
import styled from 'styled-components/native';
import { FormContainer } from '@UI/formContainer';
import { Loader } from '@UI/loader';
import { Formik } from 'formik';
import { ProfileTabNavigationProp, UserInterface } from '@types';
import { TextInput } from '@UI/textInput';
import { Button } from '@UI/button';
import { ProfilePicture } from './ProfilePicture';
import { uploadImage } from '@api/files';
import { InformationMessage } from '@UI/informationMessage';
import { colors } from '@UI';
import { useNavigation } from '@react-navigation/native';

export const UserForm: FC = () => {
    const { t } = useTranslation();
    const navigation = useNavigation<ProfileTabNavigationProp>();
    const { data: user, isFetching } = useUserInfoQuery();
    const { mutate, isError, isSuccess } = useUserInfoMutation();

    const [isLoading, setIsLoading] = React.useState(false);
    const handleSubmit = async (values: UserInterface) => {
        setIsLoading(true);
        const { profilePicture, firstName, lastName } = values;
        if (profilePicture && profilePicture.startsWith('file')) {
            values.profilePicture = await uploadImage({
                uri: profilePicture,
                fileName: `${firstName}-${lastName}`,
            });
        }
        mutate(values);
        setIsLoading(false);
    };

    const handleSuccess = () => {
        navigation.goBack();
    };

    return (
        <>
            <InformationMessage
                message={t('profile.successUpdatingProfile')}
                isVisible={isSuccess}
                messageColor={colors.green}
                onDismiss={handleSuccess}
            />
            <InformationMessage
                message={t('profile.errorUpdatingProfile')}
                isVisible={isError}
                messageColor={colors.red}
            />
            {(isFetching || isLoading) && <Loader />}
            {user && (
                <Formik initialValues={user} onSubmit={handleSubmit}>
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <FormContainer>
                            <ProfilePicture
                                uri={values.profilePicture}
                                onChange={handleChange}
                            />
                            <TextInput
                                label={t('profile.username')}
                                onChangeText={handleChange('username')}
                                onBlur={handleBlur('username')}
                                value={values.username ?? ''}
                            />
                            <TextInput
                                label={t('profile.firstName')}
                                onChangeText={handleChange('firstName')}
                                onBlur={handleBlur('firstName')}
                                value={values.firstName ?? ''}
                            />
                            <TextInput
                                label={t('profile.lastName')}
                                onChangeText={handleChange('lastName')}
                                onBlur={handleBlur('lastName')}
                                value={values.lastName ?? ''}
                            />
                            <Button
                                onPress={handleSubmit}
                                title={t('profile.saveProfile')}
                            />
                        </FormContainer>
                    )}
                </Formik>
            )}
        </>
    );
};

const Container = styled.View({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 20,
});
