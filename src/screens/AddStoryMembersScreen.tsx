import React, { FC } from 'react';
import { ScreenContainer } from '@UI/screenContainer';
import { Header, MemberList, SearchBar } from '@components/addStoryMembers';

export const AddStoryMembersScreen: FC = () => (
    <ScreenContainer>
        <Header />
        <SearchBar />
        <MemberList />
    </ScreenContainer>
);
