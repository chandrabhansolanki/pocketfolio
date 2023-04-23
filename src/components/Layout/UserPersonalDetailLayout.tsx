// import {Children} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
// import {  } from 'react-native-gesture-handler';
import {
  HeaderImage,
  increaseIcon,
  walletIcon,
  depositIcon,
  WithdrawaIcon,
  cryptoIcon,
  descriptiveIcon,
  transactionIcon,
} from '../../Images/Images';

const UserPersonalDetailLayout = ({children, height, dashboard}) => {
  const data = [
    {
      id: 1,
      image: depositIcon,
      name: 'Deposit',
    },
    {
      id: 2,
      image: WithdrawaIcon,
      name: 'Withdrawal',
    },
    {
      id: 3,
      image: cryptoIcon,
      name: 'Crypto',
    },
    {
      id: 4,
      image: descriptiveIcon,
      name: 'Descriptive',
    },
    {
      id: 5,
      image: transactionIcon,
      name: 'Transaction',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={{
          width: '20%',
          alignItems: 'center',
        }}>
        <Image source={item.image} style={{height: 56, width: 56}} />
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 11, color: '#FFFFFF',fontWeight:'500',lineHeight:13}}>
            {item.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView>
      <View style={styles.firstContainer}>
        <View style={[styles.secoundContainer, {height: height}]}>
          {dashboard && (
            <View>
              <View style={styles.mainContainer}>
                <View style={styles.cardContainer}>
                  <Image source={walletIcon} style={styles.imageSize} />
                  <View>
                    <Text style={styles.cardContainerTitle}>
                      Portfolio Value
                    </Text>
                    <Text style={styles.cardContainerText}>$20,321</Text>
                  </View>
                </View>
                <View style={styles.cardContainer}>
                  <Image source={increaseIcon} style={styles.imageSize} />
                  <View>
                    <Text style={styles.cardContainerTitle}>
                      Performance 24h
                    </Text>
                    <Text style={styles.cardContainerText}>+3.99%</Text>
                  </View>
                </View>
              </View>
              <View style={{marginTop: 27, marginHorizontal: 20}}>
                <FlatList
                  data={data}
                  renderItem={renderItem}
                  numColumns={5}
                  // keyExtractor={item =>item.id}
                />
              </View>
            </View>
          )}
        </View>
        <View style={styles.thirdContainer}>{children}</View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  firstContainer: {
    backgroundColor: '#d7f5ed',
  },
  secoundContainer: {
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    height: 71,
    backgroundColor: '#0E3AAA',
  },
  thirdContainer: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: 'white',
    marginHorizontal: 13,
    marginTop: -50,
    marginBottom:205
  },
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  imageSize: {
    height: 26,
    width: 26,
  },
  cardContainer: {
    borderRadius: 10,
    justifyContent: 'space-evenly',
    backgroundColor: '#0A2977',
    height: 74,
    flexDirection: 'row',
    alignItems: 'center',
    width: '45%',
    // marginHorizontal:20
  },
  cardContainerText: {
    textAlign: 'center',
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  cardContainerTitle: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '500',
    color: '#E6EAFF',
    letterSpacing: 1,
  },
});
export default UserPersonalDetailLayout;
