// import {createDrawerNavigator} from '@react-navigation/drawer';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {NavigationContainer} from '@react-navigation/native';
import {Button} from 'react-native';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
// import {createDrawerNavigator} from '@react-navigation/drawer';

const DrawerNavigator = () => {
  const RightDrawer = createDrawerNavigator();

  return (
    <RightDrawer.Navigator
      id="RightDrawer"
      drawerContent={(props) => <SignUp />}
      screenOptions={{
        drawerPosition: 'right',
        headerShown: false,
      }}>
      <RightDrawer.Screen name="HomeDrawer" component={LeftDrawerScreen} />
    </RightDrawer.Navigator>
  );
};



function LeftDrawerScreen() {
  const LeftDrawer = createDrawerNavigator();
  return (
    <LeftDrawer.Navigator
      id="LeftDrawer"
      screenOptions={{ drawerPosition: 'left' }}>
      <LeftDrawer.Screen name="Home" component={HomeScreen} />
    </LeftDrawer.Navigator>
  );
}


export default function DrwersSreens() {
  return (
    <NavigationContainer independent={true}>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.getParent('LeftDrawer').openDrawer()}
        title="Open left drawer"
      />
      <Button
        onPress={() => navigation.getParent('RightDrawer').openDrawer()}
        title="Open right drawer"
      />
    </View>
  );
}
