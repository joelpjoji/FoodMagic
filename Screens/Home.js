import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';





const HomeScreen = () => {

  const navigation = useNavigation();


  return (
    <View>
      <Text>Home Screen</Text>
      <Button
      title="Add "
      onPress={() =>
        navigation.navigate('AddRecipe', { name: 'Jane' })
      }
    />
    <Button
      title="Recipe"
      onPress={() =>
        navigation.navigate('Recipe', { name: 'Jane' })
      }
    />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default HomeScreen;
