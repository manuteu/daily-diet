import React, { useState, useCallback } from 'react'
import { useFocusEffect, useNavigation, useRoute } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { ButtonContainer, Container, Dot, Form, Label, RadioBox, RadioText } from './styles'
import Header from '@components/Header'
import InputContainer from '@components/Input'
import Button from '@components/Button'
import { Row } from '@screens/Resume/styles'
import { mask } from '@utils/index'
import { CreateFood, createFood } from '@storage/food/createFood'
import { Alert } from 'react-native'
import { UpdateFood, updateFood } from '@storage/food/updateFood'

type RouteParams = {
  food: {
    name: string;
    hour: string;
    isDiets: boolean;
    date: string;
    description: string;
  };
}

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
  const { params } = useRoute()
  const { food: { date, description, hour, isDiets, name } } = params as RouteParams

  const handleInputChange = (key: keyof typeof inputValues, value: string) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [key]: value,
    }));
  };

  const handleCreateFood = async () => {
    if (Object.values(inputValues).some(value => value === '')) {
      Alert.alert('Cuidado', 'Preencha todos os campos')
      return
    }
    const newData: CreateFood = {
      date: inputValues.date,
      hour: inputValues.hour,
      name: inputValues.name,
      description: inputValues.description,
      isDiet: isDiet
    }

    try {
      await createFood(newData)
      isDiet ? navigate('positiveFeedback') : navigate('negativeFeedback');
    } catch (error) {
      console.log(error);
    }
  }

  const handleUpdateFood = async () => {
    if (Object.values(inputValues).some(value => value === '')) {
      Alert.alert('Cuidado', 'Preencha todos os campos')
      return
    }
    const newData: CreateFood = {
      date: inputValues.date,
      hour: inputValues.hour,
      name: inputValues.name,
      description: inputValues.description,
      isDiet: isDiet
    }

    const oldData: UpdateFood = {
      date: date,
      hour: hour,
      name: name,
      description: description,
      isDiet: isDiet
    }

    try {
      await updateFood(newData, oldData)
      navigate('foodDetail', { food: { ...inputValues, isDiet } })
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(useCallback(() => {
    setInputValues({
      date,
      hour,
      name,
      description,
    })
    setIsDiet(isDiets)
  }, []));

  return (
    <Container>
      <Header title={name ? 'Editar refeição' : 'Nova refeição'} goBack={() => !name ? navigate('home') : navigate('foodDetail', { food: { ...inputValues, isDiet } })} />
      <Form>
        <InputContainer
          label='Nome'
          value={inputValues.name}
          onChangeText={(e) => handleInputChange('name', e)}
        />
        <InputContainer
          label='Descrição'
          value={inputValues.description}
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
        <Button variant='contained' type='FULL' title={name ? 'Salvar alterações' : 'Cadastrar Refeição'} onPress={name ? handleUpdateFood : handleCreateFood} />
      </ButtonContainer>
    </Container>
  )
}