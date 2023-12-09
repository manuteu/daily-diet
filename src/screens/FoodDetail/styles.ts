import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
`;

export const Content = styled.View`
  gap: 24px;
  padding: 40px 24px 24px 24px;
  margin-top: -24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 20px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 20px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `};
  margin-bottom: 4px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_200};
  `}
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_100};
  `}
  margin-bottom: 4px;
`;

export const Clip = styled.View`
  padding: 8px 16px;
  align-items: center;
  gap: 8px;
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  align-self: flex-start;
  border-radius: 50px;
`;

export const ClipText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_100};
  `}
`;

export const ButtonContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  gap: 10px;
  padding: 40px 24px;
`;
