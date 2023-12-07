import React, { useEffect } from 'react'
import { Container } from './styles'
import Header from '@components/Header'
import InputContainer from '@components/Input'
import { Row } from '@screens/Resume/styles'
import { View } from 'react-native'

export default function NewFood() {
  return (
    <>
      <Header title='Nova refeição' />
      <Container>
        <InputContainer label='Nome' />
        <InputContainer label='Descrição' maxLength={150} />
        <Row>

          <InputContainer label='Data' width={47} />
          <InputContainer label='Hora' width={47} />
        </Row>
      </Container>
    </>
  )
}