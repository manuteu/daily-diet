import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

type Props = {
  color?: string;
  active?: boolean;
  bgColor?: string;
};

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Form = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: -24px;
  padding: 18px 24px;
`;

export const Label = styled.Text`
  margin-top: 18px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const RadioBox = styled(TouchableOpacity)<Props>`
  margin-top: 6px;
  width: 49%;
  padding: 16px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;
  border-radius: 6px;
  ${({ theme, active, bgColor, color }) => css`
    background-color: ${active ? bgColor : theme.COLORS.GRAY_600};
    border: 1px solid ${active ? color : theme.COLORS.GRAY_600};
  `}
`;

export const RadioText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Dot = styled.View<Props>`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  background-color: ${({ color }) => color};
`;

export const ButtonContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  padding: 40px 24px;
`;
