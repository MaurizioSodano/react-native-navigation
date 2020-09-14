import React  from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import  {RootStackParamList} from "../App";

type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Home'
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
export default function LandingScreen({ navigation }:Props)  {
  console.log(navigation);
  return (
    <View style={styles.container}>
      <Text>Public Landing Screen</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
};
