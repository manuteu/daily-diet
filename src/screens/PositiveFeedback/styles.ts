import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GREEN_DARK};
  `}
  margin-bottom: 6px;
  text-align: center;
`;

export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
  text-align: center;
`;

export const Strong = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
`;
