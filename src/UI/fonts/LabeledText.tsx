import styled from 'styled-components/native';
import { colors } from '../colors';
import { BaseText } from './BaseText';

export const LabeledText = styled(BaseText)({
    fontWeight: 'bold',
    color: colors.blue,
});
