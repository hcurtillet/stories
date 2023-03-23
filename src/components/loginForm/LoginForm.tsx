import React, { useState } from 'react';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import { RootScreenNavigationProp } from '@types';
import { View } from 'react-native';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { routes } from '@components';
import { login } from '@api/authentication';
import { FormContainer } from '@UI/formContainer';
import { TextInput } from '@UI/textInput';
import { Button } from '@UI/button';
import { ErrorMessage } from '@UI/errorMessage';

export const LoginForm = () => {
    const navigation = useNavigation<RootScreenNavigationProp>();
    const { t } = useTranslation();
    const [errorMessages, setErrorMessage] = useState<string | null>();

    const logIn = async (values: { email: string; password: string }) => {
        try {
            const { email, password } = values;

            const result = await login(email, password);

            if (result) {
                navigation.navigate(routes.app);
            }
        } catch (error: any) {
            console.log(error);
            if (error.code === 'auth/user-not-found') {
                setErrorMessage(t('authentication.userNotFound'));
            }
            if (error.code === 'auth/wrong-password') {
                setErrorMessage(t('authentication.invalidPassword'));
            }
        }
    };

    const goToSignUp = () => {
        navigation.navigate(routes.signUp);
    };
    return (
        <Formik initialValues={{ email: '', password: '' }} onSubmit={logIn}>
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <FormContainer>
                    <TextInput
                        label={t('authentication.email')}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                    />
                    <TextInput
                        label={t('authentication.password')}
                        secureTextEntry={true}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                    />
                    {errorMessages && (
                        <ErrorMessage errorMessage={errorMessages} />
                    )}
                    <ButtonContainer>
                        <Button
                            onPress={handleSubmit}
                            title={t('authentication.login')}
                        />
                        <Button
                            onPress={goToSignUp}
                            title={t('authentication.signUp')}
                        />
                    </ButtonContainer>
                </FormContainer>
            )}
        </Formik>
    );
};

const ButtonContainer = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
