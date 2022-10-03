import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import {useNavigation} from '@react-navigation/native'

export default function Inicial() {
  const navigation = useNavigation();

  const changeScreen = () =>{
    navigation.navigate('tab')
  }

  return (
    <View style={styles.container}>
      <Text style={{color: '#000000', fontSize: 20}}>Tela inicial</Text>
      <StatusBar style="auto" />
      <Button title='IR PARA A TELA A' onPress={changeScreen}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
