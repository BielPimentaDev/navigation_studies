import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {useNavigation} from '@react-navigation/native'

export default function ScreenA() {
  const navigation = useNavigation();

  const changeScreen = () =>{
    navigation.navigate('inicial')
  }

  return (
    <View style={styles.container}>
      <Text style={{color: '#fff', fontSize: 20}}>Tela A</Text>
      <StatusBar style="auto" />
      <Button title='IR PARA A TELA B' onPress={changeScreen}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#666666',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
