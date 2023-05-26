import React, { FC } from 'react';
import styled from 'styled-components/native';
import { colors } from '@UI';
import ProgressBar from 'react-native-animated-progress';

interface ComponentProps {
    handleNext: () => void;
    memoryNumber: number;
    currentMemoryIndex: number;
}

export const AnimatedBar: FC<ComponentProps> = ({
    handleNext,
    memoryNumber,
    currentMemoryIndex,
}) => {
    const Items = [];
    for (let i = 0; i < memoryNumber; i++) {
        Items.push(i);
    }

    return (
        <Container>
            {Items.map(index => (
                <ItemContainer memoryNumber={memoryNumber}>
                    {index === currentMemoryIndex && (
                        <ProgressBar
                            key={`progress-${index}-${memoryNumber}`}
                            animated={true}
                            progressDuration={3000}
                            height={3}
                            progress={100}
                            onCompletion={handleNext}
                            backgroundColor={colors.blue}
                            trackColor={colors.grey}
                        />
                    )}
                    {index < currentMemoryIndex && (
                        <Item done={true} key={index} />
                    )}
                    {index > currentMemoryIndex && <Item done={false} />}
                </ItemContainer>
            ))}
        </Container>
    );
};

const Container = styled.View({
    width: '90%',
    position: 'absolute',
    marginLeft: '5%',
    marginRight: '5%',
    top: 0,
    zIndex: 1,
    flexDirection: 'row',
});

const ItemContainer = styled.View<{ memoryNumber: number }>(
    ({ memoryNumber }) => ({
        height: 3,
        overflow: 'hidden',
        width: `${100 / memoryNumber}%`,
        borderRadius: 5,
    }),
);

const Item = styled.View<{ done: boolean }>(({ done }) => ({
    height: 5,
    borderRadius: 5,
    backgroundColor: done ? colors.blue : colors.grey,
    top: 0,
}));
