import { FC } from 'react';
import { StoryTabNavigationProp, StoryTabParamList } from '@types';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { routes } from '@components';
import styled from 'styled-components/native';
import { Button } from '@UI/button';

export const DoneButton: FC = () => {
    const navigation = useNavigation<StoryTabNavigationProp>();
    const {
        params: { isNewStory },
    } = useRoute<RouteProp<StoryTabParamList, routes.addStoryMembers>>();

    const onPress = () => {
        navigation.goBack();
    };

    return (
        <>
            {isNewStory && (
                <Container>
                    <Button onPress={onPress} title={'Done'} />
                </Container>
            )}
        </>
    );
};

const Container = styled.View({
    justifySelf: 'flex-end',
    bottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
});
