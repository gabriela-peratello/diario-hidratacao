import { View, Text, StyleSheet } from "react-native";
import { COLORS } from "../constants/colors";


export default function Mensagem() {

    return (
        <View style={styles.container}>

            <Text style={styles.title}> Dica de Saúde</Text>
            <Text style={styles.subtitle}> Beber água regularmente melhora a concentração,
                a digestão e mantém sua energia alta ao longo do dia! </Text>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 24,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: COLORS.textMain,
    },
    subtitle: {
        fontSize: 14,
        color: COLORS.textMuted,
        marginTop: 4,
    },
});