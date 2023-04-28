import React, { FC } from 'react';
import { PostInterface } from '@types';
import styled from 'styled-components/native';
import { BaseText, colors } from '@UI';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { HorizontalSpace } from '@UI/space';

export const PostFooter: FC<Pick<PostInterface, 'comments'>> = ({
    comments,
}) => {
    const handlePress = () => {};
    return (
        <Container>
            <TouchableOpacity
                style={{ flexDirection: 'row' }}
                onPress={handlePress}>
                <BaseText>{comments.length > 0 && comments.length}</BaseText>
                <HorizontalSpace size={5} />
                <Icon name="comment-alt" size={25} color={colors.blue} />
            </TouchableOpacity>
        </Container>
    );
};

const Container = styled.View({
    marginTop: 10,
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'center',
});
