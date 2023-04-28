import { FC } from 'react';
import { StoryTabNavigationProp, StoryInterface } from '@types';
import styled from 'styled-components/native';
import { BaseText } from '@UI';
import { Images } from '@components/storiesList/Images';
import { useNavigation } from '@react-navigation/native';

export const StoryItem: FC<StoryInterface> = ({ id, title, thumbnails }) => {
    const navigation = useNavigation<StoryTabNavigationProp>();

    const handlePress = () => {
        navigation.navigate('Story', { id });
    };

    return (
        <Container onPress={handlePress}>
            <Images thumbnails={thumbnails} />
            <BaseText>{title}</BaseText>
        </Container>
    );
};

const Container = styled.TouchableOpacity({
    width: '45%',
    aspectRatio: 3 / 4,
    marginLeft: '2.5%',
    marginRight: '2.5%',
    marginBottom: '2.5%',
    marginTop: '2.5%',
});
