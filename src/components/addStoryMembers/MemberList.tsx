import React, { FC } from 'react';
import styled from 'styled-components/native';
import { useTranslation } from 'react-i18next';
import { selectSearchUser } from '@store/userSlice/searchUserSlice';
import { useAppSelector } from '@store';
import { useSearchUsers } from '@api/users';
import { UserInterface } from '@types';
import { UserItem } from '@components/addStoryMembers/userItem';
import { BaseText } from '@UI';
import { FlatList } from 'react-native';
import { Loader } from '@UI/loader';

export const MemberList: FC = () => {
    const { t } = useTranslation();
    const { searchUser } = useAppSelector(selectSearchUser);
    const { data: users, isFetching } = useSearchUsers(searchUser);

    const renderUser = ({ item }: { item: UserInterface }) => (
        <UserItem {...item} />
    );
    return (
        <Container>
            {isFetching && <Loader />}
            {users && users.length > 0 ? (
                <FlatList
                    data={users}
                    renderItem={renderUser}
                    keyExtractor={user => user.id}
                />
            ) : (
                <MessageContainer>
                    <BaseText>{t('storyMembers.noUsersFound')}</BaseText>
                </MessageContainer>
            )}
        </Container>
    );
};

const Container = styled.View({
    flex: 1,
    width: '100%',
});

const MessageContainer = styled.View({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
});
