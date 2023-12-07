import { TextInput, View } from 'react-native';
import styled, { css } from 'styled-components/native';

type Props = {
  width?: number;
};

export const Form = styled(View)<Props>`
  gap: 4px;
  margin-top: 44px;
  flex-direction: row;
  width: ${({ width }) => width}%;
`;

export const Label = styled.Text`
  margin-top: -24px;
  position: absolute;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Input = styled(TextInput)`
  flex-direction: row;
  padding: 12px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  width: 100%;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_100};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;
