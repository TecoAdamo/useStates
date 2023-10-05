import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [count, setCount] = useState(0);

  const CountNumbers = () => {
    setCount(count + 1)
  }

  const CleanNumber = () => {
    setCount(0)
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewBtn}>
        <TouchableOpacity onPress={CountNumbers}>
          <Text style={{ color: 'white', textAlign: 'center' }}>Press me {count}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewBtnClean}>
        <TouchableOpacity
        onPress={CleanNumber}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>Press for to clean!</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewBtn: {
    backgroundColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: 150,
    margin: 0,
  },
  viewBtnClean: {
    backgroundColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: 150,
    margin: 0,
    top: 10
  }
});
