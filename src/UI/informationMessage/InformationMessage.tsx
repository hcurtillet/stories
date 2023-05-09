import React, { FC, useEffect } from 'react';
import styled from 'styled-components/native';
import { BaseText, colors } from '@UI';

interface ComponentProps {
    message: string | null;
    isVisible: boolean;
    messageColor: string;
    onDismiss?: () => void;
}

export const InformationMessage: FC<ComponentProps> = ({
    message,
    messageColor,
    onDismiss,
    isVisible,
}) => {
    const [isMessageVisible, setIsMessageVisible] =
        React.useState<boolean>(false);

    useEffect(() => {
        if (isVisible) {
            setIsMessageVisible(true);
            setTimeout(() => {
                setIsMessageVisible(false);
                onDismiss && onDismiss();
            }, 2000);
        }
    }, [isVisible, onDismiss, message]);

    return (
        <>
            {isMessageVisible && message && (
                <Screen>
                    <Container color={messageColor}>
                        <BaseText style={{ color: messageColor }}>
                            {message}
                        </BaseText>
                    </Container>
                </Screen>
            )}
        </>
    );
};

const Screen = styled.View({
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: 1000,
});
const Container = styled.View<{ color: string }>(({ color }) => ({
    borderRadius: 10,
    borderColor: color,
    backgroundColor: colors.white,
    borderWidth: 1,
    padding: 10,
    minWidth: '30%',
    maxWidth: '80%',
    alignItems: 'center',
    justifyContent: 'center',
}));
