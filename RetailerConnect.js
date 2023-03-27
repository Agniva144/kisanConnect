import React from 'react';
import Farmer from './Farmer';
import Farmer_account from './Farmer_account';
import Farmer_Reg from './Farmer_Reg';
import LoginFarmer from './LoginFarmer';
import Welcome from './Welcome';
import RetailerLogin from './RetailerLogin';
import RetReg from './RetReg';
import Retailer_home from './Retailer_home';
import Retailer_demand from './Retailer_demand';
import Retailer_checkout from './Retailer_checkout';
import Retailer_account from './Retailer_account';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Auction from './Auction';
import Payment from './Payment';
const Stack = createStackNavigator();

export default FarmerConnect = () => {
    return(
        
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Retailer Home" component={Retailer_home} options={{ headerShown: false }}/>
            <Stack.Screen name="auction" component={Auction} options={{ headerShown: false }}/>
            <Stack.Screen name="Enlist Your Demand" component={Retailer_demand} options={{ headerShown: false }}/>
            <Stack.Screen name="Checkout items" component={Retailer_checkout} options={{ headerShown: false }}/>
            <Stack.Screen name="Retailer Profile" component={Retailer_account}/>
            <Stack.Screen name="Payment methods" options={{ headerShown: false }} component={Payment}/>
        </Stack.Navigator>
        </NavigationContainer>
        
    )
}
