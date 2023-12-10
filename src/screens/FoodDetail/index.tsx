import React from 'react'
import { View, Text } from 'react-native'
import { ButtonContainer, Clip, ClipText, Container, Content, Label, Title } from './styles'
import Header from '@components/Header'
import { useNavigation, useRoute } from '@react-navigation/native'
import { useTheme } from 'styled-components/native'
import { Dot } from '@screens/NewFood/styles'
import Button from '@components/Button'
import Edit from '@icons/Edit'
import Trash from '@icons/Trash'
import ModalCustom from '@components/Modal'
import { deleteFood } from '@storage/food/deleteFood'

type RouteParams = {
  food: {
    name: string;
    hour: string;
    isDiet: boolean;
    date: string;
    description: string;
  };
}

export default function FoodDetail() {
  const { navigate } = useNavigation();
  const { COLORS: { GREEN_DARK, RED_DARK } } = useTheme();
  const [modalVisible, setModalVisible] = React.useState(false);
  const { params } = useRoute()
  const { food: { description, hour, isDiet, name, date } } = params as RouteParams

  const handleDelete = async () => {
    try {
      await deleteFood({ date, description, hour, isDiet, name })
      navigate('home')
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Container>
      <Header type="INSIDE" title='Refeição' goBack={() => navigate('home')} />
      <Content>
        <View>
          <Title>{name}</Title>
          <Text>{description}</Text>
        </View>
        <View>
          <Label>Data e hora</Label>
          <Text>{date} às {hour}</Text>
        </View>
        <Clip>
          <Dot color={isDiet ? GREEN_DARK : RED_DARK} /><ClipText>{isDiet ? 'dentro da dieta' : 'fora da dieta'}</ClipText>
        </Clip>
      </Content>
      <ButtonContainer>
        <Button title='Editar refeição' type='FULL' variant='contained' icon={<Edit />} />
        <Button title='Excluir refeição' type='FULL' variant='outlined' icon={<Trash />} onPress={() => setModalVisible(true)} />
      </ButtonContainer>
      <ModalCustom visible={modalVisible} setVisibility={setModalVisible} onDelete={handleDelete} />
    </Container>
  )
}