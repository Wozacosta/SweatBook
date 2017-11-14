import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export const Welcome = (props) => (
  <View style={{ flex: 1 }}>
    <View style={styles.titleContainer}>
      <Text style={styles.title}>Sweatbook</Text>
    </View>
    <View style={styles.lastWorkoutContainer}>
      <Text style={styles.lastWorkoutTitle}>Log your fitness</Text>
    </View>
    <View style={{ padding: 30 }}>
      <TouchableOpacity onPress={props.startWorkout} style={styles.button}>
        <Text>Start Workout</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.2,
  },
  title: {
    fontSize: 48,
    fontWeight: '500',
    color: 'blue',
    textAlign: 'center',
  },
  lastWorkoutContainer: {
    flex: 0.3,
  },
  lastWorkoutTitle: {
    fontSize: 30,
    fontWeight: '100',
    color: 'blue',
  },
  button: {
    borderColor: '#EADCDC',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#EADCDC',
  },
});
