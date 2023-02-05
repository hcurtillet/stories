import React, { useState } from 'react';
import { Formik } from 'formik';
import { FormContainer } from '@styles';
import { Button, ErrorModal, TextInput } from '@components';
import { StoryDetailType, StoryTabNavigationProp } from '@types';
import { useTranslation } from 'react-i18next';
import api from '@api';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { useMutation, useQueryClient } from 'react-query';

const defaultValues: StoryDetailType = {
    id: '',
    title: '',
    description: '',
    userIds: [],
    thumbnail: '',
    users: [],
};

type Props = {
    initialValues: StoryDetailType | null;
};
export const StoryForm = (props: Props) => {
    const { initialValues } = props;
    const { t } = useTranslation();

    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const navigation = useNavigation<StoryTabNavigationProp>();
    const queryClient = useQueryClient();
    const mutation = useMutation(
        initialValues ? api.story.put : api.story.post,
        {
            onSuccess: async () => {
                await queryClient.invalidateQueries('stories');
                await queryClient.invalidateQueries(
                    `storyDetails_${initialValues?.id}`,
                );
                navigation.goBack();
            },
        },
    );

    const onSubmit = async (values: StoryDetailType) => {
        if (values.title === '') {
            setErrorMessage(t('story.errorMessage.titleIsRequired'));
            return;
        }
        if (values.description === '') {
            setErrorMessage(t('story.errorMessage.descriptionIsRequired'));
            return;
        }
        try {
            mutation.mutate(values);
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
                onSubmit={onSubmit}>
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
