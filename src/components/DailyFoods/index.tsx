import { TouchableOpacityProps } from 'react-native'
import React from 'react'
import { Container, DateText } from './styles'
import FoodCard from '@components/FoodCard'
import { FoodProps } from '@storage/food/createFood'
import { useNavigation } from '@react-navigation/native'

export default function DailyFoods({ date, foodDetail }: FoodProps) {
  const { navigate } = useNavigation()

  return (
    <Container>
      <DateText>{date}</DateText>
      {foodDetail.map((food, index) => (
        <FoodCard key={index} {...food} date={date} onPress={() => navigate('foodDetail', { food: { ...food, date } })} />
      ))}
    </Container>
  )
}