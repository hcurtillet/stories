import React, { FC } from 'react';
import { StoryInterface } from '@types';
import { UsersLayout } from './UsersLayout';
import { StoryTexts } from './StoryTexts';
import styled from 'styled-components/native';
import { Image } from '@UI/image';
import { ParamButton } from '@components/storyFeed/feedListHeader/Story/ParamButton';

export const StoryInfo: FC<Omit<StoryInterface, 'memories'>> = ({
    id,
    title,
    description,
    users,
    cover,
}) => (
    <Container>
        <ParamButton />
        <Image
            uri={cover}
            style={{
                width: '100%',
                height: '100%',
                zIndex: -2,
                position: 'absolute',
            }}
        />
        <Blur />
        <StoryTexts title={title} description={description} />
        <UsersLayout id={id} users={users} />
    </Container>
);

const Container = styled.View({
    width: '100%',
    aspectRatio: 3 / 2,
});

const Blur = styled.View({
    width: '100%',
    aspectRatio: 3 / 2,
    backgroundColor: 'black',
    opacity: 0.6,
    position: 'absolute',
    zIndex: -1,
});
