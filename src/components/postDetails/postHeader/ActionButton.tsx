import React, { FC } from 'react';
import { PostInterface, StoryTabNavigationProp } from '@types';
import { useDeletePostMutation } from '@api/posts';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import { MenuView, NativeActionEvent } from '@react-native-menu/menu';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useTranslation } from 'react-i18next';
import { colors } from '@UI';

export const ActionButton: FC<Pick<PostInterface, 'id' | 'storyId'>> = ({
    id,
    storyId,
}) => {
    const navigation = useNavigation<StoryTabNavigationProp>();
    const { t } = useTranslation();
    const { mutate: deletePost } = useDeletePostMutation(
        id as string,
        storyId,
        () => navigation.goBack(),
    );

    const onPress = ({ nativeEvent }: NativeActionEvent) => {
        const { event } = nativeEvent;
        if (event === 'edit') {
        }
        if (event === 'delete') {
            deletePost();
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
                <Icon name={'ellipsis-h'} color={colors.black} size={30} />
            </MenuContainer>
        </Container>
    );
};

const Container = styled.View({
    alignItems: 'flex-end',
});

const MenuContainer = styled(MenuView)({
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
});
