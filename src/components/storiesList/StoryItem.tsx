import { FC } from 'react';
import { StoryTabNavigationProp, StoryInterface } from '@types';
import styled from 'styled-components/native';
import { BaseText } from '@UI';
import { useNavigation } from '@react-navigation/native';
import { routes } from '@components';
import { useAppDispatch } from '@store';
import { setCurrentStoryId } from '@store/storySlice';
import { Image } from '@UI/image';

export const StoryItem: FC<StoryInterface> = ({ id, title, cover }) => {
    const navigation = useNavigation<StoryTabNavigationProp>();
    const dispatch = useAppDispatch();

    const handlePress = () => {
        dispatch(setCurrentStoryId(id));
        navigation.navigate(routes.story, { id });
    };

    return (
        <Container onPress={handlePress}>
            <Image
                uri={cover}
                style={{ width: '100%', aspectRatio: 1, borderRadius: 10 }}
            />
            <BaseText>{title}</BaseText>
        </Container>
    );
};

const Container = styled.TouchableOpacity({
    width: '45%',
    margin: '2.5%',
});
