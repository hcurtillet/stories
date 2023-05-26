import React, { FC } from 'react';
import styled from 'styled-components/native';
import { Image } from '@UI/image';
import { StoryInterface, StoryTabNavigationProp } from '@types';
import { useNavigation } from '@react-navigation/native';
import { routes } from '@components';

export const UsersLayout: FC<Pick<StoryInterface, 'id' | 'users'>> = ({
    id,
    users,
}) => {
    const navigation = useNavigation<StoryTabNavigationProp>();

    const onPress = () => {
        navigation.navigate(routes.userList, { storyId: id });
    };
    return (
        <Container onPress={onPress}>
            {users.slice(0, 10).map(({ profilePicture }, index) => (
                <Image
                    uri={profilePicture}
                    style={{
                        height: 40,
                        width: 40,
                        borderRadius: 20,
                        position: 'absolute',
                        right: index * 30,
                    }}
                />
            ))}
        </Container>
    );
};

const Container = styled.TouchableOpacity({
    width: '90%',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    margin: '5%',
    backgroundColor: 'red',
});
