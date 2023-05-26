import { FC } from 'react';
import { StoryTabNavigationProp } from '@types';
import { useNavigation } from '@react-navigation/native';
import { routes } from '@components';
import styled from 'styled-components/native';
import { colors } from '@UI';
import Icon from 'react-native-vector-icons/FontAwesome5';

export const NewStoryButton: FC = () => {
    const navigation = useNavigation<StoryTabNavigationProp>();

    const onPress = () => {
        navigation.navigate(routes.editStory);
    };

    return (
        <IconContainer onPress={onPress}>
            <Icon
                name={'plus'}
                color={colors.blue}
                size={30}
                style={{ alignSelf: 'center' }}
            />
        </IconContainer>
    );
};

const IconContainer = styled.TouchableOpacity({
    width: 75,
    height: 75,
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: colors.lightBlueButton,
    right: '5%',
    bottom: '5%',
    position: 'absolute',
});
