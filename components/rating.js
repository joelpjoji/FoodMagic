import { Text, View, StyleSheet } from "react-native"


export default function Rating(props){
    const { rate } = props;
    

    const style = StyleSheet.create({
        rating : {
            flexDirection:"row",
        }
    })

    return <View style={ style.rating }>
        {
            Array(rate).fill("").map((item, index)=>{
                return <Text key={index}>⭐️</Text>;
            })
        }
    </View>

}