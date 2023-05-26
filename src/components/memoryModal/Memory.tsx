import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StoryTabNavigationProp, StoryTabParamList } from '@types';
import { routes } from '@components';
import { useAppSelector } from '@store';
import { useStoryQuery } from '@api/story';
import styled from 'styled-components/native';
import { useState } from 'react';
import { AnimatedBar } from '@components/memoryModal/AnimatedBar';
import { MemoryInfo } from '@components/memoryModal/MemoryInfo';
import { Image } from '@UI/image';

export const Memory = () => {
    const navigation = useNavigation<StoryTabNavigationProp>();
    const {
        params: { memoryIndex },
    } = useRoute<RouteProp<StoryTabParamList, routes.memoryModal>>();
    const { currentStoryId } = useAppSelector(state => state.story);
    const { data: story } = useStoryQuery(currentStoryId);
    const { memories } = story || {};
    const memory = memories?.[memoryIndex];
    const { content, medias, postDate } = memory || {};

    const [currentMedia, setCurrentMedia] = useState(0);

    const onPress = () => {
        if (medias && currentMedia === medias.length - 1) {
            if (memories && memoryIndex !== memories.length - 1) {
                setCurrentMedia(0);
                navigation.replace(routes.memoryModal, {
                    memoryIndex: memoryIndex + 1,
                });
            } else {
                navigation.navigate(routes.story, { id: currentStoryId });
            }
        } else {
            setCurrentMedia(currentMedia + 1);
        }
    };

    return (
        <Container onPress={onPress} activeOpacity={0.8}>
            {medias && postDate && content && (
                <>
                    <AnimatedBar
                        key={`animatedBar-${memory}-${currentMedia}`}
                        handleNext={onPress}
                        memoryNumber={medias.length}
                        currentMemoryIndex={currentMedia}
                    />
                    <Image
                        uri={medias[currentMedia]}
                        resizeMode="contain"
                        style={{ width: '100%', height: '100%' }}
                    />
                    <MemoryInfo content={content} postDate={postDate} />
                </>
            )}
        </Container>
    );
};

const Container = styled.TouchableOpacity({
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
});
