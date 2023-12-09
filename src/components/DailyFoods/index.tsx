import { TouchableOpacityProps } from 'react-native'
import React from 'react'
import { Container, DateText } from './styles'
import FoodCard from '@components/FoodCard'

export type Foods = {
  name: string;
  hour: string;
  type: 'IN' | 'OUT';
}

export type DailyFoodsProps = TouchableOpacityProps & {
  date: string;
  foods: Foods[]
}

export default function DailyFoods({ date, foods, ...rest }: DailyFoodsProps) {
  return (
    <Container>
      <DateText>{date}</DateText>
      {foods.map((food, index) => (
        <FoodCard key={index} {...food} {...rest} />
      ))}
    </Container>
  )
}