import styled, { css } from 'styled-components/native';
import { TouchableOpacity, View } from 'react-native';

export const Card = styled(TouchableOpacity)`
  margin-bottom: 8px;
  padding: 14px 16px 14px 12px;
  align-items: center;
  gap: 12px;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;
`;

export const Hour = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Divider = styled.View`
  height: 14px;
  width: 1px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;

export const Food = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;
type DotProp = {
  isDiet: boolean
};

export const Dot = styled(View)<DotProp>`
  width: 14px;
  height: 14px;
  border-radius: 10px;
  background-color: ${({ theme, isDiet }) =>
    isDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;
