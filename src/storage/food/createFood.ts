import AsyncStorage from '@react-native-async-storage/async-storage';
import { FOOD_COLLECTION } from '@storage/storageConfig';
import { getAllFoods } from './getAllFoods';
import { Alert } from 'react-native';

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

export interface CreateFood {
  date: string;
  hour: string;
  name: string;
  description: string;
  isDiet: boolean;
}

export async function createFood({
  date,
  description,
  hour,
  isDiet,
  name,
}: CreateFood) {
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

    if (getFoods.length === 0) {
      const storage = JSON.stringify(new Array(trueData));
      await AsyncStorage.setItem(FOOD_COLLECTION, storage);
      return;
    }

    const filteredDate = getFoods.filter(
      (food) => food?.date === trueData?.date
    );
    if (filteredDate.length === 1) {
      const alrearyExists = filteredDate[0].foodDetail.includes(
        trueData?.foodDetail[0]
      );
      if (alrearyExists) {
        return Alert.alert('Essa refeição já foi adicionada');
      }

      filteredDate[0]?.foodDetail.push(trueData.foodDetail[0]);
      const newFoodData = getFoods.filter(
        (food) => food?.date !== trueData.date
      );
      newFoodData.push(filteredDate[0]);

      if (getFoods.length === 1) {
        const storage = JSON.stringify(newFoodData);
        await AsyncStorage.setItem(FOOD_COLLECTION, storage);
        return;
      }
      const storage = JSON.stringify([...getFoods]);
      await AsyncStorage.setItem(FOOD_COLLECTION, storage);
    } else {
      getFoods.push(trueData);
      const storage = JSON.stringify([...getFoods]);
      await AsyncStorage.setItem(FOOD_COLLECTION, storage);
    }

    // await AsyncStorage.removeItem(FOOD_COLLECTION);
  } catch (error) {
    throw error;
  }
}
