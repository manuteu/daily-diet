import React from 'react'
import { ArrowContainer, Card, CardSubtitle, CardTitle, Content, ContentContainer, ContentTitle, PercentHeader, Row } from './styles'
import { Subtitle, Title } from '@components/PercentCard/styles'
import ArrowSvg from '@icons/Arrow'
import { useTheme } from 'styled-components/native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { FoodProps } from '@storage/food/createFood'
import { calculateIsDiet, maxDietTrue, sumDietFalse, sumDietTrue, sumFoods } from '@utils/index'

type RouteParams = {
  food: FoodProps[]
}

export default function Resume() {
  const { COLORS } = useTheme()
  const { navigate } = useNavigation()
  const { params } = useRoute()
  const { food } = params as RouteParams

  return (
    <>
      <PercentHeader type={Number(calculateIsDiet(food)) > 50 ? 'INSIDE': 'OUTSIDE'}>
        <ArrowContainer onPress={() => navigate('home')}>
          <ArrowSvg color={Number(calculateIsDiet(food)) > 50 ? COLORS.GREEN_DARK : COLORS.RED_DARK} />
        </ArrowContainer>
        <Title>{calculateIsDiet(food)}%</Title>
        <Subtitle>das refeições dentro da dieta</Subtitle>
      </PercentHeader>
      <ContentContainer>
        <ContentTitle>Estatísticas gerais</ContentTitle>
        <Content>
          <Card>
            <CardTitle>{maxDietTrue(food)}</CardTitle>
            <CardSubtitle>melhor sequência de pratos dentro da dieta</CardSubtitle>
          </Card>
          <Card>
            <CardTitle>{sumFoods(food)}</CardTitle>
            <CardSubtitle>refeições registradas</CardSubtitle>
          </Card>
          <Row>
            <Card style={{ width: '48%' }} type='INSIDE'>
              <CardTitle>{sumDietTrue(food)}</CardTitle>
              <CardSubtitle>refeições dentro da dieta</CardSubtitle>
            </Card>
            <Card style={{ width: '48%' }} type='OUTSIDE'>
              <CardTitle>{sumDietFalse(food)}</CardTitle>
              <CardSubtitle>refeições fora da dieta</CardSubtitle>
            </Card>
          </Row>
        </Content>
      </ContentContainer>
    </>
  )
}