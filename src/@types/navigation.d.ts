import { FoodProps } from '@storage/food/createFood';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      newFood: {
        food: {};
      };
      resume: {
        food: FoodProps[];
      };
      positiveFeedback: undefined;
      negativeFeedback: undefined;
      foodDetail: {
        food: {};
      };
    }
  }
}
