import React, { useState } from 'react'
import { Avatar, Container, Header, ScrollCards, Text } from './styles'
import PercentCard from '@components/PercentCard'
import Logo from '@icons/Logo'
import AvatarPng from '@assets/avatar.png'
import Button from '@components/Button'
import DailyFoods, { DailyFoodsProps } from '@components/DailyFoods'

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
  return (
    <Container>
      <Header>
        <Logo />
        <Avatar source={AvatarPng} />
      </Header>
      <PercentCard />
      <Text>Refeições</Text>
      <Button type='FULL' variant='contained' />
      <ScrollCards showsVerticalScrollIndicator={false} fadingEdgeLength={300}>
        {data.map((data: DailyFoodsProps, index) => (
          <DailyFoods key={index} {...data} />
        ))}
      </ScrollCards>
    </Container>
  )
}