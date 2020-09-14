import React from 'react';
import { View, Text, StyleSheet,Button, NativeSyntheticEvent,NativeTouchEvent } from 'react-native';

//Adding types to Props
import { StackNavigationProp } from '@react-navigation/stack';
import  {RootStackParamList} from "../App";

type SignUpScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Sign Up"
>;

type Props = {
  onSignUp:  (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
export default function SignUpScreen ({onSignUp}:Props)  {
  return (
    <View style={styles.container}>
       <Text>Public Sign Up Screen</Text>
       <Button title="Sign Up" onPress={onSignUp} />
    </View>
  );
};
