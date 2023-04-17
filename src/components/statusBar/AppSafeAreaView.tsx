import {SafeAreaView, StatusBar, View} from 'react-native';

const AppSafeAreaView = ({children, color, text}) => {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={color} barStyle={text} />
      <View>{children}</View>
    </SafeAreaView>
  );
};

export default AppSafeAreaView;
