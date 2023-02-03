import React, { useState } from 'react';
import { Formik } from 'formik';
import { FormContainer } from '@styles';
import { Button, ErrorModal, TextInput } from '@components';
import { StoryTabNavigationProp, StoryType } from '@types';
import { useTranslation } from 'react-i18next';
import api from '@api';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

const defaultValues: StoryType = {
    title: '',
    description: '',
    userIds: [],
};

type Props = {
    initialValues?: StoryType;
};
export const StoryForm = (props: Props) => {
    const { t } = useTranslation();

    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const navigation = useNavigation<StoryTabNavigationProp>();

    const { initialValues } = props;
    const handleSubmit = async (values: StoryType) => {
        if (values.title === '') {
            setErrorMessage(t('story.errorMessage.titleIsRequired'));
            return;
        }
        if (values.description === '') {
            setErrorMessage(t('story.errorMessage.descriptionIsRequired'));
            return;
        }
        try {
            initialValues
                ? await api.story.put(values)
                : await api.story.post(values);
            navigation.goBack();
        } catch (error: any) {
            setErrorMessage(t('story.errorMessage.errorWhileCreatingStory'));
            console.log(error);
        }
    };
    return (
        <FormContainer>
            <ErrorModal
                visible={errorMessage !== null}
                errorMessage={errorMessage ?? ''}
                onPress={() => setErrorMessage(null)}
            />
            <Formik
                initialValues={initialValues ?? defaultValues}
                onSubmit={handleSubmit}>
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <TextInput
                            label={t('story.title')}
                            onChangeText={handleChange('title')}
                            onBlur={handleBlur('title')}
                            value={values.title}
                        />
                        <TextInput
                            label={t('story.description')}
                            onChangeText={handleChange('description')}
                            onBlur={handleBlur('description')}
                            multiline={true}
                            value={values.description}
                        />
                        <Button onPress={handleSubmit} title="Submit" />
                    </View>
                )}
            </Formik>
        </FormContainer>
    );
};
