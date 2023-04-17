import {View, Text, StyleSheet} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import SmallButton from '../../../../components/Button/SmallButton';
import InputField from '../../../../components/InputField/InputField';

const Password = () => {
  return (
    <KeyboardAwareScrollView>
      <View style={styles.mainContainer}>
        <InputField label="Old Password :" />
        <InputField label="New Password :" />
        <InputField label="Confirm New Password :" />
        <View style={{alignItems: 'center', marginTop: 8, marginBottom: 24}}>
            <SmallButton buttonName="Update" width={104}/>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 18,
    // justifyContent: 'center'
    marginVertical: 12,
  },
});

export default Password;
