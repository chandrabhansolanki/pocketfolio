import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {JumpingTransition} from 'react-native-reanimated';
import UserPersonalDetailLayout from '../../components/Layout/UserPersonalDetailLayout';
import AppSafeAreaView from '../../components/statusBar/AppSafeAreaView';
import {
  dashboardIcon,
  dollarIcon,
  rewardIcon,
  diamondIcon,
  euroIcon,
} from '../../Images/Images';

const data = [
  {
    id: 1,
    image: dashboardIcon,
    icon: dollarIcon,
    name: 'USD',
    amount: '$454,253,65.98',
  },
  {
    id: 2,
    image: dashboardIcon,
    icon: rewardIcon,
    name: 'USD',
    amount: '$454,253,65.98',
  },
  {
    id: 3,
    image: dashboardIcon,
    icon: dollarIcon,
    name: 'USD',
    amount: '$454,253,65.98',
  },
  {
    id: 4,
    image: dashboardIcon,
    icon: euroIcon,
    name: 'USD',
    amount: '$454,253,65.98',
  },
];

const trendingData = [
  {
    id: 1,
    icon: diamondIcon,
    name: 'Diamond FX',
    value: '+ 3.99%',
    growth: 'Weekly Growth',
  },
  {
    id: 2,
    icon: diamondIcon,
    name: 'Diamond FX',
    value: '+ 3.99%',
    growth: 'Weekly Growth',
  },
  {
    id: 3,
    icon: diamondIcon,
    name: 'Diamond FX',
    value: '+ 3.99%',
    growth: 'Weekly Growth',
  },
  {
    id: 4,
    icon: diamondIcon,
    name: 'Diamond FX',
    value: '+ 3.99%',
    growth: 'Weekly Growth',
  },
  {
    id: 5,
    icon: diamondIcon,
    name: 'Diamond FX',
    value: '+ 3.99%',
    growth: 'Weekly Growth',
  },
];

const Dashboard = () => {
  const renderItem = ({item}) => {
    return (
      <View style={styles.trendingContainer}>
        <Image source={item?.icon} style={{height: 45, width: 45, }} />
        <Text style={styles.trendingContainerName}>{item.name}</Text>
        <Text style={styles.trendingContainerValue}>{item.value}</Text>
        <Text style={styles.trendingContainerGrowth}>{item.growth}</Text>
        <TouchableOpacity style={styles.trendingViewButton}>
          <Text style={{color:'#FFFFFF',fontWeight:'600',fontSize:10}}>View</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    // <AppSafeAreaView>
    <ScrollView>
      <UserPersonalDetailLayout height={250} dashboard={true}>
        <View style={styles.dashboardContainer}>
          <FlatList
            data={data}
            numColumns={2}
            // keyExtractor={category => category.amount}
            renderItem={({item}) => {
              return (
                <View style={styles.cardContianer}>
                  <ImageBackground
                    source={item.image}
                    style={{
                      height: 167,
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: '100%',
                      marginBottom: 10,
                    }}
                    // resizeMode='stretch'
                    resizeMode="stretch">
                    <Image source={item.icon} style={styles.imageIcon} />
                    <Text style={styles.cardContianerNames}>{item.name}</Text>
                    <Text style={styles.cardContianerAmount}>
                      {item.amount}
                    </Text>
                  </ImageBackground>
                </View>
              );
            }}
          />
        </View>
        <View style={{justifyContent:'center'}}>
          <FlatList
            data={trendingData}
            renderItem={renderItem}
            horizontal={true}
          />
        </View>
      </UserPersonalDetailLayout>
    </ScrollView>
    // </AppSafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageIcon: {
    height: 50,
    width: 50,
  },
  cardContianer: {
    width: '50%',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  dashboardContainer: {
    // alignItems: 'center',
    width: '100%',
    marginTop: 17,
    paddingHorizontal: 5,
  },
  cardContianerNames: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  cardContianerAmount: {
    fontSize: 14,
    fontWeight: '400',
    color: '#FFFFFF',
  },
  trendingContainer: {
    height: 190,
    width: 190,
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 30,
    flexDirection: 'column',
    marginBottom: 10,
    marginHorizontal:80,
    // paddingLeft: 70,
    // justifyContent:'center'
    alignItems:'center',
    paddingVertical:20
    
  },
  trendingContainerName: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
    marginTop:10,
  },
  trendingContainerValue: {
    color: '#026C00',
    fontSize: 18,
    fontWeight: '500',
  },
  trendingContainerGrowth:{
    color: '#000000',
    fontSize: 9,
    fontWeight: '400',
  },
  trendingViewButton:{
    backgroundColor:'#0A2977',
    height:22,
    width:61,
    borderRadius:4,
    alignItems:'center',
    justifyContent:'center',
    marginTop:11,
  }
});

export default Dashboard;
