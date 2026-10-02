import { StatusBar, View, Text, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "./SRC/constants/colors";
import Header from "./SRC/components/Header";
import WaterProgress from "./SRC/components/WaterProgress";
import ActionButtons from "./SRC/components/ActionButtons";
import { useState } from "react";



export default function App() {
  const GOAL = 2000;
  const [consumed, setConsumed] =  useState(0);

  // função para acumuklar a quantidade de agua ingerida
  const handleAddWater = (ml) => {
    setConsumed((memoria) => memoria + ml);
  };

  const handleReset = () => {
    setConsumed(0);
  };


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'auto'} />


        <View style={styles.content}>

          <Header goal={GOAL}/>
          <WaterProgress consumed={consumed} goal={GOAL}/>
          <ActionButtons onAdd={handleAddWater} onReset={handleReset}/>

        </View>


      </SafeAreaView>
    </SafeAreaProvider>
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
});



