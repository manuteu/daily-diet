import React, { useCallback, useState } from 'react'
import { Avatar, Container, Header, Text } from './styles'
import PercentCard from '@components/PercentCard'
import Logo from '@icons/Logo'
import AvatarPng from '@assets/avatar.png'
import Button from '@components/Button'
import DailyFoods from '@components/DailyFoods'
import Plus from '@icons/Plus'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { getAllFoods } from '@storage/food/getAllFoods'
import { FoodProps } from '@storage/food/createFood'
import { Alert, FlatList } from 'react-native'
import Loading from '@components/Loading'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [foods, setFoods] = useState<FoodProps[]>([])
  const { navigate } = useNavigation()

  const fetchFoods = async () => {
    setIsLoading(true)
    try {
      const data = await getAllFoods()
      setFoods(data)

    } catch (error) {
      console.error(error);
      Alert.alert('Turmas', 'Não foi possível carregar as turmas')
    } finally {
      setIsLoading(false)
    }
  }

  useFocusEffect(useCallback(() => {
    fetchFoods()
  }, []));

  return (
    <Container>
      <Header>
        <Logo />
        <Avatar source={AvatarPng} />
      </Header>
      <PercentCard />
      <Text>Refeições</Text>
      <Button title='Nova Refeição' type='FULL' variant='contained' icon={<Plus />} onPress={() => navigate('newFood', { food: {} })} />
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={foods}
          keyExtractor={(item) => item.date}
          renderItem={({ item, index }) => (
            <DailyFoods key={index} {...item} />
          )}
          ListEmptyComponent={
            <Text
              style={{ textAlign: 'center', marginTop: 24 }}
            >
              Você não possui refeições cadastradas
            </Text>
          }
          showsVerticalScrollIndicator={false}
          fadingEdgeLength={300}
          style={{ marginBottom: 24 }}
        />
      )}
    </Container>
  )
}