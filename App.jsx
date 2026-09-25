import { StatusBar, View, Text, StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./SRC/components/Header";
import WaterProgress from "./SRC/components/WaterProgress";
import ActionButtons from "./SRC/components/ActionButtons";



export default function App() {
  const GOAL = 2000


  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <StatusBar barStyle={'auto'}  />
        <View>

          <Header goal={GOAL}/>
          <WaterProgress wt_day={1500} goal={GOAL}/>
          <ActionButtons/>

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}


