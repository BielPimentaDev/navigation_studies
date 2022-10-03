import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Inicial from '../screens/Inicial';

import ScreenA from '../screens/ScreenA';
import ScreenB from '../screens/ScreenB';
import ScreenC from '../screens/ScreenC';
import ScreenD from '../screens/ScreenD';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator()

export default function StackCtoD(){
    return (

      <Stack.Navigator>
          <Stack.Screen
          name = 'ScreenC'
          component={ScreenC}
          />
          <Stack.Screen
          name = 'ScreenD'
          component={ScreenD}
          />

    </Stack.Navigator>
      )


}