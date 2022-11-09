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


const RecipeScreen = props => {
  const {route} = props;
  const {params} = route;
  const {item} = params;
  const {name, ingredients,instruction,rate, image} = item;

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View >
      <Image source={{uri: item.image}} style={{width: 200, height: 200}} />

        <Text >{name}</Text>
      </View>
      <View>
        <Text >{ingredients}</Text>
      </View>
      <View >
        <Text >{instruction}</Text>
      </View>
      <View>
        <Text >{rate}</Text>
      </View>
      <Button
      title="Home "
      onPress={() =>
        navigation.navigate('Home', { name: 'Jane' })
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

export default RecipeScreen;
