import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';
import {
  graphIcon,
  xpoLogo,
  HamburgerIcon,
  bellIcon,
  chat,
} from '../../Images/Images';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Header = ({navigation}) => {
  return (
    <View style={{height: 100, backgroundColor: 'pink'}}>
      <View style={styles.topNav}>
        <TouchableOpacity
          onPress={() => navigation.getParent('LeftDrawer').openDrawer()}>
          <View style={styles.leftsidecontainer}>
            <Image source={xpoLogo} style={styles.xpoIcon} />
            <Text style={styles.profileName}>Hi, Xeno</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.menuIconContainer}>
          <TouchableOpacity>
            <View style={styles.menuIcon}>
              <Image source={chat} style={styles.menuIconImg} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.menuIcon}>
              <Image source={bellIcon} style={styles.menuIconImg} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.menuIcon}>
              <Image source={graphIcon} style={styles.menuIconImg} />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.menuIcon}>
              <Image source={HamburgerIcon} style={styles.menuIconImg} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topNav: {
    height: '100%',
    backgroundColor: '#0E3AAA',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    textAlign: 'center',
  },

  xpoIcon: {
    height: 61,
    width: 61,
  },
  profileName: {
    color: '#FFFFFF',
    fontSize: 12,
    lineHeight: 14.06,
    marginLeft: 10,
  },
  leftsidecontainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIconContainer: {
    flexDirection: 'row',
  },
  menuIcon: {
    height: 15.75,
    width: 17.18,
    margin: 6,
  },
  menuIconImg: {
    height: '100%',
    width: '100%',
  },
  iconsAndTitleContainer: {
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  iconContainer: {
    height: 27,
    width: 27,
  },
  icon: {
    height: '100%',
    width: '100%',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 11,
    textAlign: 'center',
  },
});

export default Header;
