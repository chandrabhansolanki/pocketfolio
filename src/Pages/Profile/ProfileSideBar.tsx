import {getTabBarHeight} from '@react-navigation/bottom-tabs/lib/typescript/src/views/BottomTabBar';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import Header from '../../components/Header/Header';
import ProfileDetailCard from '../../components/profileComponent/ProfileDetailCard';
import UserInfo from '../../components/profileComponent/UserInfo';

// import {NavigationContainer} from '@react-navigation/native';

const ProfileSideBar = () => {
  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <ProfileDetailCard />
        <UserInfo />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 20,
    // backgroundColor:'#F5FAFFDE',
    // height:'100%',
  },
});
export default ProfileSideBar;
