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
import Rating from '../components/rating.js';


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
      <View>
        <Text>Food Magic</Text>
      </View>
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

              <Text style={styles.text}>{data.name}</Text>
              <View style={ styles.rating }>
        {
            Array(data.rate).fill("").map((item, index)=>{
                return <Text key={index}>⭐️</Text>;
            })
        }
    </View>
            </View>
          </TouchableOpacity>
         
          )
        })}
         
         <View style={styles.button}>
         <View style={styles.AddrecipeButton}>
    <Button
      title="Add Recipe"
      onPress={() =>
        navigation.navigate('AddRecipe', {item: data,key: data.id})
      }
    />
     </View>
     <View style={styles.recipeButton}>
     <Button
      title="Recipe"
      onPress={() =>
        navigation.navigate('Recipe', {item: data,key:data.id})
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
    borderRadius:25,
  },
  AddrecipeButton:{
    position:"relative",
    borderWidth:1,
    borderColor:"#000",
    height:75,
    width:100,
    borderRadius:30,
    
    
    backgroundColor:"#ECCEE1",

    
  },
  recipeButton:{
    position:"relative",
    borderWidth:1,
    borderColor:"#000",
    height:75,
    width:100,
    borderRadius:30,
    
    
    backgroundColor:"#ECCEE1",
    
    
    
  },
  button:{
    position:"relative",
    flexDirection:"row",
    justifyContent:"space-between"
    
  },
  text:{
    
    fontSize:15,
    fontWeight:"bold",
    flexWrap:"wrap",
    flexDirection:"row"
  },
  rating:{
    flexDirection:"row",
  }
});

export default HomeScreen;
