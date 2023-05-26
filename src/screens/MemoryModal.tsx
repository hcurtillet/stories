import React, { FC } from 'react';
import { ModalContainer } from '@UI/containers';
import { Memory } from '@components/memoryModal';

export const MemoryModal: FC = () => (
    <ModalContainer>
        <Memory />
    </ModalContainer>
);
