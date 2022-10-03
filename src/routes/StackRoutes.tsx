import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicial from '../screens/Inicial';

import ScreenA from '../screens/ScreenA';
import ScreenB from '../screens/ScreenB';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator()

export default function StackRoute(){
    return (

      <Stack.Navigator>
          <Stack.Screen
          name = 'Home'
          component={Inicial}
          />
          <Stack.Screen
          name = 'tab'
          component={BottomTab}
          
          />

    </Stack.Navigator>
      )


}