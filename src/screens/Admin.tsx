import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"red"
  },
});
 
export default function AdminScreen ()  {
  return (
    <View style={styles.container}>
      <Text >Admin Screen</Text>
    </View>
  );
};
 
