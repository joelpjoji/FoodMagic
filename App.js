import * as React  from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {useEffect} from 'react';
import { LogBox } from 'react-native';

import HomeScreen from './Screens/Home';
import AddRecipeScreen from './Screens/AddRecipe';
import RecipeScreen from './Screens/Recipe';
import SplashScreen from "react-native-splash-screen"; //import SplashScreen

LogBox.ignoreLogs(['Warning: ...']);
LogBox.ignoreAllLogs();
const Stack = createNativeStackNavigator();

const App = () => {

  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);


  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddRecipe" component={AddRecipeScreen} />
        <Stack.Screen name="Recipe" component={RecipeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
