import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function ScreenB() {
  return (
    <View style={styles.container}>
      <Text style={{color: '#fff', fontSize: 20}}>Tela B</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3764f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
