import { View, Text, Image } from 'react-native'
import React from 'react'
import { Container, Strong, SubTitle, Title } from './styles'
import Button from '@components/Button'
import { useNavigation } from '@react-navigation/native'

export default function PositiveFeedback() {
  const { navigate } = useNavigation()

  return (
    <Container>
      <View>
        <Title>Continue assim!</Title>
        <SubTitle>Você continua <Strong>dentro da dieta.</Strong> Muito bem!</SubTitle>
      </View>
      <Image source={require('@assets/illustration_inside.png')} />
      <Button title='Ir para página inicial' type='FIT' variant='contained' onPress={() => navigate('home')} />
    </Container>
  )
}