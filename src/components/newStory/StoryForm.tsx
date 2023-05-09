import React, { useState } from 'react';
import { Formik } from 'formik';
import { StoryTabNavigationProp, StoryInterface } from '@types';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import { useStoryCreateMutation } from '@api/story';
import { Loader } from '@UI/loader';
import { TextInput } from '@UI/textInput';
import { Button } from '@UI/button';
import { FormContainer } from '@UI/formContainer';
import { useNavigation } from '@react-navigation/native';
import { InformationMessage } from '@UI/informationMessage';
import { colors } from '@UI';
import { routes } from '@components';

const initialValues: StoryInterface = {
    id: '',
    userIds: [],
    title: '',
    description: '',
    users: [],
    thumbnails: [],
};
export const StoryForm = () => {
    const { t } = useTranslation();
    const navigation = useNavigation<StoryTabNavigationProp>();

    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const handleSuccess = (storyId: string) => {
        navigation.navigate(routes.addStoryMembers, { storyId });
    };

    const { mutate, isLoading } = useStoryCreateMutation(handleSuccess);

    const onSubmit = async (values: StoryInterface) => {
        if (values.title === '') {
            setErrorMessage(t('story.errorMessage.titleIsRequired'));
            return;
        }
        if (values.description === '') {
            setErrorMessage(t('story.errorMessage.descriptionIsRequired'));
            return;
        }
        try {
            mutate(values);
        } catch (error: any) {
            setErrorMessage(t('story.errorMessage.errorWhileCreatingStory'));
            console.log(error);
        }
    };
    return (
        <FormContainer>
            {isLoading && <Loader />}
            <InformationMessage
                message={errorMessage}
                isVisible={errorMessage !== undefined}
                messageColor={colors.red}
                onDismiss={() => setErrorMessage(null)}
            />
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
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
