import {View, StyleSheet} from 'react-native';
import Navigation from './src/Routes/Navigation';
import ProgileSideBar from './src/Pages/Profile/ProfileSideBar'
const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Navigation />
      {/* <ProgileSideBar /> */}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
});
