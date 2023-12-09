import { View, Text } from 'react-native'
import React from 'react'
import { Container, Title, ArrowContainer, CheatBox } from './styles'
import ArrowSvg from '@icons/Arrow'
import { useTheme } from 'styled-components/native'

export type TypeColorProps = 'INSIDE' | 'OUTSIDE' | 'DEFAULT';

type Props = {
  title: string
  goBack?: () => void;
  type?: TypeColorProps;
}

export default function Header({ title, goBack, type }: Props) {
  const { COLORS: { GREEN_DARK, GREEN_LIGHT, RED_LIGHT, RED_DARK, GRAY_600 } } = useTheme()
  return (
    <Container bgColor={type === 'INSIDE' ? GREEN_LIGHT : type === 'OUTSIDE' ? RED_LIGHT : GRAY_600}>
      <ArrowContainer onPress={goBack}>
        <ArrowSvg color={type === 'INSIDE' ? GREEN_DARK : type === 'OUTSIDE' ? RED_DARK : ''} />
      </ArrowContainer>
      <Title>{title}</Title>
      <CheatBox />
    </Container>
  )
}