import React from 'react'
import { ArrowContainer, Container, PercentHeader } from './styles'
import { Subtitle, Title } from '@components/PercentCard/styles'
import ArrowSvg from '@icons/Arrow'

export default function Resume() {
  return (
    <>
      <PercentHeader type='INSIDE'>
        <ArrowContainer>
          <ArrowSvg />
        </ArrowContainer>
        <Title>90,86%</Title>
        <Subtitle>das refeições dentro da dieta</Subtitle>
      </PercentHeader>
      <Container />
      
    </>
  )
}