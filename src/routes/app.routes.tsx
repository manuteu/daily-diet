import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "@screens/Home";
import NewFood from "@screens/NewFood";
import Resume from "@screens/Resume";
import PositiveFeedback from "@screens/PositiveFeedback";
import NegativeFeedback from "@screens/NegativeFeedback";
import FoodDetail from "@screens/FoodDetail";

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="newFood" component={NewFood} />
      <Screen name="resume" component={Resume} />
      <Screen name="positiveFeedback" component={PositiveFeedback} />
      <Screen name="negativeFeedback" component={NegativeFeedback} />
      <Screen name="foodDetail" component={FoodDetail} />
    </Navigator>
  );
}