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



const AddRecipeScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView><View>
    <Text>AddRecipe Screen</Text>
    <Button
    title="Home "
    onPress={() =>
      navigation.navigate('Home', { name: 'Jane' })
    }
  />
  </View></ScrollView>
       
  </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default AddRecipeScreen;
