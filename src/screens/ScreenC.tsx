import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Button} from 'react-native';
import {useNavigation} from '@react-navigation/native'

export default function ScreenC() {

  const navigation = useNavigation()
  const navigateToD = () =>{
    navigation.navigate('ScreenD')
  }
  return (
    <View style={styles.container}>
      <Text style={{color: '#fff', fontSize: 20}}>Tela C</Text>
      <StatusBar style="auto" />
      <Button title='to final screen' onPress={navigateToD}/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f837a8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
