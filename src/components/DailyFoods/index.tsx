import { View, Text } from 'react-native'
import React from 'react'
import { Container, DateText } from './styles'
import FoodCard from '@components/FoodCard'

export type Foods = {
  name: string;
  hour: string;
  type: 'IN' | 'OUT';
}

export interface DailyFoodsProps {
  date: string;
  foods: Foods[]
}

export default function DailyFoods({ date, foods }: DailyFoodsProps) {
  return (
    <Container>
      <DateText>{date}</DateText>
      {foods.map((food, index) => (
        <FoodCard key={index} {...food} />
      ))}
    </Container>
  )
}