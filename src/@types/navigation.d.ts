import { FoodProps } from '@storage/food/createFood';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      newFood: undefined;
      resume: undefined;
      positiveFeedback: undefined;
      negativeFeedback: undefined;
      foodDetail: {
        food: {};
      };
    }
  }
}
