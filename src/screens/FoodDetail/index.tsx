import React from 'react'
import { View, Text } from 'react-native'
import { ButtonContainer, Clip, ClipText, Container, Content, Label, Title } from './styles'
import Header from '@components/Header'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { Dot } from '@screens/NewFood/styles'
import Button from '@components/Button'
import Edit from '@icons/Edit'
import Trash from '@icons/Trash'
import ModalCustom from '@components/Modal'

export default function FoodDetail() {
  const { navigate } = useNavigation();
  const { COLORS: { GREEN_DARK, RED_DARK } } = useTheme();
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <Container>
      <Header type="INSIDE" title='Refeição' goBack={() => navigate('home')} />
      <Content>
        <View>
          <Title>Sanduíche</Title>
          <Text>Sanduíche de pão integral com atum e salada de alface e tomate</Text>
        </View>
        <View>
          <Label>Data e hora</Label>
          <Text>12/08/2022 às 16:00</Text>
        </View>
        <Clip>
          <Dot color={GREEN_DARK} /><ClipText>dentro da dieta</ClipText>
        </Clip>
      </Content>
      <ButtonContainer>
        <Button title='Editar refeição' type='FULL' variant='contained' icon={<Edit />} />
        <Button title='Excluir refeição' type='FULL' variant='outlined' icon={<Trash />} onPress={() => setModalVisible(true)} />
      </ButtonContainer>
      <ModalCustom visible={modalVisible} setVisibility={setModalVisible} />
    </Container>
  )
}