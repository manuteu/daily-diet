import { View, Text, Image } from 'react-native'
import React from 'react'
import { Container, Strong, SubTitle, Title } from './styles'
import Button from '@components/Button'
import { useNavigation } from '@react-navigation/native'

export default function NegativeFeedback() {
  const { navigate } = useNavigation()

  return (
    <Container>
      <View>
        <Title>Que pena!</Title>
        <SubTitle>Você<Strong> saiu da dieta </Strong>dessa vez, mas continue se esforçando e não desista!</SubTitle>
      </View>
      <Image source={require('@assets/illustration_outside.png')} />
      <Button title='Ir para página inicial' type='FIT' variant='contained' onPress={() => navigate('home')} />
    </Container>
  )
}