
import {NavigationContainer} from '@react-navigation/native'
import BottomTab from './BottomTab'
import StackRoute from './StackRoutes'



export default function Routes(){
    return (
        <NavigationContainer>
        <StackRoute/>
        {/* <BottomTab/> */}
        </NavigationContainer>
        )
}