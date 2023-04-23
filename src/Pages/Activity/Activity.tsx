import {View, Text} from 'react-native';
import Header from '../../components/Header/Header';

const Activity = ({navigation}) => {
  return (
    <View >
      <Header navigation={navigation} />
      <Text style={{color: 'black'}}>Activity</Text>
    </View>
  );
};
export default Activity;
