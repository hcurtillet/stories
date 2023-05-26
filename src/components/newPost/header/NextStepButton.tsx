import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '@UI';
import { useAppDispatch, useAppSelector } from '@store';
import { uploadImages } from '@api/files';
import { usePostCreateMutation } from '@api/posts';
import { resetPost, setIsUploading } from '@store/postSlice';
import { useNavigation } from '@react-navigation/native';

export const NextStepButton: FC = () => {
    const { post, story } = useAppSelector(state => state);
    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const { mutate: createPost } = usePostCreateMutation(story.currentStoryId);
    const handlePress = async () => {
        dispatch(setIsUploading(true));
        const { content, medias } = post;
        const uris = await uploadImages(medias);
        await createPost({
            content,
            storyId: story.currentStoryId,
            medias: uris,
            comments: [],
        });
        dispatch(resetPost());
        navigation.goBack();
    };
    return (
        <TouchableOpacity onPress={handlePress}>
            <Icon name={'feather'} size={30} color={colors.blue} />
        </TouchableOpacity>
    );
};
