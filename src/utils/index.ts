import { FoodProps } from '@storage/food/createFood';

export type TypeMask = 'time' | 'date';

export function mask(type: TypeMask, value: any) {
  switch (type) {
    case 'date':
      value = value.replace(/\D/g, ''); // Permite apenas dígitos
      value = value.replace(/^(\d{4})/g, '$1/'); // Coloca uma barra depois de 4 caracteres
      value = value.replace(/^(\d{2})/g, '$1/'); // Coloca uma barra depois de 2 caracteres
      value = value.replace(/\/$/, ''); // Remove o barra se estiver sobrando
      return value.substring(0, 10); // Limita o tamanho
    case 'time':
      value = value.replace(/\D/g, ''); // Permite apenas dígitos
      value = value.replace(/^(\d{2})/g, '$1:'); // Coloca dois pontos depois de 2 caracteres
      value = value.replace(/\:$/, ''); // Remove dois pontos se estiver sobrando
      return value.substring(0, 5); // Limita o tamanho
    default:
      return '';
  }
}

export const calculateIsDiet = (data: FoodProps[]) => {
  let totalComidas = 0;
  let comidasDiet = 0;

  data.forEach((entry) => {
    entry.foodDetail.forEach((comida) => {
      totalComidas++;
      if (comida.isDiet) {
        comidasDiet++;
      }
    });
  });

  const percent = (comidasDiet / totalComidas) * 100;
  return percent === 100 ? percent : percent.toFixed(2);
};

export const maxDietTrue = (data: FoodProps[]) => {
  let sequencias = 0;
  let sequenciaAtual = 0;

  data.forEach((entry) => {
    entry.foodDetail.forEach((comida) => {
      if (comida.isDiet) {
        sequenciaAtual++;
      } else {
        sequenciaAtual = 0;
      }

      sequencias = Math.max(sequencias, sequenciaAtual);
    });
  });

  return sequencias;
};

export const sumFoods = (data: FoodProps[]) => {
  let maximoItens = 0;

  data.forEach((entry) => {
    maximoItens += entry.foodDetail.length;
  });

  return maximoItens;
};

export const sumDietTrue = (data: FoodProps[]) => {
  let dietTrue = 0;

  data.forEach((entry) => {
    entry.foodDetail.forEach((comida) => {
      if (comida.isDiet) {
        dietTrue++;
      }
    });
  });

  return dietTrue;
};

export const sumDietFalse = (data: FoodProps[]) => {
  let dietFalse = 0;

  data.forEach((entry) => {
    entry.foodDetail.forEach((comida) => {
      if (!comida.isDiet) {
        dietFalse++;
      }
    });
  });

  return dietFalse;
};
