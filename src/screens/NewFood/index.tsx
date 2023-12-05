import React from 'react'
import { Container } from './styles'
import Header from '@components/Header'
import Input from '@components/Input'

export default function NewFood() {
  return (
    <>
      <Header title='Nova refeição' />
      <Container>
        <Input />
      </Container>
    </>
  )
}