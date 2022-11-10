import React from 'react';
import {
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  Button,
  View,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import data from "../data.js";


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
    <SafeAreaView>
    <ScrollView>
    <View style={styles.home} >
        {data.map(data => {
          
          return (
            <TouchableOpacity key={data.id}
            onPress={() => {
              navigate('Recipe', {item: data});
              
            }}>
            <View >
            <Image source={{uri: data.image}} style={styles.image} />

              <Text>{data.name}</Text>
            </View>
          </TouchableOpacity>
          )
        })}
         
         <View style={styles.button}>
         <View style={styles.recipeButton}>
    <Button
      title="Add "
      onPress={() =>
        navigation.navigate('AddRecipe', {item: data,key: data.id})
      }
    />
     </View>
     <View style={styles.recipeButton}>
     <Button
      title="Recipe"
      onPress={() =>
        navigation.navigate('Recipe', {item: data})
      }
    />
     </View>
         </View>
   
    
    </View>
    </ScrollView>
    </SafeAreaView>
  );
 };

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  home:{
    flexDirection:"row",
    flexWrap:"wrap",
    justifyContent:"space-around",
    

  },
  image:{
    height:175,
    width:175,
    borderColor:"#000",
    borderWidth:1,
  },
  AddrecipeButton:{
    position:"relative",
    borderWidth:1,
    borderColor:"#000",
    width:30,
    height:30,
    borderRadius:30,

    
  },
  recipeButton:{
    position:"relative",
    borderWidth:1,
    borderColor:"#000",
  },
  button:{
    borderwidth:1,
    borderColor:"#000",
    
  }
});

export default HomeScreen;
