import {View, Text, Image, ScrollView} from 'react-native';
import UserPersonalDetailLayout from '../../components/Layout/UserPersonalDetailLayout';
import AppSafeAreaView from '../../components/statusBar/AppSafeAreaView';
import {rubleIcon, dollarIcon, rewardIcon, euroIcon} from '../../Images/Images';

const Dashboard = () => {
  return (
    <AppSafeAreaView>
      <ScrollView>
        <UserPersonalDetailLayout height={297}>
          <View style={{flexDirection: 'row'}}>
            <View>
              <Image source={dollarIcon} style={{height: 215, width: 245}} />
              <Image source={euroIcon} style={{height: 167, width: 152}} />
            </View>
            <View>
              <Image source={rubleIcon} style={{height: 215, width: 245}} />
              <Image source={rewardIcon} style={{height: 215, width: 245}} />
            </View>
          </View>
        </UserPersonalDetailLayout>
      </ScrollView>
    </AppSafeAreaView>
  );
};

export default Dashboard;
