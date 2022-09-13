import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button title='send 1'/>
      <Button title='send 2'/>
      <Button title='send 3'/>

      <StatusBar style="auto" />
    </View>
  );
}

interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <TouchableOpacity>
      <Text style={styles.text}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f92',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22,
  }
});
