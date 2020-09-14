import React  from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

//Adding types to Props
import  {RootStackParamList} from "../App";

type LandingScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Landing"
>;

type Props = {
  navigation: LandingScreenNavigationProp;
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
export default function LandingScreen({ navigation }:Props)  {

  return (
    <View style={styles.container}>
      <Text>Public Landing Screen</Text>
      <Button
        title="Go to Sign In"
        onPress={() => navigation.navigate("Sign In")}
      />
    </View>
  );
};
