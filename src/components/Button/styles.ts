import styled, { css } from 'styled-components/native';
import { TouchableOpacity, Text as TextNative } from 'react-native';

export type ButtonTypeStyleProps = 'FULL' | 'FIT';
export type ButtonVariantProps = 'contained' | 'outlined'

type Props = {
  type?: ButtonTypeStyleProps;
  variant: ButtonVariantProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border-radius: 6px;
  ${({ theme, variant, type }) => css`
    border: 1px solid ${theme.COLORS.GRAY_200};
    background-color: ${variant === 'contained'
      ? theme.COLORS.GRAY_200
      : theme.COLORS.WHITE};
    align-self: ${type === 'FIT' ? 'center' : 'auto'};
  `};
`;

export const Text = styled(TextNative)<Props>`
  ${({ theme, variant }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${variant === 'contained'
      ? theme.COLORS.WHITE
      : theme.COLORS.GRAY_200};
  `}
`;

export const Content = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
