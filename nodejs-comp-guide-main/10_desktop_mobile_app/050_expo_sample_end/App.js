import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  const plus = () => setCount(count + 1);
  const minus = () => setCount(count - 1);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>カウントアプリ</Text>
      <Text style={styles.count}>{count}</Text>
      <Text style={styles.plus} onPress={plus}>+</Text>
      <Text style={styles.minus} onPress={minus}>-</Text>
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
  title: {
    fontSize: 30,
  },
  count: {
    fontSize: 30,
  },
  plus: {
    fontSize: 30,
  },
  minus: {
    fontSize: 30,
  },
});
