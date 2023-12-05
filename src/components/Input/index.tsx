import { View, Text } from 'react-native'
import React from 'react'
import { Form, Label } from './styles'

export default function Input() {
  return (
    <Form>
      <Label>Nome</Label>
      <Input />
    </Form>
  )
}