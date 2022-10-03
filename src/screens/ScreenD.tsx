import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function ScreenD() {
  return (
    <View style={styles.container}>
      <Text style={{color: '#fff', fontSize: 20}}>ULTIMA TELA</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8a437',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
