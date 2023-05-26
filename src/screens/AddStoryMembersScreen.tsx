import React, { FC } from 'react';
import { ScreenContainer } from '@UI/containers';
import {
    DoneButton,
    Header,
    MemberList,
    SearchBar,
} from '@components/addStoryMembers';

export const AddStoryMembersScreen: FC = () => (
    <ScreenContainer>
        <Header />
        <SearchBar />
        <MemberList />
        <DoneButton />
    </ScreenContainer>
);
