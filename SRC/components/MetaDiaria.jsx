import { View, Text, StyleSheet, Pressable } from "react-native";
import { COLORS } from "../constants/colors";


export default function MetaDiaria({ onAdd, onSub, goal }) {

    return (

        <View style={styles.container}>
            <Text> Ajustar Meta diária:</Text>

            <View>
                {/* Subtrai 250 */}
                <Pressable onPress={() => onSub(250)} >
                    <Text> - 250</Text>
                </Pressable>

                <Text>{goal}ml</Text>

                {/* Adiciona 250 */}
                <Pressable onPress={() => onAdd(250)} >
                    <Text> + 250</Text>
                </Pressable>



            </View>

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
    container: {
        width: '100%',
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.textMain,
        marginBottom: 12,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 8,
        marginBottom: 16,
    },
    button: {
        flex: 1,
        backgroundColor: COLORS.primary,
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 14,
    },
    resetButton: {
        backgroundColor: COLORS.danger,
        borderWidth: 1,
        borderColor: COLORS.danger,
        paddingVertical: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    resetButtonText: {
        color: COLORS.cardBg,
        fontWeight: '600',
        fontSize: 13,
    },
});