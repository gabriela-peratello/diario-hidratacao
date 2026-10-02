import { StatusBar, View, Text, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { COLORS } from "./SRC/constants/colors";
import { useState } from "react";
import Header from "./SRC/components/Header";
import WaterProgress from "./SRC/components/WaterProgress";
import ActionButtons from "./SRC/components/ActionButtons";
import Mensagem from "./SRC/components/Mensagem";
import MetaDiaria from "./SRC/components/MetaDiaria";




export default function App() {

  const [consumed, setConsumed] = useState(0);
  const [meta, setMeta] = useState(500);

  // função para acumular a quantidade de agua ingerida
  const handleAddWater = (ml) => {
    setConsumed((memoria) => memoria + ml);
  };

  // somar na meta
  const handleAddWaterMeta = (ml) => {
    setMeta((memoria) => memoria + ml );
  };

  // tirar da meta
  const handleSubWater = (ml) => {
    setMeta((memoria) => (memoria - ml > 0 ? memoria - ml : 0)); 
  };

  // reinicia
  const handleReset = () => {
    setConsumed(0);
  };


  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'auto'} />


        <View style={styles.content}>

          <Header goal={meta} />
          <MetaDiaria consumed={consumed} goal={meta} onAdd={handleAddWaterMeta} onSub={handleSubWater} />
          <WaterProgress consumed={consumed} goal={meta} />
          <ActionButtons onAdd={handleAddWater} onReset={handleReset} />
          <Mensagem />


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



