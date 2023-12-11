import AsyncStorage from '@react-native-async-storage/async-storage';
import { FOOD_COLLECTION } from '@storage/storageConfig';
import { getAllFoods } from './getAllFoods';
import { Alert } from 'react-native';
import { createFood } from './createFood';
import { deleteFood } from './deleteFood';

export interface FoodDetailProps {
  hour: string;
  name: string;
  description: string;
  isDiet: boolean;
}

export interface FoodProps {
  date: string;
  foodDetail: FoodDetailProps[];
}

export interface UpdateFood {
  date: string;
  hour: string;
  name: string;
  description: string;
  isDiet: boolean;
}

export async function updateFood(newData: UpdateFood, oldData: UpdateFood) {
  try {
    const getFoods = await getAllFoods();
    const newTrueData = {
      date: newData.date,
      foodDetail: [
        {
          hour: newData.hour,
          name: newData.name,
          description: newData.description,
          isDiet: newData.isDiet,
        },
      ],
    };
    const oldTrueData = {
      date: oldData.date,
      foodDetail: [
        {
          hour: oldData.hour,
          name: oldData.name,
          description: oldData.description,
          isDiet: oldData.isDiet,
        },
      ],
    };

    const filteredDate = getFoods.filter(
      (food) => food?.date === newTrueData?.date
    );

    // Cria uma nova data com a refeição
    if (filteredDate.length === 0) {
      await deleteFood(oldData)
      await createFood(newData);
      return;
    }

    // Altera os dados da refeição do mesmo dia (mesma data várias refeições)
    if (
      filteredDate[0].foodDetail.length > 1 &&
      oldTrueData.date === newTrueData.date
    ) {
      filteredDate.forEach(
        (food) =>
          (food.foodDetail = food.foodDetail.filter(
            (food) => food.name !== oldTrueData.foodDetail[0].name
          ))
      );
      filteredDate[0].foodDetail.push(newTrueData.foodDetail[0]);
      const storage = JSON.stringify(getFoods);
      await AsyncStorage.setItem(FOOD_COLLECTION, storage);
      return;
    }

    // Altera os dados da refeição do mesmo dia (mesma data uma refeição)
    if (
      filteredDate[0].foodDetail.length === 1 &&
      oldTrueData.date === newTrueData.date
    ) {
      filteredDate[0].foodDetail.shift();
      filteredDate[0].foodDetail.push(newTrueData.foodDetail[0]);
      const storage = JSON.stringify(getFoods);
      await AsyncStorage.setItem(FOOD_COLLECTION, storage);
      return;
    }

    // Adiciona em data diferente e remove da data anterior
    if (oldTrueData.date !== newTrueData.date) {
      await deleteFood(oldData)
      filteredDate[0].foodDetail.push(newTrueData.foodDetail[0]);
      
      const storage = JSON.stringify(getFoods);
      await AsyncStorage.setItem(FOOD_COLLECTION, storage);
      return;
    }

  } catch (error) {
    throw error;
  }
}
