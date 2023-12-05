import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type TypeColorProps = 'INSIDE' | 'OUTSIDE';

type Props = {
  type: TypeColorProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  width: 100%;
  padding: 20px 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;
  border-radius: 8px;
  background-color: ${({ theme, type }) =>
    type === 'INSIDE' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  margin: 30px 0px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const ArrowContainer = styled.View`
  position: absolute;
  top: 14px;
  right: 14px;
`;
