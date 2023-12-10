import { View, Text } from 'react-native'
import React from 'react'
import { Card, Divider, Food, Hour, Dot } from './styles'
import { FoodDetailProps } from '@storage/food/createFood'

export default function FoodCard({ hour, name, isDiet, ...rest }: FoodDetailProps) {
  return (
    <Card {...rest}>
      <Hour>{hour}</Hour>
      <Divider />
      <Food>{name}</Food>
      <Dot isDiet={isDiet} />
    </Card>
  )
}