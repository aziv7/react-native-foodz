import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
export default function App() {
  return (
    <TailwindProvider>
      <View style={styles.container}>
        <Text className='text-red-400'>Open up App.js to start app!</Text>
        <StatusBar style='auto' />
      </View>
    </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
