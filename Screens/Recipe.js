import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Image,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Rating from '../components/rating';


const RecipeScreen = props => {
  const {route} = props;
  const {params} = route;
  const {item} = params;
  const {name, ingredients,instruction,rate, image} = item;

  const navigation = useNavigation();

  return (
    <SafeAreaView>
       <View style={styles.homebutton}>
          <Button
      title="Home "
      onPress={() =>
        navigation.navigate('Home', { name: 'Jane' })
      }
    /></View>
      <ScrollView>
       
      
      <View style={styles.container}>
     
      <View >
      <Image source={{uri: item.image}} style={styles.image} />

        <Text style={styles.heading}>{name}</Text>
      </View>
      <View>
        <Text style={styles.ingredientsHeading}>Ingredients</Text>
        <Text style={styles.ingredients} >{ingredients}</Text>
      </View>
      <View >
        <Text style={styles.instructionHeading}>Instruction</Text>
        <Text style={styles.instruction} >{instruction}</Text>
      </View>
      <View>
        <Text style={styles.ratingHeading}>Rating</Text>
        <View style={ styles.rating }>
        {
            Array(rate).fill("").map((item, index)=>{
                return <Text key={index}>⭐️</Text>;
            })
        }
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
  image:{
    height:200,
    width:"100%",

  },
 
  heading:{
    fontSize:30,
    fontWeight:"bold",
    color:"tomato",
    textAlign:"center",
  },
  ingredients:{
    fontSize:16,
    padding:10


  },
  ingredientsHeading:{

    fontSize:30,
    color:"blue",
    fontWeight:"bold",
    padding:10,

  },
  instructionHeading:{
    fontSize:30,
    fontWeight:"bold",
    color:"blue",
    padding:10,

  },
  instruction:{
    fontSize:16,
    padding:10,


  },
  ratingHeading:{
    fontSize:30,
    fontWeight:"bold",
    color:"blue",
    padding:10,

  },
  rating:{
    fontSize:16,
    padding:10,
    flexDirection:"row",

  },
  homebutton:{
    flexDirection:"row",

  }

});

export default RecipeScreen;
