import AsyncStorage from '@react-native-async-storage/async-storage';
import { FOOD_COLLECTION } from '@storage/storageConfig';
import { getAllFoods } from './getAllFoods';

export interface DeleteFood {
  date: string;
  hour: string;
  name: string;
  description: string;
  isDiet: boolean;
}

export async function deleteFood({
  date,
  description,
  hour,
  isDiet,
  name,
}: DeleteFood) {
  try {
    const getFoods = await getAllFoods();
    const trueData = {
      date,
      foodDetail: [
        {
          hour,
          name,
          description,
          isDiet,
        },
      ],
    };

    const filteredDate = getFoods.filter(
      (food) => food?.date === trueData?.date
    );

    // Remove o dia por conter apenas uma refeição
    if (filteredDate[0].foodDetail.length === 1) {
      const deletedFood = getFoods.filter(
        (food) => food.date !== trueData.date
      );
      const storage = JSON.stringify(deletedFood);
      await AsyncStorage.setItem(FOOD_COLLECTION, storage);
      return;
    }

    // Remove a refeição de um dia
    if (filteredDate[0].foodDetail.length > 1) {
      filteredDate.forEach(
        (food) =>
          (food.foodDetail = food.foodDetail.filter(
            (food) => food.name !== trueData.foodDetail[0].name
          ))
      );
      const storage = JSON.stringify(getFoods);
      await AsyncStorage.setItem(FOOD_COLLECTION, storage);
    }
  } catch (error) {
    throw error;
  }
}
