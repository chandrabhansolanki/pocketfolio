import {View} from 'react-native';
import Header from '../../components/Header/Header';

// import {NavigationContainer} from '@react-navigation/native';

const ProfileSideBar = ({navigation}) => {
  return (
    <View>
      <Header navigation={navigation} />
    </View>
  );
};
export default ProfileSideBar;
