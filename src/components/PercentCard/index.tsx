import React from 'react'
import { ArrowContainer, Container, Subtitle, Title } from './styles'
import ArrowSvg from '@icons/Arrow'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { FoodProps } from '@storage/food/createFood'
import { calculateIsDiet } from '@utils/index'

type PercentCardProps = {
  food: FoodProps[]
}

export default function PercentCard({ food }: PercentCardProps) {
  const { navigate } = useNavigation()
  const { COLORS } = useTheme()
  return (
    <Container type={Number(calculateIsDiet(food)) > 50 ? 'INSIDE' : 'OUTSIDE'} onPress={() => navigate('resume', { food })}>
      <ArrowContainer>
        <ArrowSvg color={Number(calculateIsDiet(food)) > 50 ? COLORS.GREEN_DARK : COLORS.RED_DARK} />
      </ArrowContainer>
      <Title>{calculateIsDiet(food)}%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>
    </Container>
  )
}