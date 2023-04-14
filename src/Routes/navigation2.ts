/ eslint-disable react/no-unstable-nested-components /
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import NavigationService from './NavigationService';
import * as routes from './routes';
import 'react-native-gesture-handler';
import SignIn from '../screens/signIn';
import SignUp from '../screens/signUp';
import ForgotPassword from '../screens/forgotPassword/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';
import WelcomeScreens from '../screens/welcomScreens';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Sliderbar from '../components/Sliderbar';
import DepositFunds from '../screens/depositFunds/index';
import CryptoIndex from '../screens/cryptoIndex';
import OnBoarding from '../screens/onBoarding';
import InternalTransaction from '../screens/internalTransaction';
import Withdraw from '../screens/withdraw';
import AuthLoading from '../screens/AuthLoading/index';
import OtpVerification from '../screens/OtpVerification';
import Loading from '../screens/Loading';
import UpdatePassword from '../screens/updatePassword';
import ChangePassword from '../screens/Profile/changePassword';
import News from '../screens/news&update/News&UpateScreen';
import DerivativeIndex from '../screens/derivativeIndex';
import CryptoIndexViewAll from '../screens/cryptoIndexViewAll';
import PersonalData from '../screens/Profile/PersonalData';
import ProfileSideBar from '../common/ProfileSideBar';
import HomeScreen from '../screens/Home/HomeScreen';
import Profile from '../screens/Profile/Profile';
import CryptoIndexPortfolioDetails from '../screens/cryptoIndexPortfolioDetails';
import DerivativeIndexViewAll from '../screens/derivativeIndexViewAll';
import Portfolio from '../screens/portfolio';
import Transaction from '../screens/transaction';
import Activity from '../userScreen/activity';

import DepositFundsNew from '../screens/DepositFundsNew';
import WithdrawFundsNew from '../screens/WithdrawFundsNew';
import InternalTransactionNew from '../screens/InternalTransactionNew';

import TicketList from '../userScreen/ticketList';
import AffiliateIndexBonus from '../screens/Bonus/affiliateIndexBonus';
import AccumulationBonus from '../screens/Bonus/accumulationBonus';
import TierIndexBonus from '../screens/Bonus/tierIndexBonus';
import FirstTierReport from '../screens/Genelogy/firstTierReport';
import AllTierReport from '../screens/Genelogy/allTierReport';
import TicketDetails from '../screens/ticketDetails/index';

const Navigator = () => {
  const Stack = createStackNavigator();
  const BottomTab = createBottomTabNavigator();
  const Drawer = createDrawerNavigator();
  const colors = useSelector(state => {
    return state.home.colors;
  });
  const MyAuthLoadingStack = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={routes.ONBOARDING_SCREEN} component={OnBoarding} />
      <Stack.Screen name={routes.SIGNIN_SCREEN} component={SignIn} />

      <Stack.Screen name={routes.FORGOT_PASSWORD} component={ForgotPassword} />
      <Stack.Screen name={routes.UPDATE_PASSWORD} component={UpdatePassword} />

      <Stack.Screen name={routes.SIGNUP_SCREEN} component={SignUp} />
      <Stack.Screen
        name={routes.OTP_VERIFICATION}
        component={OtpVerification}
      />
    </Stack.Navigator>
  );
  const RootStackScreen = () => (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={routes.LOADING_SCREENS} component={Loading} />
      <Stack.Screen name={routes.WELCOME_SCREENS} component={WelcomeScreens} />

      <Stack.Screen name={routes.AUTH_LOADING} component={AuthLoading} />

      <Stack.Screen
        name={routes.NAVIGATION_AUTH_LOADING_STACK}
        component={MyAuthLoadingStack}
      />
      <Stack.Screen
        name={routes.NAVIGATION_TAB_STACK}
        component={DrawerStack}
      />
    
    </Stack.Navigator>
  );

  const LeftDrawer = createDrawerNavigator();

  function LeftDrawerScreen() {
    return (
      <LeftDrawer.Navigator
        backBehavior="history"
        id="LeftDrawer"
        drawerContent={props => <ProfileSideBar {...props} />}
        screenOptions={{drawerPosition: 'left', drawerStyle: {width: 340}}}>
        <LeftDrawer.Screen
          name={routes.HOME_SCREEN}
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <LeftDrawer.Screen
          name={routes.CRYPTO_INDEX}
          component={CryptoIndex}
          options={{headerShown: false}}
        />
        <LeftDrawer.Screen
          name={routes.DERIVATIVE_INDEX}
          component={DerivativeIndex}
          options={{headerShown: false}}
        />
        <LeftDrawer.Screen
          name={routes.DEPOSIT_FUNDS}
          component={DepositFunds}
          options={{headerShown: false}}
        />
        <LeftDrawer.Screen
          name={routes.WITHDRAW_SCREEN}
          component={Withdraw}
          options={{headerShown: false}}
        />
        <LeftDrawer.Screen
          name={routes.INTERNAL_TRANSACTION}
          component={InternalTransaction}
          options={{headerShown: false}}
        />
        <LeftDrawer.Screen
          name={routes.NEWS_UPDATE}
          component={News}
          options={{headerShown: false}}
        />
        <LeftDrawer.Screen
          name={routes.CRYPTO_INDEX_VIEW_ALL}
          component={CryptoIndexViewAll}
          options={{headerShown: false}}
        />
        <LeftDrawer.Screen
          name={routes.PERSONAL_DATA}
          component={PersonalData}
          options={{headerShown: false}}
        />
        <LeftDrawer.Screen
          name={routes.PROFILE_SCREEN}
          component={Profile}
          options={{headerShown: false}}
        />
        <LeftDrawer.Screen
          name={routes.CRYPTO_INDEX_PORTFOLIO_DETAILS}
          component={CryptoIndexPortfolioDetails}
          options={{headerShown: false}}
        />
        <LeftDrawer.Screen
          name={routes.DERIVATIVE_INDEX_VIEW_ALL}
          component={DerivativeIndexViewAll}
          options={{headerShown: false}}
        />
        <LeftDrawer.Screen
          name={routes.PORTFOLIO_SCREEN}
          component={Portfolio}
          options={{headerShown: false}}
        />
        <LeftDrawer.Screen
          name={routes.TRANSACTION_SCREEN}
          component={Transaction}
          options={{headerShown: false}}
        />
        <LeftDrawer.Screen
          name={routes.ACITVITY_SCREEN}
          component={Activity}
          options={{headerShoDrawerStackwn: false}}
        />
        <LeftDrawer.Screen
          name={routes.DEPOSIT_FUNDS_NEW}
          component={DepositFundsNew}
          options={{headerShown: false}}
        />
        <LeftDrawer.Screen
          name={routes.WITHDRAW_FUNDS_NEW}
          component={WithdrawFundsNew}
          options={{headerShown: false}}
        />
        <LeftDrawer.Screen
          name={routes.INTERNAL_TRANSACTION_NEW}
          component={InternalTransactionNew}
          options={{headerShown: false}}
        />
        <LeftDrawer.Screen
          name={routes.TICKET_LIST}
          component={TicketList}
          options={{headerShown: false}}
        />
        <LeftDrawer.Screen
          name={routes.AFFILATION_INDEX_BONUS}
          component={AffiliateIndexBonus}
          options={{headerShown: false}}
        />
        <LeftDrawer.Screen
          name={routes.ACCUMULATION_BONUS}
          component={AccumulationBonus}
          options={{headerShown: false}}
        />
        <LeftDrawer.Screen
          name={routes.TIER_INDEX_BONUS}
          component={TierIndexBonus}
          options={{headerShown: false}}
        />
        <LeftDrawer.Screen
          name={routes.FIRST_TIER_REPORT}
          component={FirstTierReport}
          options={{headerShown: false}}
        />
        <LeftDrawer.Screen
          name={routes.ALL_TIER_REPORT}
          component={AllTierReport}
          options={{headerShown: false}}
        />
         <LeftDrawer.Screen
          name={routes.TICKET_DETAILS}
          component={TicketDetails}
          options={{headerShown: false}}
        />
      </LeftDrawer.Navigator>
    );
  }

  const DrawerStack = () => (
    <Drawer.Navigator
      id="RightDrawer"
      screenOptions={{
        drawerPosition: 'right',
        headerShown: false,
      }}
      drawerContent={props => <Sliderbar {...props} />}>
      <Drawer.Screen
        name="LeftDrawer"
        component={LeftDrawerScreen}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );

  // const TabMainStackScreen = () => (
  //   <BottomTab.Navigator
  //     backBehavior="history"
  //     initialRouteName={routes.HOME_SCREEN}
  //     screenOptions={{
  //       headerShown: false,
  //       tabBarHideOnKeyboard: true,
  //       tabBarStyle: {
  //         backgroundColor: colors.white,
  //       },
  //       tabBarIconStyle: {},
  //       tabBarAllowFontScaling: false,
  //       tabBarShowLabel: true,
  //       tabBarLabelStyle: {
  //         fontSize: 0,
  //       },
  //       tabBarActiveTintColor: colors.twenty_one,
  //       tabBarInactiveTintColor: colors.TWENTY_TWO,
  //     }}>
  //     <BottomTab.Screen
  //       name={routes.HOME_SCREEN}
  //       component={HOME_SCREEN}
  //       options={{
  //         tabBarLabel: '',
  //         tabBarIcon: ({focused}) => (
  //           <FastImage
  //             source={HomeActive}
  //             style={{height: 30, width: 30}}
  //             resizeMode="contain"
  //             tintColor={focused ? colors.twenty_one : colors.nine}
  //           />
  //         ),
  //       }}
  //     />

  //     <BottomTab.Screen
  //       name={routes.TRADE_SCREEN}
  //       component={TRADE_SCREEN}
  //       options={{
  //         tabBarLabel: '',
  //         tabBarIcon: ({focused}) => (
  //           <FastImage
  //             source={TradeInactive}
  //             style={{height: 30, width: 30}}
  //             resizeMode="contain"
  //             tintColor={focused ? colors.twenty_one : colors.nine}
  //           />
  //         ),
  //       }}
  //     />
  //     <BottomTab.Screen
  //       name={routes.MENU_SCREEN}
  //       component={MENU_SCREEN}
  //       options={{
  //         tabBarLabel: '',
  //         tabBarIcon: ({focused}) => (
  //           <FastImage
  //             source={MenuInactive}
  //             style={{height: 30, width: 30}}
  //             resizeMode="contain"
  //             tintColor={focused ? colors.twenty_one : colors.nine}
  //           />
  //         ),
  //       }}
  //     />
  //     <BottomTab.Screen
  //       name={routes.PROFILE_SCREEN}
  //       component={Profile}
  //       options={{
  //         tabBarLabel: '',
  //         tabBarIcon: ({focused}) => (
  //           <FastImage
  //             source={UserActive}
  //             style={{height: 30, width: 30}}
  //             resizeMode="contain"
  //             tintColor={focused ? colors.twenty_one : colors.nine}
  //           />
  //         ),
  //       }}
  //     />
  //   </BottomTab.Navigator>
  // );

  return (
    <NavigationContainer
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default Navigator;
