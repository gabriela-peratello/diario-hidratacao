import { View, Text, StyleSheet, Pressable } from "react-native";
import { COLORS } from "../constants/colors";

export default function ActionButtons() {
    const onPressFunction = () => {
        console.log("testando");
    };

    return (
        <View>
            <Text>Adicionar Consumo:</Text>

            <View>
                <Pressable onPress={onPressFunction}> <Text>+200</Text>
                </Pressable>

                <Pressable onPress={onPressFunction}> <Text>+350</Text>
                </Pressable>

                <Pressable onPress={onPressFunction}> <Text>+500</Text>
                </Pressable>


                <View>
                    <Pressable onPress={onPressFunction}> <Text>Reiniciar Dia</Text>
                    </Pressable>
                </View>


            </View>

        </View>
    )
}
