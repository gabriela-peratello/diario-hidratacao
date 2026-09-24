import { StatusBar, View, Text, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./SRC/components/Header";
import WaterProgress from "./SRC/components/WaterProgress";



export default function App() {
  const GOAL = 2000


  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar barStyle={'auto'}  />
        <View>

          <Header goal={GOAL}/>
          <WaterProgress wt_day={200} goal={GOAL}/>

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}


