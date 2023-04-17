import {View, Text, StyleSheet, ScrollView} from 'react-native';
import InputField from '../../../../components/InputField/InputField';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SmallButton from '../../../../components/Button/SmallButton';
// import {  } from 'react-native-gesture-handler';

const PersonData = () => {
  return (
    // <View style={{flex:1}}>
    <KeyboardAwareScrollView >
      {/* <ScrollView> */}
      <View style={styles.mainContainer}>
        <InputField label="First Name :" />
        <InputField label="Last Name :" />
        <InputField label="Mobile Number :" />
        <InputField label="Email Address :" />
        <InputField label="flat/House No :" />
        <InputField label="Address1 :" />
        <InputField label="Address2 :" />
        <InputField label="Country :" />
        <InputField label="State :" />
        <InputField label="City :" />
        <InputField label="Zip Code :" />
        <View style={{alignItems: 'center', marginTop: 8, marginBottom: 24}}>
          <SmallButton buttonName="Update Profile" width={134} />
        </View>
      </View>
    {/* </ScrollView> */}
    </KeyboardAwareScrollView>
    // </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 18,
    // justifyContent: 'center'
  },
});
export default PersonData;
