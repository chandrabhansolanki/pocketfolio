import {View, StyleSheet} from 'react-native';
import Navigation from './src/Routes/Navigation';
import {Provider} from 'react-redux';
import store from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.mainContainer}>
        <Navigation />
        {/* <ProgileSideBar /> */}
      </View>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
