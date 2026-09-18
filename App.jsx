
import Header from "./SRC/components/Header";
import ActionButtons from "./SRC/components/ActionButtons";
import WaterProgress from "./SRC/components/WaterProgress";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import { View } from "react-native/types_generated/index";


export default function App() {
  const GOAL = 2000; //meta diaria de ml
  const [consumed, setConsumed] = useState = (0);

  // função para acumular a quantidade ingerida
  const handleAddWater = (amount) => {
  };

  // função para zerar o contador
  const handleReset = () => {};

  return (
    <SafeAreaProvider>
      <SafeAreaView>

        <statusbar barStyle="dark-container" backgroundColor={getColorScheme.background}/>

        <View style={StyleSheet.container}>
        </View>

        <Header/>
        <ActionButtons/>
        <WaterProgress/>

      </SafeAreaView>
    </SafeAreaProvider>
  );

  const styles = StyleSheet.create({})
}

