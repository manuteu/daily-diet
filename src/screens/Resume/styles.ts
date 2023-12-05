import { TypeColorProps } from '@components/PercentCard/styles';
import { View, TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

type Props = {
  type?: TypeColorProps;
};

export const PercentHeader = styled(View)<Props>`
  height: 200px;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, type }) =>
    type === 'INSIDE' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const ArrowContainer = styled(TouchableOpacity)`
  position: absolute;
  top: 28px;
  left: 0px;
  transform: rotate(-135deg);
  padding: 24px;
`;

export const ContentContainer = styled.View`
  flex: 1;
  background-color: white;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-top: -24px;
  padding: 30px 24px;
`;

export const ContentTitle = styled.Text`
  text-align: center;
  padding-bottom: 24px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const Content = styled.View`
  gap: 12px;
`;

export const Card = styled(View)<Props>`
  padding: 16px;
  gap: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  background-color: ${({ theme, type }) => {
    if (type === 'INSIDE') {
      return theme.COLORS.GREEN_LIGHT;
    } else if (type === 'OUTSIDE') {
      return theme.COLORS.RED_LIGHT;
    } else {
      return theme.COLORS.GRAY_600;
    }
  }};
  border-radius: 8px;
`;

export const CardTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const CardSubtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
