import React from 'react';
import { View, Text, Modal } from 'react-native';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { Button } from '@UI/button';

type Props = {
    visible: boolean;
    errorMessage: string;
    onPress: () => void;
};

export const ErrorModal = (props: Props) => {
    const { t } = useTranslation();
    const { visible, errorMessage, onPress } = props;

    return (
        <Modal visible={visible} transparent={true}>
            <ModalContainer>
                <MessageView>
                    <Text>{errorMessage}</Text>
                    <Button title={t('common.ok')} onPress={onPress} />
                </MessageView>
            </ModalContainer>
        </Modal>
    );
};

const ModalContainer = styled(View)`
    background-color: #000000aa;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

const MessageView = styled(View)`
    background-color: #fff;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 80%;
`;
