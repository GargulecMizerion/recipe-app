import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import LoginScreen from "@/app/screens/LoginScreen";
import RegisterScreen from "@/app/screens/RegisterScreen";
import ReceipesScreen from "@/app/screens/ReceipesScreen";
import HomeScreen from "@/app/screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (

          <Stack.Navigator>
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
          </Stack.Navigator>

  );
}
