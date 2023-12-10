import AsyncStorage from '@react-native-async-storage/async-storage';
import { FOOD_COLLECTION } from '@storage/storageConfig';
import { FoodProps } from './createFood';

export async function getAllFoods() {
  try {
    const storage = await AsyncStorage.getItem(FOOD_COLLECTION);

    const foods: FoodProps[] = storage ? JSON.parse(storage) : [];

    const toDate = (dataString: any) => {
      const partes = dataString?.split(/[\.\-\/]/);
      const formatoAnoPrimeiro = partes[0]?.length === 4;

      if (formatoAnoPrimeiro) {
        return new Date(partes[0], partes[1] - 1, partes[2]);
      } else {
        return new Date(partes[2], partes[1] - 1, partes[0]);
      }
    };

    // Função de comparação para ordenar as datas do dia mais recente para o mais antigo
    const compareDates = (a: FoodProps, b: FoodProps) => {
      const dataA = toDate(a?.date);
      const dataB = toDate(b?.date);

      return dataB?.valueOf() - dataA?.valueOf();
    };

    const sortedFoods = foods.sort(compareDates);

    return sortedFoods;
  } catch (error) {
    throw error;
  }
}
