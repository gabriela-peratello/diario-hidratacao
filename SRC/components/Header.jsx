import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";



export default function Header({goal}){

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Diário de Hidratação</Text>
            <Text style={styles.subtitle}>Meta Diária: {goal}ML</Text>
        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        alignItems:'center',
        marginBotom: 24,
    },
    title: {
        color: COLORS.textMain,
        fontSize: 22,
    },
    subtitle: {
        backgroundColor: COLORS.Background,
        color: COLORS.primary,
    },

})