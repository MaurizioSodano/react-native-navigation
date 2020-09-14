import React from 'react';
import { View, Text, StyleSheet,Button, NativeSyntheticEvent,NativeTouchEvent } from 'react-native';

//Adding types to Props
import { StackNavigationProp } from '@react-navigation/stack';
import  {RootStackParamList} from "../App";

type SignInScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Sign In"
>;

type Props = {
  onSignIn:  (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 
export default function SignInScreen ({onSignIn}:Props)  {
  return (
    <View style={styles.container}>
       <Text>Public Sign In Screen</Text>
       <Button title="Sign In" onPress={onSignIn} />
    </View>
  );
};
