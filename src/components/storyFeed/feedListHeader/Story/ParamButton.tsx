import React, { FC } from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { MenuView, NativeActionEvent } from '@react-native-menu/menu';
import { useTranslation } from 'react-i18next';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StoryTabNavigationProp, StoryTabParamList } from '@types';
import { routes } from '@components';
import { useStoryDeleteMutation } from '@api/story';
import { colors } from '@UI';

export const ParamButton: FC = () => {
    const { t } = useTranslation();
    const navigation = useNavigation<StoryTabNavigationProp>();
    const {
        params: { id },
    } = useRoute<RouteProp<StoryTabParamList, routes.story>>();
    const { mutate: deleteStory } = useStoryDeleteMutation(
        id,
        navigation.goBack,
    );
    const onPress = ({ nativeEvent }: NativeActionEvent) => {
        const { event } = nativeEvent;
        if (event === 'edit') {
            navigation.navigate(routes.editStory, { id });
        }
        if (event === 'delete') {
            deleteStory();
        }
    };

    return (
        <Container>
            <MenuContainer
                onPressAction={onPress}
                actions={[
                    { id: 'edit', title: t('common.edit') },
                    {
                        id: 'delete',
                        title: t('common.delete'),
                        attributes: {
                            destructive: true,
                        },
                    },
                ]}>
                <Icon name={'ellipsis-h'} color={colors.white} size={30} />
            </MenuContainer>
        </Container>
    );
};

const Container = styled.View({
    width: '100%',
    zIndex: 3,
    padding: '5%',
    position: 'absolute',
    alignItems: 'flex-end',
});

const MenuContainer = styled(MenuView)({
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
});
