import { View, Text } from 'react-native'
import React from 'react'
import { Container, Title, ArrowContainer, CheatBox } from './styles'
import ArrowSvg from '@icons/Arrow'

type Props = {
  title: string
}

export default function Header({ title }: Props) {
  return (
    <Container>
      <ArrowContainer>
        <ArrowSvg color='' />
      </ArrowContainer>
      <Title>{title}</Title>
      <CheatBox />
    </Container>
  )
}