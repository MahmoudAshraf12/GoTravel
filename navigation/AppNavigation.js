import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import ItemDetailsScreen from '../screens/ItemDetailsScreen';

const Stack = createNativeStackNavigator()
const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
                <Stack.Screen name="Discover" component={DiscoverScreen} options={{headerShown:false}}/>
                <Stack.Screen name="ItemDetails" component={ItemDetailsScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default AppNavigation;