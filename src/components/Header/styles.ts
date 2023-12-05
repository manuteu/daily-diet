import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  align-items: center;
  flex-direction: row;
  height: 132px;
  padding: 24px 24px 24px 0px;
  justify-content: space-between;
`;

export const ArrowContainer = styled(TouchableOpacity)`
  transform: rotate(-135deg);
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const Title = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const CheatBox =  styled.View`
  width: 36px;
`
