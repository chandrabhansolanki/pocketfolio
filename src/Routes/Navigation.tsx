import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as routes from './routes';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import SplashScreen from '../Pages/SplashScreen/SplashScreen';
import ForgetPassword from '../Pages/ForgetPassword/ForgetPassword';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ProfileSideBar from '../Pages/Profile/ProfileSideBar';
import Header from '../components/Header/Header';
import HomeScreen from '../Pages/HomeScreen/HomeScreen';
import RightSideBar from '../Pages/Profile/RightSideBar'

const Navigation = () => {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  const LeftDrawer = createDrawerNavigator();

  const LeftDrawerScreen = () => {
    return (
      <LeftDrawer.Navigator
        screenOptions={{drawerPosition: 'left',drawerStyle: {width: '90%', backgroundColor:'#F5FAFFDE'}}}
        drawerContent={props => <ProfileSideBar {...props} />}
        id="LeftDrawer">
        <LeftDrawer.Screen
          name="hgf"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </LeftDrawer.Navigator>
    );
  };

  const DrawerStack = () => (
    <Drawer.Navigator
      id="RightDrawer"
      screenOptions={{
        drawerPosition: 'right',
        // headerShown: false,
      }}
      drawerContent={props => <RightSideBar {...props} />}
      >
      <Drawer.Screen
        name="LeftDrawer"
        component={LeftDrawerScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={routes.SPLASHSCREEN} component={SplashScreen} />
        <Stack.Screen name={routes.LOGIN} component={Login} />
        <Stack.Screen name={routes.SIGNUP} component={SignUp} />
        <Stack.Screen name={routes.FORGETPASSWORD} component={ForgetPassword} />
        <Stack.Screen name={routes.HOME} component={DrawerStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
