import React, { useState } from 'react';
import { Formik } from 'formik';
import { ErrorModal } from '@components';
import { StoryTabNavigationProp, StoryInterface } from '@types';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { useStoryCreateMutation } from '@api/story';
import { Loader } from '@UI/loader';
import { TextInput } from '@UI/textInput';
import { Button } from '@UI/button';
import { FormContainer } from '@UI/formContainer';
import { useNavigation } from '@react-navigation/native';

interface ComponentProps extends StoryInterface {}
export const StoryForm = ({
    id,
    title,
    thumbnail,
    userIds,
    description,
}: ComponentProps) => {
    const { t } = useTranslation();
    const navigation = useNavigation<StoryTabNavigationProp>();

    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const handleSuccess = () => {
        navigation.goBack();
    };
    const { mutate, isLoading } = useStoryCreateMutation(handleSuccess);

    const onSubmit = async (values: StoryInterface) => {
        if (values.title === '') {
            setErrorMessage(t('storyFeed.errorMessage.titleIsRequired'));
            return;
        }
        if (values.description === '') {
            setErrorMessage(t('storyFeed.errorMessage.descriptionIsRequired'));
            return;
        }
        try {
            mutate(values);
        } catch (error: any) {
            setErrorMessage(
                t('storyFeed.errorMessage.errorWhileCreatingStory'),
            );
            console.log(error);
        }
    };
    return (
        <FormContainer>
            {isLoading && <Loader />}
            <ErrorModal
                visible={errorMessage !== null}
                errorMessage={errorMessage ?? ''}
                onPress={() => setErrorMessage(null)}
            />
            <Formik
                initialValues={{ id, title, thumbnail, userIds, description }}
                onSubmit={onSubmit}>
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <TextInput
                            label={t('storyFeed.title')}
                            onChangeText={handleChange('title')}
                            onBlur={handleBlur('title')}
                            value={values.title}
                        />
                        <TextInput
                            label={t('storyFeed.description')}
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
