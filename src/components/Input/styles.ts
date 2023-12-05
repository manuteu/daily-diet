import styled, { css } from 'styled-components/native';

export const Form = styled.View`
  flex-direction: column;
  justify-content: start;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Input = styled.TextInput`
  padding: 14px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  width: 100%;
`;
