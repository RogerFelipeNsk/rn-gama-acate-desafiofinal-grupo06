import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../views/Home";

const { Navigator, Screen } = createNativeStackNavigator();

function LoginStack() {
  return (
    <Navigator>

      <Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false }}
      />

    </Navigator>
  );
}

export default LoginStack;
