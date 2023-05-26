import React, { useState } from 'react';
import { Formik } from 'formik';
import {
    StoryTabNavigationProp,
    StoryInterface,
    StoryTabParamList,
} from '@types';
import { useTranslation } from 'react-i18next';
import {
    useStoryCreateMutation,
    useStoryQuery,
    useStoryUpdateMutation,
} from '@api/story';
import { Loader } from '@UI/loader';
import { TextInput } from '@UI/textInput';
import { Button } from '@UI/button';
import { FormContainer } from '@UI/containers';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { InformationMessage } from '@UI/informationMessage';
import { colors } from '@UI';
import { routes } from '@components';
import { Cover } from '@components/editStory/Cover';
import { uploadImage } from '@api/files';

const initialValues: StoryInterface = {
    id: '',
    userIds: [],
    title: '',
    description: '',
    users: [],
    cover: '',
    createdAt: '',
    createdBy: '',
    memories: [],
};
export const StoryForm = () => {
    const { t } = useTranslation();
    const navigation = useNavigation<StoryTabNavigationProp>();
    const { params } =
        useRoute<RouteProp<StoryTabParamList, routes.editStory>>();
    const { id } = params || {};
    const { data: story } = useStoryQuery(id || '');

    const [isImageLoading, setIsImageLoading] = useState(false);

    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const handleSuccessCreate = (storyId: string) => {
        navigation.replace(routes.addStoryMembers, {
            storyId,
            isNewStory: true,
        });
    };

    const handleSuccessUpdate = () => {
        navigation.goBack();
    };

    const { mutate: createStory, isLoading: isLoadingCreateStory } =
        useStoryCreateMutation(handleSuccessCreate);

    const { mutate: updateStoru, isLoading: isLoadingUpdateStory } =
        useStoryUpdateMutation(id || '', handleSuccessUpdate);

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
            if (values.cover && values.cover.startsWith('file')) {
                setIsImageLoading(true);
                values.cover = await uploadImage({
                    uri: values.cover,
                    fileName: values.title,
                });
                setIsImageLoading(false);
            }
            if (id) {
                updateStoru(values);
            } else {
                createStory(values);
            }
        } catch (error: any) {
            setErrorMessage(t('story.errorMessage.errorWhileCreatingStory'));
        }
    };
    return (
        <FormContainer>
            {(isLoadingCreateStory ||
                isLoadingUpdateStory ||
                isImageLoading) && <Loader />}
            <InformationMessage
                message={errorMessage}
                isVisible={errorMessage !== undefined}
                messageColor={colors.red}
                onDismiss={() => setErrorMessage(null)}
            />
            <Formik initialValues={story ?? initialValues} onSubmit={onSubmit}>
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <>
                        <Cover
                            cover={values.cover}
                            onChange={handleChange('cover')}
                        />
                        <TextInput
                            label={t('story.title') as string}
                            onChangeText={handleChange('title')}
                            onBlur={handleBlur('title')}
                            value={values.title}
                        />
                        <TextInput
                            label={t('story.description') as string}
                            onChangeText={handleChange('description')}
                            onBlur={handleBlur('description')}
                            multiline={true}
                            value={values.description}
                        />
                        <Button onPress={handleSubmit} title="Submit" />
                    </>
                )}
            </Formik>
        </FormContainer>
    );
};
