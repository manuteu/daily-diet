import React from 'react'
import { ArrowContainer, Card, CardSubtitle, CardTitle, Content, ContentContainer, ContentTitle, PercentHeader, Row } from './styles'
import { Subtitle, Title } from '@components/PercentCard/styles'
import ArrowSvg from '@icons/Arrow'
import { useTheme } from 'styled-components/native'
import { useNavigation } from '@react-navigation/native'

export default function Resume() {
  const { COLORS } = useTheme()
  const { navigate } = useNavigation()

  return (
    <>
      <PercentHeader type='INSIDE'>
        <ArrowContainer onPress={() => navigate('home')}>
          <ArrowSvg color={COLORS.GREEN_DARK} />
        </ArrowContainer>
        <Title>90,86%</Title>
        <Subtitle>das refeições dentro da dieta</Subtitle>
      </PercentHeader>
      <ContentContainer>
        <ContentTitle>Estatísticas gerais</ContentTitle>
        <Content>
          <Card>
            <CardTitle>22</CardTitle>
            <CardSubtitle>melhor sequência de pratos dentro da dieta</CardSubtitle>
          </Card>
          <Card>
            <CardTitle>109</CardTitle>
            <CardSubtitle>refeições registradas</CardSubtitle>
          </Card>
          <Row>
            <Card style={{ width: '48%' }} type='INSIDE'>
              <CardTitle>99</CardTitle>
              <CardSubtitle>refeições dentro da dieta</CardSubtitle>
            </Card>
            <Card style={{ width: '48%' }} type='OUTSIDE'>
              <CardTitle>10</CardTitle>
              <CardSubtitle>refeições fora da dieta</CardSubtitle>
            </Card>
          </Row>
        </Content>
      </ContentContainer>
    </>
  )
}