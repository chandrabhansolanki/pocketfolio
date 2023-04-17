import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import UserPersonalDetailLayout from '../../../components/Layout/UserPersonalDetailLayout';
import {leftArrow} from '../../../Images/Images';
import PersonData from './PersonData/PersonData';
import FinanceData from './FinanceData/FinanceData';
import Password from './Password/Password';



const renderScene = SceneMap({
  first: PersonData,
  second: FinanceData,
  third: Password,
});
const UserPersonalInfo = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Personal Data'},
    {key: 'second', title: 'Financial Data'},
    {key: 'third', title: 'Password'},
  ]);

  const renderTabBar = props => {
    return (
      <TabBar
        {...props}
        renderLabel={({focused, route, color}) => {
          return (
            <Text
              style={[
                styles.textstyle,
                {color: focused ? '#2E498B' : '#808080'},
              ]}>
              {route.title}
            </Text>
          );
        }}
        indicatorStyle={styles.indicatorStyle}
        style={styles.tabBar}
      />
    );
  };

  return (
    // <View style={{backgroundColor:'red' , flex:1}}>
    <ScrollView>
      <UserPersonalDetailLayout>
        <View style={{flexDirection: 'row', paddingTop: 30}}>
          <TouchableOpacity style={{paddingLeft: 18}}>
            <Image
              source={leftArrow}
              style={{height: 10.85, width: 8.75}}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <View
            style={{
            //   backgroundColor: 'green',
              width: Dimensions.get('window').width - 8.75 - 18 - 26,
            }}>
            <Text
              style={{
                color: '#1F1F1F',
                fontSize: 14,
                fontWeight: '400',
                lineHeight: 15,
                textAlign: 'center',
                // backgroundColor:'red'
              }}>
              Profile Details
            </Text>
          </View>
        </View>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{width: layout.width}}
          //   indicatorStyle={{backgroundColor: 'red'}}
          style={{
            // backgroundColor: 'black',
            height: Dimensions.get('window').height - 171,
          }}
          renderTabBar={renderTabBar}
        />
      </UserPersonalDetailLayout>
    </ScrollView>
    // </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    // color: 'red',
    backgroundColor: '#ffffff',
    elevation: 0,
  },
  indicatorStyle: {
    backgroundColor: '#2E498B',
    padding: 2,
    marginBottom: -2,
    borderRadius: 4,
  },
  textstyle: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default UserPersonalInfo;
