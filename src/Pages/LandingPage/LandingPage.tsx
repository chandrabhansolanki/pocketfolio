import React, {useRef, useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';
import {LandingArrow} from '../../Images/Images';
// import WelcomeScreen from './WelcomeScreen/WelcomeScreen';
import WelcomeScreen_2 from './WelcomeScreen_2/WelcomeScreen_2';
import WelcomeScreen_3 from './WelcomeScreen_3/WelcomeScreen_3';
import WelcomeScreen_1 from './WelcomeScreen_1/WelcomeScreen_1';

const LandingPage = () => {
  const [swiperIndex, setSwiperIndex] = useState(0);
  const ArrowButton = useRef();

  const nextSlide = () => {
    // ArrowButton.curre'ljht
    ArrowButton.current.scrollBy(1);
    // console.log('sdff');
  };

  const skipHandler = () => {

  }

  return (
    <View style={styles.container}>
      <Swiper
        onIndexChanged={index => setSwiperIndex(index)}
        ref={ArrowButton}
        loop={false}
        paginationStyle={{
          position: 'absolute',
          bottom: 35,
          right: 250,
        }}
        activeDot={
          <View
            style={{
              backgroundColor: '#007aff',
              width: 16,
              height: 3,
              borderRadius: 4,
              marginRight: 5,
            }}
          />
        }
        dot={
          <View
            style={{
              backgroundColor: 'rgba(0, 70, 179, 0.5)',
              width: 16,
              height: 3,
              borderRadius: 4,
              marginRight: 5,
            }}
          />
        }>
        <WelcomeScreen_1 />
        <WelcomeScreen_2 />
        <WelcomeScreen_3 />
      </Swiper>
      {swiperIndex !== 2 ? (
        <TouchableOpacity
          style={styles.arrowContainer}
          onPress={() => nextSlide()}>
          <View style={{}}>
            <Image source={LandingArrow} style={styles.arrowImage} />
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.arrowContainer} onPress={skipHandler}>
          <View>
            <Text style={styles.skip}>skip</Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'white'},
  arrowImage: {
    width: 24,
    height: 10,
  },
  arrowContainer: {
    position: 'absolute',
    right: 30,
    bottom: 30,
  },
  skip: {
    color: '#0046B3',
  },
});

export default LandingPage;
