import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { ButtonContainer, Container, Dot, Form, Label, RadioBox, RadioText } from './styles'
import Header from '@components/Header'
import InputContainer from '@components/Input'
import Button from '@components/Button'
import { Row } from '@screens/Resume/styles'
import { mask } from '@utils/index'

export default function NewFood() {
  const [isDiet, setIsDiet] = useState(true)
  const { COLORS } = useTheme();
  const { navigate } = useNavigation()
  const [inputValues, setInputValues] = useState({
    name: '',
    description: '',
    date: '',
    hour: '',
  });

  const handleInputChange = (key: keyof typeof inputValues, value: string) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  return (
    <Container>
      <Header title='Nova refeição' goBack={() => navigate('home')} />
      <Form>
        <InputContainer
          label='Nome'
          onChangeText={(e) => handleInputChange('name', e)}
        />
        <InputContainer
          label='Descrição'
          maxLength={150}
          onChangeText={(e) => handleInputChange('description', e)}
          multiline
        />
        <Row>
          <InputContainer
            label='Data'
            width={47}
            value={inputValues.date}
            onChangeText={(e) => handleInputChange('date', mask('date', e))}
            maxLength={10}
          />
          <InputContainer
            label='Hora'
            width={47}
            value={inputValues.hour}
            onChangeText={(e) => handleInputChange('hour', mask('time', e))}
            maxLength={5}
          />
        </Row>
        <Label>Está dentro da dieta?</Label>
        <Row>
          <RadioBox
            color={COLORS.GREEN_DARK}
            bgColor={COLORS.GREEN_LIGHT}
            onPress={() => setIsDiet(true)}
            active={isDiet}
          >
            <Dot color={COLORS.GREEN_DARK} />
            <RadioText>Sim</RadioText>
          </RadioBox>
          <RadioBox
            color={COLORS.RED_DARK}
            bgColor={COLORS.RED_LIGHT}
            onPress={() => setIsDiet(false)}
            active={!isDiet}
          >
            <Dot color={COLORS.RED_DARK} />
            <RadioText>Não</RadioText>
          </RadioBox>
        </Row>

      </Form>
      <ButtonContainer>
        <Button variant='contained' type='FULL' title='Cadastrar Refeição' onPress={() => navigate('negativeFeedback')} />
      </ButtonContainer>
    </Container>
  )
}