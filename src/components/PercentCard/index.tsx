import React from 'react'
import { ArrowContainer, Container, Subtitle, Title } from './styles'
import ArrowSvg from '@components/Arrow'

export default function PercentCard() {
  return (
    <Container type='INSIDE'>
      <ArrowContainer>
        <ArrowSvg />
      </ArrowContainer>
      <Title>90,86%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  )
}