import {View, Text} from 'react-native';
import Header from '../../components/Header/Header';
import AppSafeAreaView from '../../components/statusBar/AppSafeAreaView';
import Dashboard from '../Dashboard/Dashboard';
import UserPersonalInfo from '../Profile/UserPersonalInfo/UserPersonalInfo';

const HomeScreen = ({navigation}) => {
  return (
    <AppSafeAreaView color="green" text='light-content'>
      <View style={{}}>
        <Header navigation={navigation} />
        {/* <UserPersonalInfo /> */}
        {/* <Dashboard /> */}
      </View>
    </AppSafeAreaView>
  );
};

export default HomeScreen;
