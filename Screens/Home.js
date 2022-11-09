import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import data from "../data.js";

const Item = ({name, ingredients,instruction,rate}) => (
  <View style={styles.item}>
    <Text >{name}</Text>
    <Text >{ingredients}</Text>
    <Text >{instruction}</Text>
    <Text >{rate}</Text>

  </View>
);


const HomeScreen = ({navigation}) => {
  const {navigate} = navigation;

  //const navigation = useNavigation();

 
  return (
    <View >
        {data.map(data => {
          
          return (
            <TouchableOpacity key={data.id}
            onPress={() => {
              navigate('Recipe', {item: data});
              
            }}>
            <View >
              <Text>{data.name}</Text>
            </View>
          </TouchableOpacity>
          )
        })}
         <Button
      title="Add "
      onPress={() =>
        navigation.navigate('AddRecipe', {item: data,key: data.id})
      }
    />
    <Button
      title="Recipe"
      onPress={() =>
        navigation.navigate('Recipe', {item: data})
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
