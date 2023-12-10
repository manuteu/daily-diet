import { TouchableOpacityProps } from 'react-native'
import React from 'react'
import { Card, Divider, Food, Hour, Dot } from './styles'
import { FoodDetailProps } from '@storage/food/createFood'

type FoodCardProps = {
  hour: string;
  name: string;
  description: string;
  isDiet: boolean;
  date: string;
}

export default function FoodCard({ hour, name, isDiet, date, ...rest }: FoodCardProps & TouchableOpacityProps) {
  return (
    <Card {...rest}>
      <Hour>{hour}</Hour>
      <Divider />
      <Food>{name}</Food>
      <Dot isDiet={isDiet} />
    </Card>
  )
}