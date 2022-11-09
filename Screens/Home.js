import React from 'react';
import {
  SafeAreaView,
  Image,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import data from "../data.js";
import SliderBox from "react-native-image-slider-box";


const Item = ({name, ingredients,instruction,rate, image}) => (
  <View style={styles.item}>
    <Image source={image} />
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
            //<Image source={{uri: data.image}} style={{width: 200, height: 200}} />

            <SliderBox images={data.image} />

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
  carouselItem: {
 

    // position: 'absolute',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
  },
});

export default HomeScreen;
