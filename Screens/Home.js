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
         
         
   
    
    </View>
    </ScrollView>
    <TouchableOpacity
          activeOpacity={0.7}
          onPress={() =>
            navigation.navigate('AddRecipe', {item: data,key: data.id})}
          style={styles.touchableOpacityStyle}>
          <Image source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
            }}
            style={styles.floatingButtonStyle}
          />
        </TouchableOpacity>
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

  text:{
    
    fontSize:15,
    fontWeight:"bold",
    flexWrap:"wrap",
    flexDirection:"row"
  },
  rating:{
    flexDirection:"row",
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 3,
    bottom: 100,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
});

export default HomeScreen;
