import { View, Text } from 'react-native'
import React from 'react'
import { Card, Divider, Food, Hour, Dot } from './styles'
import { Foods } from '@components/DailyFoods'

export default function FoodCard({ hour, name, type }: Foods) {
  return (
    <Card>
      <Hour>{hour}</Hour>
      <Divider />
      <Food>{name}</Food>
      <Dot type={type} />
    </Card>
  )
}