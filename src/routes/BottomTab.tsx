import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inicial from '../screens/Inicial';

import ScreenA from '../screens/ScreenA';
import ScreenB from '../screens/ScreenB';
import ScreenC from '../screens/ScreenC';
import StackCtoD from './StackCtoD';

const Stack = createBottomTabNavigator()

export default function BottomTab(){
    return (

      <Stack.Navigator>

          <Stack.Screen
          name = 'ScreenA'
          component={ScreenA}
          />
          <Stack.Screen
          name = 'ScreenB'
          component={ScreenB}
          />
          <Stack.Screen
          name = 'stackCtoD'
          component={StackCtoD}
          options={{headerShown: false}}
          
          />

      </Stack.Navigator>
      )


}