import {StyleSheet, Dimensions} from 'react-native';

// screen sizing
const {width, height} = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const recipeNumColums = 2;
// item size
const RECIPE_ITEM_HEIGHT = 150;
const RECIPE_ITEM_MARGIN = 20;

// 2 photos per width
export const RecipeCard = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: RECIPE_ITEM_MARGIN,
    marginTop: 10,
    width: 170,
    height: RECIPE_ITEM_HEIGHT + 50,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 15,
    shadowColor: 'rgba(0,0,0, .4)', // IOS
    shadowOffset: {height: 1, width: 1}, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    backgroundColor: '#fff',
    elevation: 2, // Android
    fontFamily: 'VarelaRound-regular',

  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
  fullw: {
    width: width,
  },
  photo: {
    width:
      (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) /
      recipeNumColums,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  title: {
    flex: 1,
    fontSize: 17,
    fontWeight: 'normal',
    textAlign: 'center',
    color: '#444444',
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
    fontFamily: 'VarelaRound-regular',

  },
  category: {
    marginTop: 5,
    marginBottom: 5,
  },
  head: {
    fontSize: 40,
    fontWeight: 'normal',
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    fontFamily: 'VarelaRound-regular',
  },
  rate:{
  },
});
