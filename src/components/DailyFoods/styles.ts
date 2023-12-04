import { TouchableOpacity, View } from 'react-native';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  margin-top: 24px;
`;

export const DateText = styled.Text`
  margin-bottom: 8px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;