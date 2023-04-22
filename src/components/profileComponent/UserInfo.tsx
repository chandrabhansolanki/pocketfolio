import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  videoIcon,
  eyeIcon,
  financeDataIcon,
  messageIcon,
  InformationIcon,
  passwordChangeIcon,
  logoutIcon,
  arrowIcon,
} from '../../Images/Images';
import {useDispatch} from 'react-redux';
import {logout} from '../../slices/AuthServices/authSlice';
import NavigationService from '../../Routes/NavigationService';
import {ACTIVITY} from '../../Routes/routes';

const UserInfo = () => {
  const dispatch = useDispatch();
  const data = [
    {
      id: 1,
      title: 'Financial Data',
      icon: financeDataIcon,
      detail: 'Get your financial data',
      arrow: arrowIcon,
      height: 15,
      width: 14.17,
      onPress: () => console.log('fianacila'),
    },
    {
      id: 2,
      title: 'Activity',
      icon: eyeIcon,
      detail: 'Check your latest activity',
      arrow: arrowIcon,
      height: 10.23,
      width: 15,
      onPress: () => NavigationService.navigate(ACTIVITY),
    },
    {
      id: 3,
      title: 'News',
      icon: InformationIcon,
      detail: 'Find latest news',
      arrow: arrowIcon,
      height: 15,
      width: 15,
      onPress: () => console.log('news'),
    },
    {
      id: 4,
      title: 'Support',
      icon: messageIcon,
      detail: 'Connect with customer support',
      arrow: arrowIcon,
      height: 15,
      width: 15,
      onPress: () => console.log('support'),
    },
    {
      id: 5,
      title: 'Tutorials',
      icon: videoIcon,
      detail: 'Learn from videos',
      arrow: arrowIcon,
      height: 12,
      width: 15,
      onPress: () => console.log('tutorials'),
    },
    {
      id: 6,
      title: 'Change Password',
      icon: passwordChangeIcon,
      detail: 'Change your password',
      arrow: arrowIcon,
      height: 17.03,
      width: 15,
      onPress: () => console.log('password'),
    },
    {
      id: 7,
      title: 'Logout',
      icon: logoutIcon,
      detail: 'Logout from your profile',
      arrow: arrowIcon,
      height: 15.4,
      width: 14,
      onPress: () => dispatch(logout()),
    },
  ];

  return (
    <View style={styles.mainContainer}>
      {data.map(item => {
        return (
          <TouchableOpacity onPress={() => item?.onPress()}>
            <View style={styles.detail_info}>
              <View style={{width: '20%'}}>
                <Image
                  source={item?.icon}
                  style={{height: item.height, width: item.width}}
                />
              </View>
              <View
                style={{
                  // justifyContent: 'space-between',
                  flexDirection: 'row',
                  // marginLeft: 24,
                  // backgroundColor: 'green',
                  // height: 47,
                  paddingBottom: 16,
                  borderBottomWidth: 1,
                  borderBottomColor: '#E4E4E4',
                  width: '80%',
                  // alignItems: 'center',
                  // paddingVertical:6
                  // paddingLeft: 16,
                }}>
                <View>
                  <Text
                    style={{
                      color: '#555555',
                      lineHeight: 15,
                      fontSize: 12,
                      fontWeight: '500',
                    }}>
                    {item?.title}
                  </Text>
                  <Text style={{color: '#808080', fontSize: 10}}>
                    {item?.detail}
                  </Text>
                </View>
                <View
                  style={{
                    alignItems: 'flex-end',
                    //   backgroundColor: 'yellow',
                    marginLeft: 'auto',
                    alignSelf: 'center',
                  }}>
                  <Image
                    source={item?.arrow}
                    style={{height: 9, width: 8}}
                    resizeMode="contain"
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // marginTop: 61,
    borderColor: '#E4E4E4',
    borderWidth: 1,
    backgroundColor: '#FFFFFF',
    // height: 105,
    borderRadius: 12,
    elevation: 2,
    marginVertical: 20,
    paddingVertical: 20,
  },
  detail_info: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 6,
    paddingHorizontal: 15,
    // backgroundColor: 'red'
    // alignItems: 'center',
  },
});

export default UserInfo;
