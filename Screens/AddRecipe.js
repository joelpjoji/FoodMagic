import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  View,
  TextInput
} from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';



const AddRecipeScreen = () => {
  const navigation = useNavigation();

  const[name, setName] = useState([]);
  const [instruction, setInstruction]=useState([]);
  const [ingredients, setIngredients] = useState([]);

    
   

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View>
       <Text>AddRecipe Screen</Text>

       <View>
          <Text style={styles.name}>Add Recipe</Text>
       </View>

       <View >
          <TextInput style={styles.innercontainer1}
           onChangeText={setName} value={name}
            placeholder='Recipe name' />
          <TextInput style={styles.innercontainer2}
           onChangeText={setInstruction} 
           value={instruction} 
           placeholder='Instruction' />
        </View>

        <Text style={styles.ingredname}>Ingredients</Text>

        
    <Button
    title="Submit"
    onPress={() =>
      navigation.navigate('Home',)
    }
  />
  </View></ScrollView>
       
  </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'flex-start',
    //justifyContent: 'flex-start',
    marginStart: 20,
    marginTop: 50,
    marginRight: 20,
  },
    header: {
        fontSize: 25,
        color: 'blue',
       
    },
    name: {
      fontSize: 20,
      color: 'black',
      marginTop: 20,
      marginBottom: 10,
      
    },
    innercontainer1:{
      padding: 10,
      borderColor: 'black',
      borderWidth: 1,
      padding: 5,   
    },
    innercontainer2:{
      padding: 10,
      borderColor: 'black',
      borderWidth: 1,
      marginTop: 10,
    },
    button:{
      marginTop: 200,
      
    },
    ingredname: {
      position: 'relative',
      fontSize: 20,
      color: 'black',
      marginTop: 20,
      marginBottom: 10,
      
    },
    ingredbutton: {
      position: 'absolute',
    },
    ingred: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'space-between'
    }


    
    
});

export default AddRecipeScreen;