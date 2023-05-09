import React, { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { TextInput } from '@UI/textInput';
import styled from 'styled-components/native';
import { useDebounce } from '@components/shared';
import { setSearchUser } from '@store/userSlice/searchUserSlice';
import { useAppDispatch } from '@store';

export const SearchBar: FC = () => {
    const { t } = useTranslation();

    const dispatch = useAppDispatch();

    const [search, setSearch] = useState<string>('');

    const debouncedSearch = useDebounce(search, 500);

    const onChangeText = (text: string) => {
        setSearch(text);
    };

    useEffect(() => {
        dispatch(setSearchUser(debouncedSearch));
    }, [debouncedSearch, dispatch]);

    return (
        <Container>
            <TextInput
                placeholder={t('storyMembers.searchMembers') as string}
                value={search}
                onChangeText={onChangeText}
                flex
            />
        </Container>
    );
};

const Container = styled.View({
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
});
