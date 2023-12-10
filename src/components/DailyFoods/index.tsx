import { TouchableOpacityProps } from 'react-native'
import React from 'react'
import { Container, DateText } from './styles'
import FoodCard from '@components/FoodCard'
import { FoodProps } from '@storage/food/createFood'

export default function DailyFoods({ date, foodDetail, ...rest }: FoodProps & TouchableOpacityProps) {
  return (
    <Container>
      <DateText>{date}</DateText>
      {foodDetail.map((food, index) => (
        <FoodCard key={index} {...food} {...rest} />
      ))}
    </Container>
  )
}