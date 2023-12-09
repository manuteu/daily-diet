import styled, { css } from 'styled-components/native';

export const Blur = styled.View`
  flex: 1;
  background-color: #000;
  opacity: 0.3;
`;

export const Container = styled.View`
  position: absolute;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 8px;
  padding: 40px 24px 24px 24px;
  z-index: 10;
  top: 40%;
  align-self: center;
  max-width: 96%;
  gap: 24px;
`;

export const Title = styled.Text`
  text-align: center;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `};
`;

export const ButtonContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;
