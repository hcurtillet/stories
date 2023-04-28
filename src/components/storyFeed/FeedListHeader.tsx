import React, { FC } from 'react';
import { BaseText, colors, TitleText } from '@UI';
import { StoryInterface } from '@types';
import styled from 'styled-components/native';
import { Separator } from '@UI/separators';
import { useTranslation } from 'react-i18next';
import { VerticalSpace } from '@UI/space';

export const FeedListHeader: FC<StoryInterface> = ({ title, description }) => {
    const { t } = useTranslation();
    return (
        <Container>
            <TitleText>{title}</TitleText>
            <BaseText>{`${t('story.description')}: ${description}`}</BaseText>
            <VerticalSpace size={20} />
            <Separator color={colors.blue} width="60%" />
        </Container>
    );
};

const Container = styled.View({
    width: '90%',
    alignSelf: 'center',
    bottomMargin: 10,
    topMargin: 10,
});
