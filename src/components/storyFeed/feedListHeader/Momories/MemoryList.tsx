import React, { FC } from 'react';
import { MemoryInterface, StoryInterface } from '@types';
import styled from 'styled-components/native';
import { MemoryItem } from './MemoryItem';
import { ScrollView } from 'react-native';

export const MemoryList: FC<Pick<StoryInterface, 'memories'>> = ({
    memories,
}) => {
    const renderItem = (item: MemoryInterface, index: number) => (
        <MemoryItem key={index} index={index} {...item} />
    );

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Container>{memories.map(renderItem)}</Container>
        </ScrollView>
    );
};

const Container = styled.View({
    width: '100%',
    flexDirection: 'row',
});
