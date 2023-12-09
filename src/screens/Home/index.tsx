import React, { useState } from 'react'
import { Avatar, Container, Header, ScrollCards, Text } from './styles'
import PercentCard from '@components/PercentCard'
import Logo from '@icons/Logo'
import AvatarPng from '@assets/avatar.png'
import Button from '@components/Button'
import DailyFoods, { DailyFoodsProps } from '@components/DailyFoods'
import Plus from '@icons/Plus'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const [data, setData] = useState<DailyFoodsProps[]>([
    {
      date: '12.08.22',
      foods: [{
        name: 'X-tudo',
        hour: '20:00',
        type: 'OUT',
      },
      {
        name: 'Whey protein com leite',
        hour: '16:00',
        type: 'IN',
      }]
    },
    {
      date: '11.08.22',
      foods: [
        {
          name: 'Salada cesar com frango',
          hour: '12:30',
          type: 'IN',
        },
        {
          name: 'Vitamina de Banana',
          hour: '09:30',
          type: 'IN',
        },
      ]
    }
  ])
  const { navigate } = useNavigation()
  return (
    <Container>
      <Header>
        <Logo />
        <Avatar source={AvatarPng} />
      </Header>
      <PercentCard />
      <Text>Refeições</Text>
      <Button title='Nova Refeição' type='FULL' variant='contained' icon={<Plus />} onPress={() => navigate('newFood')} />
      <ScrollCards showsVerticalScrollIndicator={false} fadingEdgeLength={300}>
        {data.map((data: DailyFoodsProps, index) => (
          <DailyFoods key={index} {...data} onPress={() => navigate('foodDetail')} />
        ))}
      </ScrollCards>
    </Container>
  )
}