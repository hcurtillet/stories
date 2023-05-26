import React, { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import { useAppDispatch } from '@store';
import { setContent } from '@store/postSlice';

export const NewPostFrom: FC = () => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const [input, setInput] = useState<string>('');

    const handleOnChange = (event: string) => {
        setInput(event);
        dispatch(setContent(event));
    };

    return (
        <Container>
            <TextInput
                value={input}
                placeholder={t('newPost.placeholder') ?? ''}
                onChangeText={handleOnChange}
                multiline
            />
        </Container>
    );
};

const Container = styled.View({
    width: '90%',
    margin: 10,
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
});
