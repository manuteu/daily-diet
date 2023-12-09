import React from 'react'
import { ArrowContainer, Container, Subtitle, Title } from './styles'
import ArrowSvg from '@icons/Arrow'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'

export default function PercentCard() {
  const { navigate } = useNavigation()
  const { COLORS } = useTheme()
  return (
    <Container type='INSIDE' onPress={() => navigate('resume')}>
      <ArrowContainer>
        <ArrowSvg color={COLORS.GREEN_DARK} />
      </ArrowContainer>
      <Title>90,86%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  )
}